'use client';

import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl';
import React, { memo } from 'react';

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

// Carousel block
const Carousel: React.FC = () => {
  const t = useTranslations('home.carousel');
  return (
    <div
      id="carousel"
      className="flex h-[630px] w-full justify-center bg-[url('/images/index_head_bg.png')] bg-no-repeat"
    >
      <div className="mw-[1200px] flex justify-center gap-x-36 md:justify-between">
        <div className="flex h-full flex-col justify-center gap-y-8">
          <div className="flex flex-col text-4xl">
            <div className="text-color-1">{t('title1')}</div>
            <div className="text-orange-500">{t('title2')}</div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="text-color-3">{t('text1')}</div>
            <div className="text-color-3">{t('text2')}</div>
            <div className="text-color-3">{t('text3')}</div>
          </div>
          <Button className="w-[180px]" variant="contained">
            <div className="text-white">{t('button1')}</div>
          </Button>
        </div>
        <div className="mt-[32px] hidden w-[480px] flex-col items-center justify-end bg-[url('/images/index_head_image_01.png')] bg-no-repeat md:flex">
          <Button
            className="mw-[270px] mb-[30px] ml-[40px] rounded-full"
            variant="contained"
          >
            <div className="py-1 text-lg text-white">{t('button2')}</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Feature block
const Feature: React.FC = () => {
  const t = useTranslations('home.feature');
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

  return (
    <div id="feature" className="flex justify-center">
      <div className="w-[1200px]">
        <div className="flex justify-center pb-[40px] pt-[50px] text-2xl">
          {t('title')}
        </div>
        <div className="text-color-2 mb-[100px] grid grid-cols-1 gap-x-6 drop-shadow-2xl md:grid-cols-3">
          {features.map((feature, idx) => (
            <MemoizedBox key={idx} {...feature} bgColor="bg-orange-400" />
          ))}
        </div>
      </div>
    </div>
  );
};

// Advantage block
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

  return (
    <div id="advantage" className="flex justify-center pb-0 md:pb-[100px]">
      <div className="w-[1200px]">
        <div className="flex justify-center pb-[40px] pt-[50px] text-2xl">
          {t('title')}
        </div>
        <div className="text-color-2 grid grid-cols-1 gap-x-2 text-xs md:grid-cols-4 md:gap-x-6">
          {advantages.map((advantage, idx) => (
            <MemoizedBox key={idx} {...advantage} bgColor="bg-gray-100" />
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Box Component
interface BoxProps {
  title: string;
  texts: string[];
  imageUrl: string;
  bgColor: string;
}

const Box: React.FC<BoxProps> = ({ title, texts, imageUrl, bgColor }) => (
  <div
    className={`flex h-[450px] w-full flex-col items-center rounded-none ${bgColor} drop-shadow md:rounded-[50px]`}
  >
    <div className="flex h-[250px] items-center justify-center">
      <div
        className="size-[160px] bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
    <div className="mb-[20px] text-2xl text-white">{title}</div>
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
