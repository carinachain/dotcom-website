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
              <div className="text-orange-500 text-sm">架构</div>
              <div className="text-color-3 text-xs w-[175px]">管理运行架构</div>
            </div>
          </div>
          <div className='flex gap-2 cursor-pointer'>
            <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_03.png')] bg-no-repeat"></div>
            <div className="flex flex-col justify-between gap-2">
              <div className="text-orange-500 text-sm">经济模式</div>
              <div className="text-color-3 text-xs max-w-[175px]">发行专属自己商铺的积分/优惠券</div>
            </div>
          </div>
          <div className='flex gap-2 cursor-pointer'>
            <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_02.png')] bg-no-repeat"></div>
            <div className="flex flex-col justify-between gap-2">
              <div className="text-orange-500 text-sm">项目白皮书</div>
              <div className="text-color-3 text-xs max-w-[200px]">下载 Carina Chain 的项目白皮书<br/>简体中文 ｜ English ｜ 日本語</div>
            </div>
          </div>
        </div>
      </HeaderMenuItem>
      <HeaderMenuItem title='语言'>
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
  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">Carina Chain 的项目特点</div>
        <div className="h-[550px] flex justify-between text-color-2 bg-[url(/images/index_function_bg.png)] bg-no-repeat bg-contain bg-bottom">
          <FeatureBox className="flex flex-col items-center w-[380px] h-[450px] bg-[url(/images/index_function_01.png)] bg-no-repeat">
            <div className="text-white text-2xl mt-[250px] mb-[20px]">筒単流程，易上手</div>
            <div className="mb-[15px]">Line小程序筒単流協</div>
            <div className="mb-[15px]">无需登录个人信息即可创建账户，分秒上手</div>
          </FeatureBox>
          <FeatureBox className="flex flex-col items-center w-[380px] h-[450px] bg-[url(/images/index_function_02.png)] bg-no-repeat">
            <div className="text-white text-2xl mt-[250px] mb-[20px]">自由定制，聚划算</div>
            <div className="mb-[15px]">定制发行专属积分/优惠券</div>
            <div className="mb-[15px]">只按使用功能次数收取低廉手续费，无月租</div>
          </FeatureBox>
          <FeatureBox className="flex flex-col items-center w-[380px] h-[450px] bg-[url(/images/index_function_03.png)] bg-no-repeat">
            <div className="text-white text-2xl mt-[250px] mb-[20px]">自由交换，好处多</div>
            <div className="mb-[15px]">收到的积分/优惠券可以和其他账户自由交換</div>
            <div className="mb-[15px]">各取所需更自由</div>
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
  return (
    <div className="flex justify-center pb-[100px]">
      <div className="w-[1200px]">
        <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">Carina Chain 的项目优势</div>
        <div className="flex justify-between text-color-2 text-xs">
          <AdvantageBox>
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_01.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>低成本</div>
            <div className='pb-[10px]'>0成本创建用户</div>
            <div className='pb-[10px]'>低成本发型积分</div>
            <div className='pb-[10px]'>无固定费用，按发起交互收费</div>
            <div className='pb-[10px]'>免费查询信息</div>
          </AdvantageBox>
          <AdvantageBox>
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_02.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>易用</div>
            <div className='pb-[10px]'>快速上手</div>
            <div className='pb-[10px]'>无需登录个人信息</div>
            <div className='pb-[10px]'>聚合不同积分，省去繁琐流程</div>
            <div className='pb-[10px]'>支持多种交互模式</div>
          </AdvantageBox>
          <AdvantageBox>
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_03.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>高拓展</div>
            <div className='pb-[10px]'>支持积分间兑换和发行</div>
            <div className='pb-[10px]'>支持CRM功能和API接入</div>
            <div className='pb-[10px]'>开放第三方SDK</div>
            <div className='pb-[10px]'>支持验证人挖矿</div>
          </AdvantageBox>
          <AdvantageBox>
            <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_04.png')] bg-no-repeat"></div>
            <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>信息保护</div>
            <div className='pb-[10px]'>数据不会消失且无法被篡改</div>
            <div className='pb-[10px]'>自身信息自由查询</div>
            <div className='pb-[10px]'>可选择自身信息的公开范围</div>
            <div className='pb-[10px]'>公开信息产生的收益归自身所有</div>
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
  return (
    <div className="flex items-center flex-col bg-gray-300">
      <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">想通过更多的方式了解 Carina Chain？</div>
      <div className="w-[1200px] h-[400px] bg-[url('/images/index_bottom_bg.png')] bg-no-repeat bg-center relative">
        <div className="p-[50px]">
          <div className='text-orange-500 text-xl pb-[36px]'>网站地图</div>
          <div className="flex text-white text-xs">
            <FooterMapCol>
              <div className='text-gray-500 cursor-pointer text-sm'>首页</div>
              <div className='cursor-pointer'>伟大愿景</div>
              <div className='cursor-pointer'>项目特点</div>
              <div className='cursor-pointer'>项目优势</div>
            </FooterMapCol>
            <FooterMapCol>
              <div className='text-gray-500 cursor-pointer text-sm'>功能</div>
              <div className='cursor-pointer'>专属积分</div>
              <div className='cursor-pointer'>共通积分</div>
              <div className='cursor-pointer'>互换</div>
              <div className='cursor-pointer'>收益</div>
            </FooterMapCol>
            <FooterMapCol>
              <div className='text-gray-500 cursor-pointer text-sm'>关于Carina</div>
              <div className='cursor-pointer'>架构</div>
              <div className='cursor-pointer'>经济模型</div>
              <div className='cursor-pointer'>项目白皮书</div>
            </FooterMapCol>
            <FooterMapCol>
              <div className='text-gray-500 cursor-pointer text-sm'>语言</div>
              <div className='cursor-pointer'>简体中文</div>
              <div className='cursor-pointer'>English</div>
              <div className='cursor-pointer'>日本語</div>
            </FooterMapCol>
            <FooterMapCol>
              <div className='text-gray-500 cursor-pointer text-sm'>打开APP</div>
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
