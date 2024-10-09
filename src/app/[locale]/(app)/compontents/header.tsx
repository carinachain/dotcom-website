import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import { usePathname, useRouter } from '@/libs/i18nNavigation';

// Images path
const img_twitter_rollover = '/svg/x.svg';
const img_email_rollover = '/svg/mail.svg';
const img_discord_rollover = '/svg/discord.svg';
const img_burger = '/svg/burger.svg';

// Page header
export default function Header() {
  const t = useTranslations('home.header');
  return (
    <div className="flex justify-center px-[10px] md:px-0">
      <div className="flex h-full w-[1200px] items-center justify-between py-[30px]">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" width={200} height={40} alt="LOGO" />
          </Link>
        </div>
        <div className="hidden flex-1 justify-between lg:flex">
          <HeaderContent />
          <div className="flex gap-x-3">
            <div className="flex size-[36px] items-center justify-center rounded bg-orange-300">
              <Link
                href="https://discord.gg/b3tqEsYZ"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="cursor-pointer"
                  src={img_discord_rollover}
                  width={28}
                  height={28}
                  alt="Image"
                />
              </Link>
            </div>
            <div className="flex size-[36px] items-center justify-center rounded bg-orange-300">
              <Link
                href="https://twitter.com/carinachain"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="cursor-pointer"
                  src={img_twitter_rollover}
                  width={30}
                  height={30}
                  alt="Image"
                />
              </Link>
            </div>
            <div className="flex size-[36px] items-center justify-center rounded bg-orange-300">
              <Link href="mailto:contact@carinachain.com">
                <Image
                  className="cursor-pointer"
                  src={img_email_rollover}
                  width={32}
                  height={32}
                  alt="Image"
                />
              </Link>
            </div>
            <Button className="ml-3" variant="contained">
              <div className="text-xs text-white">{t('openApp')}</div>
            </Button>
          </div>
        </div>
        <div className="flex lg:hidden">
          <div className="mr-[10px] flex size-[36px] items-center justify-center rounded">
            <HeaderMenuItem title="" burger>
              <ContentOne />
              <ContentTwo />
            </HeaderMenuItem>
          </div>
        </div>
      </div>
    </div>
  );
}

const HeaderContent = function () {
  const t = useTranslations('home.header');
  const router = useRouter();
  const pathname = usePathname();
  const handleChange = (val: any) => {
    router.push(pathname, { locale: val });
    router.refresh();
  };
  return (
    <div className="text-color-2 flex flex-1 items-center justify-center gap-x-3 text-xs">
      <Link href="/">
        <HeaderMenuItem children="" title={t('homePage.title')} nopopup />
      </Link>
      <HeaderMenuItem title={t('function.title')}>
        <ContentOne />
      </HeaderMenuItem>
      <HeaderMenuItem title={t('about.title')}>
        <ContentTwo />
      </HeaderMenuItem>
      <HeaderMenuItem title={t('language.title')}>
        <div className="felx-col flex w-[88px] cursor-pointer flex-wrap justify-center gap-3 p-5 text-xs">
          <div onClick={() => handleChange('zh')}>简体中文</div>
          <div onClick={() => handleChange('en')}>English</div>
          <div onClick={() => handleChange('jp')}>日本語</div>
        </div>
      </HeaderMenuItem>
    </div>
  );
};

const ContentOne = function () {
  const t = useTranslations('home.header');
  return (
    <div className="flex max-w-[550px] flex-wrap gap-6 p-5">
      <Link className="flex cursor-pointer gap-2" href="/points">
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_01.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('function.text1')}</div>
          <div className="text-color-3 max-w-[175px] text-xs">
            {t('function.detail1')}
          </div>
        </div>
      </Link>
      <Link className="flex cursor-pointer gap-2" href="/exchange">
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_03.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('function.text2')}</div>
          <div className="text-color-3 max-w-[175px] text-xs">
            {t('function.detail2')}
          </div>
        </div>
      </Link>
      <Link className="flex cursor-pointer gap-2" href="/common-points">
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_02.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('function.text3')}</div>
          <div className="text-color-3 max-w-[175px] text-xs">
            {t('function.detail3')}
          </div>
        </div>
      </Link>
      <Link className="flex cursor-pointer gap-2" href="/profit">
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_04.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('function.text4')}</div>
          <div className="text-color-3 max-w-[175px] text-xs">
            {t('function.detail4')}
          </div>
        </div>
      </Link>
    </div>
  );
};

const ContentTwo = function () {
  const t = useTranslations('home.header');
  return (
    <div className="flex max-w-[550px] flex-wrap gap-6 p-5">
      <Link className="flex cursor-pointer gap-2" href="/architecture">
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_01.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('about.text1')}</div>
          <div className="text-color-3 w-[175px] text-xs">
            {t('about.detail1')}
          </div>
        </div>
      </Link>
      <Link className="flex cursor-pointer gap-2" href="/economic">
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_03.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('about.text2')}</div>
          <div className="text-color-3 max-w-[175px] text-xs">
            {t('about.detail2')}
          </div>
        </div>
      </Link>
      <div className="flex cursor-pointer gap-2">
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_02.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('about.text3')}</div>
          <div className="text-color-3 max-w-[200px] text-xs">
            {t('about.detail3')}
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderMenuItem = function (props: {
  children: React.ReactNode;
  title: any;
  nopopup?: boolean;
  burger?: boolean;
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const handleClick = (event: any) => {
    if (props.nopopup) return;
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      {props.burger ? (
        <Image
          aria-describedby={id}
          onClick={handleClick}
          className="cursor-pointer"
          src={img_burger}
          width={30}
          height={30}
          alt="Image"
        />
      ) : (
        <div
          className="cursor-pointer hover:shadow"
          aria-describedby={id}
          onClick={handleClick}
        >
          <div className="px-8 py-2">{props.title}</div>
        </div>
      )}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {props.children}
      </Popover>
    </>
  );
};
