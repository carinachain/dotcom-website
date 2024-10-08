'use client';

import Button from '@mui/material/Button'
import React from 'react';
import { useTranslations } from 'next-intl';

export default function Home() {
  return (
    <Content></Content>
  );
}

// Home page main content
const Content = function () {
  return (
    <div>
      <Carousel></Carousel>
      <Feature></Feature>
      <Advantage></Advantage>
    </div>
  )
}

// Carousel block
const Carousel = function () {
  const t = useTranslations('home.carousel');
  return (
    <div className="flex justify-center h-[630px] bg-[url('/images/index_head_bg.png')] bg-no-repeat w-full">
      <div className="mw-[1200px] flex justify-center md:justify-between gap-x-36">
        <div className="flex flex-col justify-center gap-y-8 h-full">
          <div className="flex text-4xl flex-col">
            <div className='text-color-1'>
            {t('title1')}
            </div>
            <div className="text-orange-500">{t('title2')}</div>
          </div>
          <div className='flex flex-col gap-y-1'>
            <div className="text-color-3">
            {t('text1')}
            </div>
            <div className="text-color-3">
            {t('text2')}
            </div>
            <div className="text-color-3">
            {t('text3')}
            </div>
          </div>
          <Button className='w-[180px]' variant="contained">
            <div className='text-white'>{t('button1')}</div>
          </Button>
        </div>
        <div className="w-[480px] bg-[url('/images/index_head_image_01.png')] bg-no-repeat mt-[32px] hidden md:flex  flex-col justify-end items-center">
          <Button className='mw-[270px] mb-[30px] ml-[40px] rounded-full' variant="contained">
            <div className='text-white py-1 text-lg'>{t('button2')}</div>
          </Button>
        </div>
      </div>
    </div>
  )
}

// Feature block
const Feature = function () {
  const t = useTranslations('home.feature');
  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">{t('title')}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 text-color-2 mb-[100px] drop-shadow-2xl">
          <div className="flex flex-col items-center w-full h-[450px] bg-orange-400 rounded-none md:rounded-[50px] drop-shadow">
            <div className="h-[250px] flex justify-center items-center">
              <div className="h-[160px] w-[160px] bg-[url(/images/function_interchange_icon_01.png)] bg-no-repeat bg-contain"></div>
            </div>
            <div className="text-white text-2xl mb-[20px]">{t('box1.text1')}</div>
            <div className="px-[30px]">
              <div className="mb-[15px]">{t('box1.text2')}</div>
              <div className="mb-[15px]">{t('box1.text3')}</div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full h-[450px] bg-orange-400 rounded-none md:rounded-[50px] drop-shadow">
            <div className="h-[250px] flex justify-center items-center">
              <div className="h-[160px] w-[160px] bg-[url(/images/function_interchange_icon_02.png)] bg-no-repeat bg-contain"></div>
            </div>
            <div className="text-white text-2xl mb-[20px]">{t('box2.text1')}</div>
            <div className="px-[30px]">
              <div className="mb-[15px]">{t('box2.text3')}</div>
              <div className="mb-[15px]">{t('box2.text2')}</div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full h-[450px] bg-orange-400 rounded-none md:rounded-[50px] drop-shadow">
            <div className="h-[250px] flex justify-center items-center">
              <div className="h-[160px] w-[160px] bg-[url(/images/function_interchange_icon_03.png)] bg-no-repeat bg-contain"></div>
            </div>
            <div className="text-white text-2xl mb-[20px]">{t('box3.text1')}</div>
            <div className="px-[30px]">
              <div className="mb-[15px]">{t('box3.text2')}</div>
              <div className="mb-[15px]">{t('box3.text3')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Advantage block
const Advantage = function () {
  const t = useTranslations('home.advantage');
  return (
    <div className="flex justify-center md:pb-[100px] pb-0">
      <div className="w-[1200px]">
        <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">{t('title')}</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 md:gap-x-6 text-color-2 text-xs">
          <div className="flex flex-col w-full h-[355px] px-[30px] rounded-none bg-gray-100 md:rounded-[50px] drop-shadow">
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_01.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>{t('box1.text1')}</div>
            <div className='pb-[10px]'>{t('box1.text2')}</div>
            <div className='pb-[10px]'>{t('box1.text3')}</div>
            <div className='pb-[10px]'>{t('box1.text4')}</div>
            <div className='pb-[10px]'>{t('box1.text5')}</div>
          </div>
          <div className="flex flex-col w-full h-[355px] px-[30px] rounded-none bg-gray-100 md:rounded-[50px] drop-shadow">
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_02.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>{t('box2.text1')}</div>
            <div className='pb-[10px]'>{t('box2.text2')}</div>
            <div className='pb-[10px]'>{t('box2.text3')}</div>
            <div className='pb-[10px]'>{t('box2.text4')}</div>
            <div className='pb-[10px]'>{t('box2.text5')}</div>
          </div>
          <div className="flex flex-col w-full h-[355px] px-[30px] rounded-none bg-gray-100 md:rounded-[50px] drop-shadow">
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_03.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>{t('box3.text1')}</div>
            <div className='pb-[10px]'>{t('box3.text2')}</div>
            <div className='pb-[10px]'>{t('box3.text3')}</div>
            <div className='pb-[10px]'>{t('box3.text4')}</div>
            <div className='pb-[10px]'>{t('box3.text5')}</div>
          </div>
          <div className="flex flex-col w-full h-[355px] px-[30px] rounded-none bg-gray-100 md:rounded-[50px] drop-shadow">
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_04.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>{t('box4.text1')}</div>
            <div className='pb-[10px]'>{t('box4.text2')}</div>
            <div className='pb-[10px]'>{t('box4.text3')}</div>
            <div className='pb-[10px]'>{t('box4.text4')}</div>
            <div className='pb-[10px]'>{t('box4.text5')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
