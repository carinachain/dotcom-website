'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslations } from 'next-intl';
import { memo, useEffect, useRef, useState } from 'react';

export default function Points() {
  return (
    <>
      <MemoizedCarousel />
      <MemoizedFeature />
    </>
  );
}

// Carousel Component
const Carousel: React.FC = () => {
  const t = useTranslations('points.carousel');
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
      <div className="relative grid h-[500px] w-[1200px] grid-cols-1 overflow-hidden rounded-none bg-orange-300 bg-orange-400/80 md:grid-cols-2 md:rounded-t-[50px]">
        <div
          id="carousel-text"
          className="flex flex-col justify-center gap-3 px-10"
        >
          <div className="text-2xl">{t('title1')}</div>
          <div className="text-2xl">{t('title2')}</div>
          <div className="w-[380px] text-white">{t('text')}</div>
        </div>
        <div id="carousel-image" className="relative hidden md:block">
          <div className="absolute bottom-0 left-[50px] z-50 h-full w-[400px] bg-[url('/images/function_exclusive_head_image_01.png')] bg-cover" />
          <div className="absolute bottom-0 left-0 z-10 h-[480px] w-[450px] rounded-t-[50px] bg-slate-400/80" />
        </div>
        <DecorativeCircles />
      </div>
    </div>
  );
};

// Extracted decorative circles for Carousel
const DecorativeCircles: React.FC = () => (
  <>
    <div className="absolute left-[580px] top-[70px] z-50 size-[60px] bg-[url('/images/function_common_yen_bg.png')] bg-cover" />
    <div className="absolute bottom-[-15px] right-[80px] z-50 size-[40px] bg-[url('/images/function_exclusive_yen_bg.png')] bg-cover" />
    <div className="absolute left-[550px] top-[50px] z-50 size-[30px] rounded-full bg-black bg-cover" />
    <div className="absolute bottom-[30px] left-[80px] z-50 size-[30px] rounded-full bg-black bg-cover" />
    <div className="absolute bottom-[40px] left-[340px] z-50 size-[30px] rounded-full bg-white bg-cover" />
    <div className="absolute bottom-[70px] left-[410px] z-50 size-[30px] rounded-full bg-orange-500 bg-cover" />
    <div className="absolute bottom-[-60px] left-[380px] z-50 size-[120px] rounded-full bg-white bg-cover" />
    <div className="absolute bottom-[160px] left-[630px] z-30 size-[120px] rounded-full bg-white bg-cover" />
    <div className="absolute left-[110px] top-[-40px] z-50 size-[80px] rounded-full bg-white bg-cover" />
  </>
);

// Feature Component
const Feature: React.FC = () => {
  const t = useTranslations('points.feature');
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
      className={`flex justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="w-[1200px] pb-10 pt-[80px] md:pb-[80px]">
        <div
          className={`flex flex-col justify-between md:flex-row ${isVisible ? 'animate-slide-in-bottom' : ''}`}
        >
          <CircleDisplay value="500" label={t('jpy')} />
          <FeatureContent
            title={t('content.title')}
            texts={[t('content.text1'), t('content.text2'), t('content.text3')]}
          />
        </div>
        <div
          ref={containerRef}
          className={`grid grid-cols-1 gap-8 px-[20px] pt-[80px] text-gray-800 md:grid-cols-3 lg:px-[80px]
          ${isVisible ? 'animate-slide-in-bottom' : ''}`}
        >
          <FeatureBox
            imageUrl="/images/function_exclusive_white_pic_01.png"
            title={t('box1.title')}
            text={t('box1.text1')}
          />
          <FeatureBox
            imageUrl="/images/function_exclusive_white_pic_02.png"
            title={t('box2.title')}
            text={t('box2.text1')}
          />
          <div className={isVisible ? 'animate-slide-in-right' : ''}>
            <FeatureBox
              imageUrl="/images/function_exclusive_white_pic_03.png"
              title={t('box3.title')}
              text={t('box3.text1')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// CircleDisplay Component for the JPY display
interface CircleDisplayProps {
  value: string;
  label: string;
}

const CircleDisplay: React.FC<CircleDisplayProps> = ({ value, label }) => (
  <div className="mb-[50px] ml-0 flex justify-center md:mb-0 md:ml-[80px]">
    <div className="flex size-[250px] flex-col items-center justify-center rounded-full border-[20px] bg-orange-500 text-white">
      <div className="text-7xl">{value}</div>
      <div className="text-2xl">{label}</div>
    </div>
  </div>
);

// FeatureContent Component for content title and texts
interface FeatureContentProps {
  title: string;
  texts: string[];
}

const FeatureContent: React.FC<FeatureContentProps> = ({ title, texts }) => (
  <div className="flex grow flex-col items-center justify-center">
    <div className="mb-[40px] text-center text-3xl">{title}</div>
    <div className="flex flex-col items-center justify-center gap-1 px-[10px] text-gray-500">
      {texts.map((text, idx) => (
        <div key={idx} className="text-center">
          {text}
        </div>
      ))}
    </div>
  </div>
);

// Reusable FeatureBox Component
interface FeatureBoxProps {
  imageUrl: string;
  title: string;
  text: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ imageUrl, title, text }) => (
  <div className="flex min-h-[400px] flex-col rounded-xl bg-white shadow hover:cursor-pointer hover:shadow-lg">
    <div
      className="m-[20px] h-[160px] rounded-xl bg-cover"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="m-[20px]">
      <div className="mb-3 text-2xl text-orange-500">{title}</div>
      <div>{text}</div>
    </div>
  </div>
);

// Memoized Components to prevent unnecessary re-renders
const MemoizedCarousel = memo(Carousel);
const MemoizedFeature = memo(Feature);
