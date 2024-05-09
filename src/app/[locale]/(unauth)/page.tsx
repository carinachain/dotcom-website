'use client';

import Image from 'next/image'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover'
import React from 'react';
import { useTranslations } from 'next-intl';

export default function Home() {
  return (
      <main className="min-h-screen">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </main>
  );
}

// Images path
const img_twitter = '/images/index_topicon_twitter.png'
const img_email = '/images/index_topicon_email.png'
const img_discord = '/images/index_topicon_discord.png'
const img_twitter_rollover = '/images/index_topicon_twitter_rollover.png'
const img_email_rollover = '/images/index_topicon_email_rollover.png'
const img_discord_rollover = '/images/index_topicon_discord_rollover.png'

// Page header
const Header = function () {
  const t = useTranslations('home.header');
  return (
    <div className="flex justify-center ">
      <div className="w-[1200px] flex justify-between items-center h-full py-[50px]">
        <div>
          <Image
            src="/images/logo.png"
            width={175}
            height={35}
            alt="LOGO"
          />
        </div>
        <div className="flex justify-between flex-1">
          <HeaderContent></HeaderContent>
          <div className="flex gap-x-3">
            <Image
              className='cursor-pointer'
              src={img_discord_rollover}
              width={36}
              height={36}
              alt="Image"
            />
            <Image
              className='cursor-pointer'
              src={img_twitter_rollover}
              width={36}
              height={36}
              alt="Image"
            />
            <Image
              className='cursor-pointer'
              src={img_email_rollover}
              width={36}
              height={36}
              alt="Image"
            />
            <Button className='ml-3' variant="contained">
              <div className='text-white text-xs'>{t('openApp')}</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const HeaderContent = function () {
  const t = useTranslations('home.header');
  return (
    <div className="flex justify-center items-center flex-1 gap-x-3 text-color-2 text-xs">
      <HeaderMenuItem title={t('homePage.title')} nopopup={true}>
      </HeaderMenuItem>
      <HeaderMenuItem title={t('function.title')}>
        <div className='p-5 flex gap-6 flex-wrap max-w-[550px]'>
          <div className='flex gap-2 cursor-pointer'>
            <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_01.png')] bg-no-repeat"></div>
            <div className="flex flex-col justify-between gap-2">
              <div className="text-orange-500 text-sm">{t('function.text1')}</div>
              <div className="text-color-3 text-xs max-w-[175px]">{t('function.detail1')}</div>
            </div>
          </div>
          <div className='flex gap-2 cursor-pointer'>
            <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_03.png')] bg-no-repeat"></div>
            <div className="flex flex-col justify-between gap-2">
              <div className="text-orange-500 text-sm">{t('function.text2')}</div>
              <div className="text-color-3 text-xs max-w-[175px]">{t('function.detail2')}</div>
            </div>
          </div>
          <div className='flex gap-2 cursor-pointer'>
            <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_02.png')] bg-no-repeat"></div>
            <div className="flex flex-col justify-between gap-2">
              <div className="text-orange-500 text-sm">{t('function.text3')}</div>
              <div className="text-color-3 text-xs max-w-[175px]">{t('function.detail3')}</div>
            </div>
          </div>
          <div className='flex gap-2 cursor-pointer'>
            <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_04.png')] bg-no-repeat"></div>
            <div className="flex flex-col justify-between gap-2">
              <div className="text-orange-500 text-sm">{t('function.text4')}</div>
              <div className="text-color-3 text-xs max-w-[175px]">{t('function.detail4')}</div>
            </div>
          </div>
        </div>
      </HeaderMenuItem>
      <HeaderMenuItem title={t('about.title')}>
        <div className='p-5 flex gap-6 flex-wrap max-w-[550px]'>
          <div className='flex gap-2 cursor-pointer'>
            <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_01.png')] bg-no-repeat"></div>
            <div className="flex flex-col justify-between gap-2">
              <div className="text-orange-500 text-sm">{t('about.text1')}</div>
              <div className="text-color-3 text-xs w-[175px]">{t('about.detail1')}</div>
            </div>
          </div>
          <div className='flex gap-2 cursor-pointer'>
            <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_03.png')] bg-no-repeat"></div>
            <div className="flex flex-col justify-between gap-2">
              <div className="text-orange-500 text-sm">{t('about.text2')}</div>
              <div className="text-color-3 text-xs max-w-[175px]">{t('about.detail2')}</div>
            </div>
          </div>
          <div className='flex gap-2 cursor-pointer'>
            <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_02.png')] bg-no-repeat"></div>
            <div className="flex flex-col justify-between gap-2">
              <div className="text-orange-500 text-sm">{t('about.text3')}</div>
              <div className="text-color-3 text-xs max-w-[200px]">{t('about.detail3')}</div>
            </div>
          </div>
        </div>
      </HeaderMenuItem>
      <HeaderMenuItem title={t('language.title')}>
        <div className='p-5 flex felx-col justify-center gap-3 flex-wrap w-[88px] text-xs cursor-pointer'>
          <div>简体中文</div>
          <div>English</div>
          <div>日本語</div>
        </div>
      </HeaderMenuItem>
    </div>
  )
}

const HeaderMenuItem = function (props: { children: React.ReactNode, title: string, nopopup?: boolean }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const handleClick = (event: any) => {
    if (props.nopopup) return
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <div className='cursor-pointer hover:shadow' aria-describedby={id} onClick={handleClick}>
        <div className='px-8 py-2'>
          {props.title}
        </div>
      </div>
      <Popover 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
          {props.children}
      </Popover>
    </>
  )
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
      <div className="w-[1200px] flex justify-between">
        <div className="flex flex-col justify-center gap-y-8 h-full">
          <div className="flex text-4xl">
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
        <div className="w-[480px] bg-[url('/images/index_head_image_01.png')] bg-no-repeat mt-[32px] flex flex-col justify-end items-center">
          <Button className='w-[270px] mb-[30px] ml-[40px] rounded-full' variant="contained">
            <div className='text-white py-1'>{t('button2')}</div>
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
        <div className="h-[550px] flex justify-between text-color-2 bg-[url(/images/index_function_bg.png)] bg-no-repeat bg-contain bg-bottom">
          <FeatureBox className="flex flex-col items-center w-[380px] h-[450px] bg-[url(/images/index_function_01.png)] bg-no-repeat">
            <div className="text-white text-2xl mt-[250px] mb-[20px]">{t('box1.text1')}</div>
            <div className="mb-[15px]">{t('box1.text2')}</div>
            <div className="mb-[15px]">{t('box1.text3')}</div>
          </FeatureBox>
          <FeatureBox className="flex flex-col items-center w-[380px] h-[450px] bg-[url(/images/index_function_02.png)] bg-no-repeat">
            <div className="text-white text-2xl mt-[250px] mb-[20px]">{t('box2.text1')}</div>
            <div className="mb-[15px]">{t('box2.text2')}</div>
            <div className="mb-[15px]">{t('box2.text3')}</div>
          </FeatureBox>
          <FeatureBox className="flex flex-col items-center w-[380px] h-[450px] bg-[url(/images/index_function_03.png)] bg-no-repeat">
            <div className="text-white text-2xl mt-[250px] mb-[20px]">{t('box3.text1')}</div>
            <div className="mb-[15px]">{t('box3.text2')}</div>
            <div className="mb-[15px]">{t('box3.text3')}</div>
          </FeatureBox>
        </div>
      </div>
    </div>
  )
}

const FeatureBox = function (props: { children: React.ReactNode, className: string }) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}


