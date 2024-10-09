'use client';

import Button from '@mui/material/Button';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function Home() {
  return <Content />;
}

// Home page main content
const Content = function () {
  return (
    <div>
      <Carousel />
      <Feature />
      <Advantage />
    </div>
  );
};

// Carousel block
const Carousel = function () {
  const t = useTranslations('home.carousel');
  return (
    <div className="flex h-[630px] w-full justify-center bg-[url('/images/index_head_bg.png')] bg-no-repeat">
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
        <div className="mt-[32px] hidden w-[480px] flex-col items-center justify-end  bg-[url('/images/index_head_image_01.png')] bg-no-repeat md:flex">
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
const Feature = function () {
  const t = useTranslations('home.feature');
  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        <div className="flex justify-center pb-[40px] pt-[50px] text-2xl">
          {t('title')}
        </div>
        <div className="text-color-2 mb-[100px] grid grid-cols-1 gap-x-6 drop-shadow-2xl md:grid-cols-3">
          <div className="flex h-[450px] w-full flex-col items-center rounded-none bg-orange-400 drop-shadow md:rounded-[50px]">
            <div className="flex h-[250px] items-center justify-center">
              <div className="size-[160px] bg-[url(/images/function_interchange_icon_01.png)] bg-contain bg-no-repeat" />
            </div>
            <div className="mb-[20px] text-2xl text-white">
              {t('box1.text1')}
            </div>
            <div className="px-[30px]">
              <div className="mb-[15px]">{t('box1.text2')}</div>
              <div className="mb-[15px]">{t('box1.text3')}</div>
            </div>
          </div>
          <div className="flex h-[450px] w-full flex-col items-center rounded-none bg-orange-400 drop-shadow md:rounded-[50px]">
            <div className="flex h-[250px] items-center justify-center">
              <div className="size-[160px] bg-[url(/images/function_interchange_icon_02.png)] bg-contain bg-no-repeat" />
            </div>
            <div className="mb-[20px] text-2xl text-white">
              {t('box2.text1')}
            </div>
            <div className="px-[30px]">
              <div className="mb-[15px]">{t('box2.text3')}</div>
              <div className="mb-[15px]">{t('box2.text2')}</div>
            </div>
          </div>
          <div className="flex h-[450px] w-full flex-col items-center rounded-none bg-orange-400 drop-shadow md:rounded-[50px]">
            <div className="flex h-[250px] items-center justify-center">
              <div className="size-[160px] bg-[url(/images/function_interchange_icon_03.png)] bg-contain bg-no-repeat" />
            </div>
            <div className="mb-[20px] text-2xl text-white">
              {t('box3.text1')}
            </div>
            <div className="px-[30px]">
              <div className="mb-[15px]">{t('box3.text2')}</div>
              <div className="mb-[15px]">{t('box3.text3')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Advantage block
const Advantage = function () {
  const t = useTranslations('home.advantage');
  return (
    <div className="flex justify-center pb-0 md:pb-[100px]">
      <div className="w-[1200px]">
        <div className="flex justify-center pb-[40px] pt-[50px] text-2xl">
          {t('title')}
        </div>
        <div className="text-color-2 grid grid-cols-1 gap-x-2 text-xs md:grid-cols-4 md:gap-x-6">
          <div className="flex h-[355px] w-full flex-col rounded-none bg-gray-100 px-[30px] drop-shadow md:rounded-[50px]">
            <div className="ml-[-20px] h-[100px] w-[110px] bg-[url('/images/index_advantage_icon_01.png')] bg-no-repeat" />
            <div className="pb-[15px] pt-[30px] text-xl text-orange-500">
              {t('box1.text1')}
            </div>
            <div className="pb-[10px]">{t('box1.text2')}</div>
            <div className="pb-[10px]">{t('box1.text3')}</div>
            <div className="pb-[10px]">{t('box1.text4')}</div>
            <div className="pb-[10px]">{t('box1.text5')}</div>
          </div>
          <div className="flex h-[355px] w-full flex-col rounded-none bg-gray-100 px-[30px] drop-shadow md:rounded-[50px]">
            <div className="ml-[-20px] h-[100px] w-[110px] bg-[url('/images/index_advantage_icon_02.png')] bg-no-repeat" />
            <div className="pb-[15px] pt-[30px] text-xl text-orange-500">
              {t('box2.text1')}
            </div>
            <div className="pb-[10px]">{t('box2.text2')}</div>
            <div className="pb-[10px]">{t('box2.text3')}</div>
            <div className="pb-[10px]">{t('box2.text4')}</div>
            <div className="pb-[10px]">{t('box2.text5')}</div>
          </div>
          <div className="flex h-[355px] w-full flex-col rounded-none bg-gray-100 px-[30px] drop-shadow md:rounded-[50px]">
            <div className="ml-[-20px] h-[100px] w-[110px] bg-[url('/images/index_advantage_icon_03.png')] bg-no-repeat" />
            <div className="pb-[15px] pt-[30px] text-xl text-orange-500">
              {t('box3.text1')}
            </div>
            <div className="pb-[10px]">{t('box3.text2')}</div>
            <div className="pb-[10px]">{t('box3.text3')}</div>
            <div className="pb-[10px]">{t('box3.text4')}</div>
            <div className="pb-[10px]">{t('box3.text5')}</div>
          </div>
          <div className="flex h-[355px] w-full flex-col rounded-none bg-gray-100 px-[30px] drop-shadow md:rounded-[50px]">
            <div className="ml-[-20px] h-[100px] w-[110px] bg-[url('/images/index_advantage_icon_04.png')] bg-no-repeat" />
            <div className="pb-[15px] pt-[30px] text-xl text-orange-500">
              {t('box4.text1')}
            </div>
            <div className="pb-[10px]">{t('box4.text2')}</div>
            <div className="pb-[10px]">{t('box4.text3')}</div>
            <div className="pb-[10px]">{t('box4.text4')}</div>
            <div className="pb-[10px]">{t('box4.text5')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
