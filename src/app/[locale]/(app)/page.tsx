'use client';

import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl';
import React, { memo, useEffect, useState, useRef } from 'react';

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

  return (
    <div
      id="carousel"
      className={`flex h-[630px] w-full justify-center bg-[url('/images/index_head_bg.png')] bg-no-repeat transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mw-[1200px] flex justify-center gap-x-36 md:justify-between">
        <div className="flex h-full flex-col justify-center gap-y-8">
          <div className="flex flex-col text-4xl">
            <div className="text-color-1 animate-slide-in-left">{t('title1')}</div>
            <div className="text-orange-500 animate-slide-in-right">{t('title2')}</div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="text-color-3">{t('text1')}</div>
            <div className="text-color-3">{t('text2')}</div>
            <div className="text-color-3">{t('text3')}</div>
          </div>
          <Button className="w-[180px] animate-scale-in" variant="contained">
            <div className="text-white">{t('button1')}</div>
          </Button>
        </div>
        <div className="mt-[32px] hidden w-[480px] flex-col items-center justify-end bg-[url('/images/index_head_image_01.png')] bg-no-repeat md:flex">
          <Button className="mw-[270px] mb-[30px] ml-[40px] rounded-full animate-scale-in" variant="contained">
            <div className="py-1 text-lg text-white">{t('button2')}</div>
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
      { threshold: 0.1 } // Adjust the threshold as needed
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
      <div className="w-[1200px]">
        <div className={`flex justify-center pb-[40px] pt-[50px] text-2xl ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
          {t('title')}
        </div>
        <div
          ref={containerRef}
          className={`text-color-2 mb-[100px] grid grid-cols-1 gap-x-6 drop-shadow-2xl md:grid-cols-3 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {features.map((feature, idx) => {
            let animationClass = '';
            if (idx === 0) animationClass = 'animate-slide-in-left';
            else if (idx === 1) animationClass = 'animate-slide-in-bottom';
            else if (idx === 2) animationClass = 'animate-slide-in-right';

            return (
              <div key={idx} className={isVisible ? animationClass : ""}>
                <MemoizedBox {...feature} bgColor="bg-orange-400" titleColor="text-white" />
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
  const [isVisible, setIsVisible] = useState(false);

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

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
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
    <div id="advantage" className="flex justify-center pb-0 md:pb-[100px]">
      <div className="w-[1200px]">
        <div className={`flex justify-center pb-[40px] pt-[50px] text-2xl ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
          {t('title')}
        </div>
        <div
          ref={containerRef}
          className={`text-color-2 grid grid-cols-1 gap-x-2 text-xs md:grid-cols-4 md:gap-x-6 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {advantages.map((advantage, idx) => {
            let animationClass = '';
            if (idx === 0) animationClass = 'animate-slide-in-left';
            else if (idx === 1) animationClass = 'animate-slide-in-left';
            else if (idx === 2) animationClass = 'animate-slide-in-right';
            else if (idx === 3) animationClass = 'animate-slide-in-right';
            return (
              <div key={idx} className={isVisible ? animationClass : ""}>
                <MemoizedBox key={idx} {...advantage} bgColor="bg-gray-100" titleColor="text-orange-500" />
              </div>
            )
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

const Box: React.FC<BoxProps> = ({ title, texts, imageUrl, bgColor, titleColor }) => (
  <div
    className={`flex h-[450px] w-full flex-col items-center rounded-none ${bgColor} drop-shadow md:rounded-[50px] animate-fade-in-up cursor-pointer hover:drop-shadow-lg`}
  >
    <div className="flex h-[250px] items-center justify-center">
      <div
        className="size-[160px] bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
    <div className={`mb-[20px] text-2xl titleColor ${titleColor}`}>{title}</div>
    <div className="px-[30px]">
      {texts.map((text, idx) => (
        <div key={idx} className="mb-[15px]">
          {text}
        </div>
      ))}
    </div>
  </div>
);

// Memoized version of the Box component
const MemoizedBox = memo(Box);

// Memoized version of components
const MemoizedCarousel = memo(Carousel);
const MemoizedFeature = memo(Feature);
const MemoizedAdvantage = memo(Advantage);