// Advantage block
const Advantage = function () {
  const t = useTranslations('home.advantage');
  return (
    <div className="flex justify-center pb-[100px]">
      <div className="w-[1200px]">
        <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">{t('title')}</div>
        <div className="flex justify-between text-color-2 text-xs">
          <AdvantageBox>
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_01.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>{t('box1.text1')}</div>
            <div className='pb-[10px]'>{t('box1.text2')}</div>
            <div className='pb-[10px]'>{t('box1.text3')}</div>
            <div className='pb-[10px]'>{t('box1.text4')}</div>
            <div className='pb-[10px]'>{t('box1.text5')}</div>
          </AdvantageBox>
          <AdvantageBox>
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_02.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>{t('box2.text1')}</div>
            <div className='pb-[10px]'>{t('box2.text2')}</div>
            <div className='pb-[10px]'>{t('box2.text3')}</div>
            <div className='pb-[10px]'>{t('box2.text4')}</div>
            <div className='pb-[10px]'>{t('box2.text5')}</div>
          </AdvantageBox>
          <AdvantageBox>
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_03.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>{t('box3.text1')}</div>
            <div className='pb-[10px]'>{t('box3.text2')}</div>
            <div className='pb-[10px]'>{t('box3.text3')}</div>
            <div className='pb-[10px]'>{t('box3.text4')}</div>
            <div className='pb-[10px]'>{t('box3.text5')}</div>
          </AdvantageBox>
          <AdvantageBox>
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_04.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>{t('box4.text1')}</div>
            <div className='pb-[10px]'>{t('box4.text2')}</div>
            <div className='pb-[10px]'>{t('box4.text3')}</div>
            <div className='pb-[10px]'>{t('box4.text4')}</div>
            <div className='pb-[10px]'>{t('box4.text5')}</div>
          </AdvantageBox>
        </div>
      </div>
    </div>
  )
}

