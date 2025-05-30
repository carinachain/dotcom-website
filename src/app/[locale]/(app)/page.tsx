'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useTranslations } from 'next-intl';
import React, { memo, useEffect, useRef, useState } from 'react';

import { Button, ButtonArrow } from './components/button';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return <Content />;
}

// Home page main content
const Content: React.FC = () => {
  return (
    <div>
      <MemoizedCarousel />
      <MemoizedFeature />
      <MemoizedAdvantage />
    </div>
  );
};

// Carousel block with animation
const Carousel: React.FC = () => {
  const t = useTranslations('home.carousel');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger animation on load
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      '#carousel-text',
      {
        opacity: 0,
        y: 100,
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
      id="carousel"
      className={`flex h-[630px] w-full justify-center bg-[url('/images/index_head_bg.png')] bg-no-repeat transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mw-[1200px] flex justify-center gap-x-[200px] md:justify-between">
        <div
          id="carousel-text"
          className="flex h-full flex-col justify-center gap-y-8"
        >
          <div className="flex flex-col text-4xl">
            <div className="text-color-1">{t('title1')}</div>
            <div className="text-orange-500">{t('title2')}</div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="text-color-3">{t('text1')}</div>
            <div className="text-color-3">{t('text2')}</div>
            <div className="text-color-3">{t('text3')}</div>
          </div>
          <ButtonArrow className="w-[180px]">{t('button1')}</ButtonArrow>
        </div>
        <div
          id="carousel-image"
          className="mt-[32px] hidden w-[480px] flex-col items-center justify-end bg-[url('/images/index_head_image_01.png')] bg-no-repeat md:flex"
        >
          <Button className="mw-[270px] mb-[30px] ml-[40px] rounded-full py-3">
            <span className="font-semibold">{t('button2')}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Feature block with animation
const Feature: React.FC = () => {
  const t = useTranslations('home.feature');
  const [isVisible, setIsVisible] = useState(false);

  const features = [
    {
      title: t('box1.text1'),
      texts: [t('box1.text2'), t('box1.text3')],
      imageUrl: '/images/function_interchange_icon_01.png',
    },
    {
      title: t('box2.text1'),
      texts: [t('box2.text3'), t('box2.text2')],
      imageUrl: '/images/function_interchange_icon_02.png',
    },
    {
      title: t('box3.text1'),
      texts: [t('box3.text2'), t('box3.text3')],
      imageUrl: '/images/function_interchange_icon_03.png',
    },
  ];

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

  return (
    <div id="feature" className="flex justify-center">
      <div className="w-[1200px] pt-[40px]">
        <div
          className={`flex justify-center text-2xl ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <MemoizedTitle title={t('title')} />
        </div>
        <div
          ref={containerRef}
          className={`text-color-2 mb-[100px] grid grid-cols-1 gap-x-6 pt-[50px] drop-shadow-2xl transition-opacity duration-1000 md:grid-cols-3 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {features.map((feature, idx) => {
            let animationClass = '';
            if (idx === 0) animationClass = 'animate-slide-in-left';
            else if (idx === 1) animationClass = 'animate-slide-in-bottom';
            else if (idx === 2) animationClass = 'animate-slide-in-right';

            return (
              <div
                key={idx}
                className={`${isVisible ? animationClass : ''} px-4 py-2 md:p-0`}
              >
                <MemoizedBox
                  {...feature}
                  bgColor="bg-gradient-to-tr from-orange-600 to-orange-400 hover:shadow-lg hover:shadow-orange-400"
                  titleColor="text-white"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Advantage block with animation
const Advantage: React.FC = () => {
  const t = useTranslations('home.advantage');

  const advantages = [
    {
      title: t('box1.text1'),
      texts: [
        t('box1.text2'),
        t('box1.text3'),
        t('box1.text4'),
        t('box1.text5'),
      ],
      imageUrl: '/images/index_advantage_icon_01.png',
    },
    {
      title: t('box2.text1'),
      texts: [
        t('box2.text2'),
        t('box2.text3'),
        t('box2.text4'),
        t('box2.text5'),
      ],
      imageUrl: '/images/index_advantage_icon_02.png',
    },
    {
      title: t('box3.text1'),
      texts: [
        t('box3.text2'),
        t('box3.text3'),
        t('box3.text4'),
        t('box3.text5'),
      ],
      imageUrl: '/images/index_advantage_icon_03.png',
    },
    {
      title: t('box4.text1'),
      texts: [
        t('box4.text2'),
        t('box4.text3'),
        t('box4.text4'),
        t('box4.text5'),
      ],
      imageUrl: '/images/index_advantage_icon_04.png',
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const boxs = gsap.utils.toArray(containerRef.current.children);
    boxs.forEach((box: any, idx: number) => {
      gsap.from(box, {
        opacity: 0,
        y: 100 * idx,
        delay: idx * 0.1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: box,
          start: 'top bottom',
          toggleActions: 'restart',
        },
      });
    });
  }, []);

  return (
    <div id="advantage" className="flex justify-center pb-4 md:pb-[100px]">
      <div className="w-[1200px]">
        <div className="flex justify-center pb-[40px] pt-[50px] text-2xl">
          <MemoizedTitle title={t('title')} />
        </div>
        <div
          ref={containerRef}
          className="text-color-2 grid grid-cols-1 gap-x-2 text-xs transition-opacity duration-1000 md:grid-cols-4 md:gap-x-6"
        >
          {advantages.map((advantage, idx) => {
            return (
              <div key={idx} className="px-4 py-2 md:p-0">
                <MemoizedBox
                  key={idx}
                  {...advantage}
                  bgColor="bg-gradient-to-tr from-gray-200 to-gray-100 hover:shadow-lg hover:shadow-gray-100"
                  titleColor="text-orange-500"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Reusable Box Component with animation
interface BoxProps {
  title: string;
  texts: string[];
  imageUrl: string;
  bgColor: string;
  titleColor: string;
}

const Box: React.FC<BoxProps> = ({
  title,
  texts,
  imageUrl,
  bgColor,
  titleColor,
}) => {
  return (
    <div
      className={`flex h-[500px] w-full animate-fade-in-up cursor-pointer flex-col items-center rounded-[50px] px-5 drop-shadow transition-all duration-300 ${bgColor}`}
    >
      <div className="flex h-[250px] items-center justify-center">
        <div
          className="size-[160px] bg-contain bg-no-repeat text-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className={`titleColor mb-[20px] text-2xl ${titleColor}`}>
        {title}
      </div>
      <div>
        {texts.map((text, idx) => (
          <div key={idx} className="mb-[15px]">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

interface TitleProps {
  title: string;
  className?: string;
}
const Title: React.FC<TitleProps> = ({ title, className }) => (
  <div className={`group relative ${className}`}>
    <span>{title}</span>
    <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 bg-orange-500 transition-all group-hover:w-3/6" />
    <span className="absolute -bottom-1 right-1/2 h-0.5 w-0 bg-orange-500 transition-all group-hover:w-3/6" />
  </div>
);

// Memoized version of the Box component
const MemoizedBox = memo(Box);

// Memoized version of the Title component
const MemoizedTitle = memo(Title);

// Memoized version of components
const MemoizedCarousel = memo(Carousel);
const MemoizedFeature = memo(Feature);
const MemoizedAdvantage = memo(Advantage);
