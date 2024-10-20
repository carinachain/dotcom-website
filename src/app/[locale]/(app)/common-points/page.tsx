
'use client';

import { useGSAP } from '@gsap/react';
import { useTranslations } from 'next-intl';
import { memo, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

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
  const t = useTranslations('common-points.carousel');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger animation on load
  }, []);

  useGSAP(() => {
    gsap.fromTo('#carousel-text', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0
    })
    gsap.fromTo('#carousel-image', {
      opacity: 0,
      x: 150
    }, {
      opacity: 1,
      x: 0
    })
  }, []);

  return (
    <div className={`flex justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative h-[1100px] w-[1200px] overflow-hidden bg-slate-300 md:h-[730px] md:rounded-t-[80px]">
        <div id="carousel-image" className="h-[390px] w-full bg-[url('/images/function_common_head_images_01.png')] bg-cover" />
        <div id="carousel-text" className="z-60 mt-[70px] flex flex-col items-center justify-center gap-3 px-10">
          <div className="text-2xl">{t('title1')}</div>
          <div className="text-2xl">{t('title2')}</div>
          <div className="mt-[20px] flex flex-col gap-2 text-center text-orange-500">
            <div>{t('text1')}</div>
            <div>{t('text2')}</div>
            <div>{t('text3')}</div>
          </div>
        </div>
        <DecorativeCircles />
      </div>
    </div>
  );
};

// Extracted the decorative circles into a separate component
const DecorativeCircles: React.FC = () => {
  return (
    <>
      <div className="absolute bottom-[170px] left-[70px] z-50 size-[60px] bg-[url('/images/function_common_yen_bg.png')] bg-cover" />
      <div className="absolute bottom-[100px] left-[-20px] z-50 size-[40px] bg-[url('/images/function_exclusive_yen_bg.png')] bg-cover" />
      <div className="absolute bottom-[180px] right-[80px] z-50 size-[30px] rounded-full bg-black bg-cover" />
      <div className="absolute bottom-[-60px] left-[120px] z-50 size-[120px] rounded-full bg-gray-100 bg-cover" />
      <div className="absolute bottom-[-100px] right-[-100px] z-30 size-[250px] rounded-full bg-gray-100 bg-cover" />
    </>
  );
};

// Feature Component
const Feature: React.FC = () => {
  const t = useTranslations('common-points.feature');
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
    <div ref={containerRef} className={`flex justify-center ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-[1200px] py-[80px]">
        <div className={`flex flex-col justify-between md:flex-row ${isVisible ? "animate-slide-in-bottom" : ""}`}>
          <CircleDisplay value="500" label={t('jpy')} />
          <FeatureContent
            title={t('content.title')}
            text={t('content.text1')}
          />
        </div>
        <FeatureBoxes t={t} />
      </div>
    </div>
  );
};

// CircleDisplay Component for the 500 JPY section
interface CircleDisplayProps {
  value: string;
  label: string;
}

const CircleDisplay: React.FC<CircleDisplayProps> = ({ value, label }) => {
  return (
    <div className="mb-[50px] ml-0 flex justify-center md:mb-0 md:ml-[80px]">
      <div className="flex size-[250px] flex-col items-center justify-center rounded-full border-[20px] bg-slate-700 text-white hover:cursor-pointer hover:shadow-lg">
        <div className="text-7xl">{value}</div>
        <div className="text-2xl">{label}</div>
      </div>
    </div>
  );
};

// FeatureContent Component for the content title and description
interface FeatureContentProps {
  title: string;
  text: string;
}

const FeatureContent: React.FC<FeatureContentProps> = ({ title, text }) => {
  return (
    <div className="flex grow flex-col items-center justify-center px-[10px]">
      <div className="mb-[40px] text-3xl">{title}</div>
      <div className="flex flex-col items-center justify-center gap-1 text-gray-500">
        <div className="max-w-screen-sm text-center leading-8">{text}</div>
      </div>
    </div>
  );
};

// FeatureBoxes Component for the feature boxes at the bottom
interface FeatureBoxesProps {
  t: (key: any) => any;
}

const FeatureBoxes: React.FC<FeatureBoxesProps> = ({ t }) => {
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

  const boxes = [
    {
      title: t('box1.title'),
      text: t('box1.text1'),
      imageUrl: '/images/function_common_white_pic_01.png',
    },
    {
      title: t('box2.title'),
      text: t('box2.text1'),
      imageUrl: '/images/function_common_white_pic_02.png',
    },
    {
      title: t('box3.title'),
      text: t('box3.text1'),
      imageUrl: '/images/function_common_white_pic_03.png',
    },
  ];

  return (
    <div ref={containerRef} className="grid grid-cols-1 gap-8 px-[20px] pt-[80px] text-gray-800 md:grid-cols-3 lg:px-[80px]">
      {boxes.map((box, index) => {
        let animationClass = '';
        if (index === 0) animationClass = 'animate-slide-in-left';
        else if (index === 1) animationClass = 'animate-slide-in-bottom';
        else if (index === 2) animationClass = 'animate-slide-in-right';
        return (
          <div key={index} className={isVisible ? animationClass : ""}>
            <FeatureBox
              key={index}
              title={box.title}
              text={box.text}
              imageUrl={box.imageUrl}
            />
          </div>
      );
      })}
    </div>
  );
};

// FeatureBox Component for individual feature boxes
interface FeatureBoxProps {
  title: string;
  text: string;
  imageUrl: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ title, text, imageUrl }) => {
  return (
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
};

// Memoized Components to prevent unnecessary re-renders
const MemoizedCarousel = memo(Carousel);
const MemoizedFeature = memo(Feature);