const AdvantageBox = function (props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-[285px] h-[355px] bg-[url('/images/index_advantage_bg.png')] bg-no-repeat pl-[40px]">
      {props.children}
    </div>
  )
}

// Page Footer
const Footer = function () {
  const t = useTranslations('home.footer');
  return (
    <div className="flex items-center flex-col bg-gray-300">
      <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">{t('title')}</div>
      <div className="w-[1200px] h-[400px] bg-[url('/images/index_bottom_bg.png')] bg-no-repeat bg-center relative">
        <div className="p-[50px]">
          <div className='text-orange-500 text-xl pb-[36px]'>{t('intro')}</div>
          <div className="flex text-white text-xs">
            <FooterMapCol>
              <div className='text-gray-500 cursor-pointer text-sm'>{t('box1.title')}</div>
              <div className='cursor-pointer'>{t('box1.text1')}</div>
              <div className='cursor-pointer'>{t('box1.text2')}</div>
              <div className='cursor-pointer'>{t('box1.text3')}</div>
            </FooterMapCol>
            <FooterMapCol>
              <div className='text-gray-500 cursor-pointer text-sm'>{t('box2.title')}</div>
              <div className='cursor-pointer'>{t('box2.text1')}</div>
              <div className='cursor-pointer'>{t('box2.text2')}</div>
              <div className='cursor-pointer'>{t('box2.text3')}</div>
              <div className='cursor-pointer'>{t('box2.text4')}</div>
            </FooterMapCol>
            <FooterMapCol>
              <div className='text-gray-500 cursor-pointer text-sm'>{t('box3.title')}</div>
              <div className='cursor-pointer'>{t('box3.text1')}</div>
              <div className='cursor-pointer'>{t('box3.text2')}</div>
              <div className='cursor-pointer'>{t('box3.text3')}</div>
            </FooterMapCol>
            <FooterMapCol>
              <div className='text-gray-500 cursor-pointer text-sm'>{t('box4.title')}</div>
              <div className='cursor-pointer'>{t('box4.text1')}</div>
              <div className='cursor-pointer'>{t('box4.text2')}</div>
              <div className='cursor-pointer'>{t('box4.text3')}</div>
            </FooterMapCol>
            <FooterMapCol>
              <div className='text-gray-500 cursor-pointer text-sm'>{t('button')}</div>
            </FooterMapCol>
          </div>
          <FooterBtnContent></FooterBtnContent>
        </div>
      </div>
    </div>
  )
}

const FooterMapCol = function (props: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col pr-[70px] gap-y-3">
      {props.children}
    </div>
  )
}

const FooterBtnContent = function () {
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-3 absolute bottom-[30px] left-[50px]">
        <Image
          className='cursor-pointer'
          src={img_discord}
          width={36}
          height={36}
          alt="Image"
        />
        <Image
          className='cursor-pointer'
          src={img_twitter}
          width={36}
          height={36}
          alt="Image"
        />
        <Image
          className='cursor-pointer'
          src={img_email}
          width={36}
          height={36}
          alt="Image"
        />
      </div>
      <div className="text-white absolute bottom-[30px] right-[50px] text-xs">Copyright © 2024 Carina Chain Ltd</div>
    </div>
  )
}
