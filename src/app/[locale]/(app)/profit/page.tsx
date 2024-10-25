'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';
import { memo, useEffect, useRef, useState } from 'react';

export default function Profit() {
  return (
    <>
      <MemoizedCarousel />
      <MemoizedAdvantage />
    </>
  );
}

// Carousel Component
const Carousel: React.FC = () => {
  const t = useTranslations('profit.carousel');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger animation on load
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      '#carousel-text',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      },
    );
    gsap.fromTo(
      '#carousel-image',
      {
        opacity: 0,
        x: 150,
      },
      {
        opacity: 1,
        x: 0,
      },
    );
  }, []);

  return (
    <div
      className={`flex justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="relative h-[900px] w-[1200px] overflow-hidden rounded-none bg-gray-600/90 bg-slate-300 md:h-[800px] md:rounded-t-[80px]">
        <div
          id="carousel-image"
          className="h-[450px] w-full bg-[url('/images/function_income_head_images_01.png')] bg-cover"
        />
        <div
          id="carousel-text"
          className="mt-[50px] flex flex-col items-center justify-center gap-3 px-10"
        >
          <div className="text-3xl text-orange-500">{t('title1')}</div>
          <div className="mw-[500px] mt-[20px] text-center text-lg leading-8 text-white">
            {t('text1')}
          </div>
        </div>
      </div>
    </div>
  );
};

// Advantage Component with reusable AdvantageCard
const Advantage: React.FC = () => {
  const t = useTranslations('profit.advantage');
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      { threshold: 0.1 }, // Adjust the threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const advantages = [
    {
      title: t('box1.title'),
      text: t('box1.text'),
      imageUrl: '/images/index_advantage_icon_01.png',
    },
    {
      title: t('box2.title'),
      text: t('box2.text'),
      imageUrl: '/images/index_advantage_icon_02.png',
    },
    {
      title: t('box3.title'),
      text: t('box3.text'),
      imageUrl: '/images/index_advantage_icon_03.png',
    },
  ];

  return (
    <div
      className={`flex justify-center py-4 md:pb-[100px] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="w-[1200px]">
        <div
          ref={containerRef}
          className="text-color-2 grid grid-cols-1 gap-x-2 pt-0 text-lg leading-8 md:grid-cols-3 md:gap-x-6 md:pt-[50px]"
        >
          {advantages.map((advantage, index) => {
            let animationClass = '';
            if (index === 0) animationClass = 'animate-slide-in-left';
            else if (index === 1) animationClass = 'animate-slide-in-bottom';
            else if (index === 2) animationClass = 'animate-slide-in-right';
            return (
              <div
                key={index}
                className={`${isVisible ? animationClass : ''} px-4 py-2 md:p-0`}
              >
                <AdvantageCard
                  key={index}
                  title={advantage.title}
                  text={advantage.text}
                  imageUrl={advantage.imageUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// AdvantageCard Component
interface AdvantageCardProps {
  title: string;
  text: string;
  imageUrl: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  title,
  text,
  imageUrl,
}) => (
  <div className="flex h-[450px] w-full flex-col rounded-[50px] bg-gray-100 px-[30px] drop-shadow hover:cursor-pointer hover:shadow-lg">
    <div
      className="ml-[-20px] h-[100px] w-[110px] bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="pb-[15px] pt-[30px] text-3xl text-orange-500">{title}</div>
    <div className="pb-[10px]">{text}</div>
  </div>
);

// Memoized Components
const MemoizedCarousel = memo(Carousel);
const MemoizedAdvantage = memo(Advantage);
