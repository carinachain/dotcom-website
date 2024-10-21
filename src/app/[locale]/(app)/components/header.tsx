import { Button } from './button';
import Popover from '@mui/material/Popover';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useState, useEffect, MouseEvent } from 'react';
import { usePathname, useRouter } from '@/libs/i18nNavigation';

// Image paths
const IMG_TWITTER = '/svg/x.svg';
const IMG_EMAIL = '/svg/mail.svg';
const IMG_DISCORD = '/svg/discord.svg';
const IMG_GITHUB = '/svg/github.svg';
const IMG_BURGER = '/svg/burger.svg';

// Page Header Component
const Header: React.FC = () => {
  const t = useTranslations('home.header');

  // State for managing the header visibility based on scroll direction
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= lastScrollY) {
        setIsScrollingUp(true); // Show the header when scrolling up
      } else {
        setIsScrollingUp(false); // Hide the header when scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed w-screen top-0 transition-transform duration-300 z-100 backdrop-blur-xl bg-white/30 ${
        isScrollingUp ? 'translate-y-0' : '-translate-y-full'
      } z-50 bg-white`}
    >
      <div className="flex justify-center px-[10px] md:px-0">
        <div className="flex h-full w-[1200px] items-center justify-between py-[20px]">
          {/* Logo */}
          <Link href="/">
            <Image src="/images/logo.png" width={200} height={40} alt="LOGO" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden flex-1 justify-between lg:flex">
            <HeaderContent />
            <div className="flex gap-x-3">
              <SocialIconLink href="https://discord.gg/b3tqEsYZ" iconSrc={IMG_DISCORD} alt="Discord" />
              <SocialIconLink href="https://twitter.com/carinachain" iconSrc={IMG_TWITTER} alt="Twitter" />
              <SocialIconLink href="https://github.com/carinachain" iconSrc={IMG_GITHUB} alt="Github" />
              <SocialIconLink href="mailto:contact@carinachain.com" iconSrc={IMG_EMAIL} alt="Email" />
              <Button className="ml-3">
                <span className='text-sm font-semibold inline-block -translate-y-0.5'>
                  {t('openApp')}
                </span>
              </Button>
            </div>
          </div>

          {/* Mobile Burger Menu */}
          <div className="flex lg:hidden">
            <div className="mr-[10px] flex size-[36px] items-center justify-center rounded">
              <HeaderMenuItem title="" isBurgerMenu>
                <ContentOne />
                <ContentTwo />
              </HeaderMenuItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Social Icon Link Component
const SocialIconLink: React.FC<{ href: string; iconSrc: string; alt: string }> = ({ href, iconSrc, alt }) => (
  <div className="flex size-[36px] items-center justify-center rounded bg-orange-300 hover:bg-orange-400">
    <Link href={href} target="_blank" rel="noreferrer">
      <Image className="cursor-pointer" src={iconSrc} width={30} height={30} alt={alt} />
    </Link>
  </div>
);

// Header Content Component
const HeaderContent: React.FC = () => {
  const t = useTranslations('home.header');
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLanguage = (locale: string) => {
    router.push(pathname, { locale });
    router.refresh();
  };

  return (
    <div className="text-color-2 flex flex-1 items-center justify-center gap-x-3 text-sm font-medium">
      <Link href="/">
        <HeaderMenuItem title={t('homePage.title')} noPopup />
      </Link>
      <HeaderMenuItem title={t('function.title')}>
        <ContentOne />
      </HeaderMenuItem>
      <HeaderMenuItem title={t('about.title')}>
        <ContentTwo />
      </HeaderMenuItem>
      <HeaderMenuItem title={t('language.title')}>
        <div className="flex w-[88px] flex-col flex-wrap justify-center gap-0 px-0 py-3 text-xs">
          <div className="cursor-pointer py-2 pl-5 hover:bg-gray-100 hover:shadow" onClick={() => handleChangeLanguage('en')}>
            {t('language.text1')}
          </div>
          <div className="cursor-pointer py-2 pl-5 hover:bg-gray-100 hover:shadow" onClick={() => handleChangeLanguage('jp')}>
            {t('language.text2')}
          </div>
          <div className="cursor-pointer py-2 pl-5 hover:bg-gray-100 hover:shadow" onClick={() => handleChangeLanguage('zh-CN')}>
            {t('language.text3')}
          </div>
        </div>
      </HeaderMenuItem>
    </div>
  );
};

// Content One Component
const ContentOne: React.FC<{ onMouseLeave?: () => void }> = ({ onMouseLeave }) => {
  const t = useTranslations('home.header');

  return (
    <div className="flex max-w-[550px] flex-wrap gap-0 py-3 pl-3 pr-0" onMouseLeave={onMouseLeave}>
      <ContentLink href="/points" title={t('function.text1')} detail={t('function.detail1')} icon="/images/index_top_menu_icon_01.png" />
      <ContentLink href="/exchange" title={t('function.text2')} detail={t('function.detail2')} icon="/images/index_top_menu_icon_03.png" />
      <ContentLink href="/common-points" title={t('function.text3')} detail={t('function.detail3')} icon="/images/index_top_menu_icon_02.png" />
      <ContentLink href="/profit" title={t('function.text4')} detail={t('function.detail4')} icon="/images/index_top_menu_icon_04.png" />
    </div>
  );
};

// Content Two Component
const ContentTwo: React.FC<{ onMouseLeave?: () => void }> = ({ onMouseLeave }) => {
  const t = useTranslations('home.header');

  return (
    <div className="flex max-w-[550px] flex-wrap gap-0 py-3 pl-3 pr-0" onMouseLeave={onMouseLeave}>
      <ContentLink href="/economic-model" title={t('about.text1')} detail={t('about.detail1')} icon="/images/index_top_menu_icon_01.png" />
      <ContentLink href="/ecosys-n-community" title={t('about.text2')} detail={t('about.detail2')} icon="/images/index_top_menu_icon_03.png" />
      <ContentLink href="/whitepaper" title={t('about.text3')} detail={t('about.detail3')} icon="/images/index_top_menu_icon_02.png" />
    </div>
  );
};

// Content Link Component
const ContentLink: React.FC<{ href: string; title: string; detail: string; icon: string }> = ({ href, title, detail }) => (
  <Link className="flex cursor-pointer gap-2 py-3 pl-5 hover:bg-gray-100 hover:shadow" href={href}>
    <div className="size-[50px] bg-[url('/images/index_top_menu_icon_01.png')] bg-no-repeat" />
    <div className="flex flex-col justify-between gap-2">
      <div className="text-sm text-orange-500">{title}</div>
      <div className="max-w-[175px] text-xs text-gray-400 whitespace-pre-line">{detail}</div>
    </div>
  </Link>
);

// Header Menu Item Component
const HeaderMenuItem: React.FC<{
  children?: React.ReactNode;
  title: string;
  noPopup?: boolean;
  isBurgerMenu?: boolean;
}> = ({ children, title, noPopup, isBurgerMenu }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: MouseEvent<any>) => {
    if (noPopup) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);
  const popoverId = isOpen ? 'simple-popover' : undefined;

  return (
    <>
      {isBurgerMenu ? (
        <>
          <Image
            aria-describedby={popoverId}
            onMouseEnter={handleOpen}
            className={`cursor-pointer hover:shadow  ${isOpen ? 'shadow' : ''}`}
            src={IMG_BURGER}
            width={30}
            height={30}
            alt="Menu"
          />
          <Popover
            id={popoverId}
            className="mt-0"
            open={isOpen}
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
            {children}
          </Popover>
        </>
      ) : (
        <div
          className={`cursor-pointer hover:bg-gray-100 text-neutral-500 hover:shadow ${isOpen ? 'bg-gray-100' : ''}`}
          aria-describedby={popoverId}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <div className="px-8 py-2">{title}</div>
          <Popover
            id={popoverId}
            className="mt-0"
            open={isOpen}
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
            <div onMouseLeave={handleClose}>
              {children}
            </div>
          </Popover>
        </div>
      )}
    </>
  );
};

export default Header;
