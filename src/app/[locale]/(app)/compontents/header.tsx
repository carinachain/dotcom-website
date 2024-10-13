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
const img_github_rollover = '/svg/github.svg';
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
            <div className="flex size-[36px] items-center justify-center rounded bg-orange-300 hover:bg-orange-400">
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
            <div className="flex size-[36px] items-center justify-center rounded bg-orange-300 hover:bg-orange-400">
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
            <div className="flex size-[36px] items-center justify-center rounded bg-orange-300 hover:bg-orange-400">
              <Link
                href="https://github.com/carinachain"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="cursor-pointer"
                  src={img_github_rollover}
                  width={30}
                  height={30}
                  alt="Image"
                />
              </Link>
            </div>
            <div className="flex size-[36px] items-center justify-center rounded bg-orange-300 hover:bg-orange-400">
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
        <div className="flex w-[88px] flex-col flex-wrap justify-center gap-0 px-0 py-3 text-xs">
          <div
            className="cursor-pointer py-2 pl-5 hover:bg-gray-100 hover:shadow"
            onClick={() => handleChange('zh-CN')}
          >
            简体中文
          </div>
          <div
            className="cursor-pointer py-2 pl-5 hover:bg-gray-100 hover:shadow"
            onClick={() => handleChange('en')}
          >
            English
          </div>
          <div
            className="cursor-pointer py-2 pl-5 hover:bg-gray-100 hover:shadow"
            onClick={() => handleChange('jp')}
          >
            日本語
          </div>
        </div>
      </HeaderMenuItem>
    </div>
  );
};

const ContentOne = function ({ onMouseLeave }: { onMouseLeave?: () => void }) {
  const t = useTranslations('home.header');
  return (
    <div
      className="flex max-w-[550px] flex-wrap gap-0 py-3 pl-3 pr-0"
      onMouseLeave={onMouseLeave}
    >
      <Link
        className="flex cursor-pointer gap-2 py-3 pl-5 hover:bg-gray-100 hover:shadow"
        href="/points"
      >
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_01.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('function.text1')}</div>
          <div className="max-w-[175px] text-xs text-gray-400">
            {t('function.detail1')}
          </div>
        </div>
      </Link>
      <Link
        className="flex cursor-pointer gap-2 py-3 pl-5 hover:bg-gray-100 hover:shadow"
        href="/exchange"
      >
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_03.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('function.text2')}</div>
          <div className="max-w-[175px] text-xs text-gray-400">
            {t('function.detail2')}
          </div>
        </div>
      </Link>
      <Link
        className="flex cursor-pointer gap-2 py-3 pl-5 hover:bg-gray-100 hover:shadow"
        href="/common-points"
      >
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_02.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('function.text3')}</div>
          <div className="max-w-[175px] text-xs text-gray-400">
            {t('function.detail3')}
          </div>
        </div>
      </Link>
      <Link
        className="flex cursor-pointer gap-2 py-3 pl-5 hover:bg-gray-100 hover:shadow"
        href="/profit"
      >
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_04.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('function.text4')}</div>
          <div className="max-w-[175px] text-xs text-gray-400">
            {t('function.detail4')}
          </div>
        </div>
      </Link>
    </div>
  );
};

const ContentTwo = function ({ onMouseLeave }: { onMouseLeave?: () => void }) {
  const t = useTranslations('home.header');
  return (
    <div
      className="flex max-w-[550px] flex-wrap gap-0 py-3 pl-3 pr-0"
      onMouseLeave={onMouseLeave}
    >
      <Link
        className="flex cursor-pointer gap-2 py-3 pl-5 hover:bg-gray-100 hover:shadow"
        href="/architecture"
      >
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_01.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('about.text1')}</div>
          <div className="w-[175px] text-xs text-gray-400">
            {t('about.detail1')}
          </div>
        </div>
      </Link>
      <Link
        className="flex cursor-pointer gap-2 py-3 pl-5 hover:bg-gray-100 hover:shadow"
        href="/economic"
      >
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_03.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('about.text2')}</div>
          <div className="max-w-[175px] text-xs text-gray-400">
            {t('about.detail2')}
          </div>
        </div>
      </Link>
      <Link
        className="flex cursor-pointer gap-2 py-3 pl-5 hover:bg-gray-100 hover:shadow"
        href="/whitepaper"
      >
        <div className="size-[50px] bg-[url('/images/index_top_menu_icon_02.png')] bg-no-repeat" />
        <div className="flex flex-col justify-between gap-2">
          <div className="text-sm text-orange-500">{t('about.text3')}</div>
          <div className="max-w-[200px] text-xs text-gray-400">
            {t('about.detail3')}
          </div>
        </div>
      </Link>
    </div>
  );
};

const HeaderMenuItem = function (props: {
  children?: React.ReactNode;
  title: any;
  nopopup?: boolean;
  burger?: boolean;
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleOpen = (event: any) => {
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
        <>
          <Image
            aria-describedby={id}
            onMouseEnter={handleOpen}
            className={`cursor-pointer hover:shadow  ${open ? 'shadow' : ''}`}
            src={img_burger}
            width={30}
            height={30}
            alt="Image"
          />
          <Popover
            id={id}
            className="mt-0"
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
      ) : (
        <div
          className={`cursor-pointer hover:bg-gray-100 hover:shadow ${open ? 'bg-gray-100' : ''}`}
          aria-describedby={id}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <div className="px-8 py-2">{props.title}</div>
          <Popover
            id={id}
            className="mt-0"
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
            {React.cloneElement(props.children as React.ReactElement<any>, {
              onMouseLeave: handleClose,
            })}
          </Popover>
        </div>
      )}
    </>
  );
};
