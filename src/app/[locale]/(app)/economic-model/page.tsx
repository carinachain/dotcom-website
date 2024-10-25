'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';
import { memo, useEffect, useRef, useState } from 'react';

export default function Profit() {
  return (
    <>
      <MemoizedCarousel />
      <MemoizedTitle />
      <MemoizedAdvantage />
      <MemoizedChart />
    </>
  );
}

// Carousel Component
const Carousel: React.FC = () => {
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
      <div className="relative h-[170px] w-[1200px] overflow-hidden rounded-none md:h-[398px] md:rounded-t-[80px]">
        <div className="size-full">
          <div
            id="carousel-image"
            className="size-full bg-[url('/images/architecture_header.png')] bg-contain bg-no-repeat"
          />
        </div>
      </div>
    </div>
  );
};

// Title Component
const Title: React.FC = () => {
  const t = useTranslations('economic-model.carousel');
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
      <div className="mt-[50px] w-[1200px] px-[10px] text-center text-3xl">
        <div id="carousel-text" className="mb-[15px]">
          {t('title1')}
        </div>
        <div>{t('title2')}</div>
      </div>
    </div>
  );
};

// Advantage Component
const Advantage: React.FC = () => {
  const t = useTranslations('economic-model.advantage');
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

  const advantageKeys = ['text1', 'text2', 'text3', 'text4'] as const;

  return (
    <div
      className={`flex justify-center py-[50px] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="w-[1200px]">
        <div
          ref={containerRef}
          className="text-color-2 grid grid-cols-1 gap-2 rounded-[40px] bg-sky-100/20 p-[20px] text-lg leading-8 md:grid-cols-4 md:gap-6"
        >
          {advantageKeys.map((key, index) => {
            let animationClass = '';
            if (index === 0) animationClass = 'animate-slide-in-left';
            else if (index === 1) animationClass = 'animate-slide-in-left';
            else if (index === 2) animationClass = 'animate-slide-in-right';
            else if (index === 3) animationClass = 'animate-slide-in-right';
            return (
              <div key={index} className={isVisible ? animationClass : ''}>
                <AdvantageCard key={index} index={index + 1} text={t(key)} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// AdvantageCard Component Props Type Definition
interface AdvantageCardProps {
  index: number;
  text: string;
}

// AdvantageCard Component
const AdvantageCard: React.FC<AdvantageCardProps> = ({ index, text }) => {
  return (
    <div className="flex h-[350px] w-full flex-col rounded-none bg-white px-[30px] hover:cursor-pointer hover:shadow-lg md:rounded-[25px]">
      <div className="my-[30px] size-[80px] rounded-[10px] bg-slate-400/90">
        <div className="ml-[20px] pt-[9px] text-7xl text-white">{index}</div>
      </div>
      <div className="pb-[10px]">{text}</div>
    </div>
  );
};

// Chart Component
const Chart: React.FC = () => {
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

  return (
    <div
      className={`flex justify-center pb-[100px] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        ref={containerRef}
        className={`h-[350px] w-[1200px] sm:h-[550px] md:h-[900px] ${isVisible ? 'animate-slide-in-bottom' : ''}`}
      >
        <div className="size-full bg-[url('/images/architecture.png')] bg-contain bg-no-repeat" />
      </div>
    </div>
  );
};

// Memoized Components to prevent unnecessary re-renders
const MemoizedCarousel = memo(Carousel);
const MemoizedTitle = memo(Title);
const MemoizedAdvantage = memo(Advantage);
const MemoizedChart = memo(Chart);
