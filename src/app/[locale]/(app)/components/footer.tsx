import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from '@/libs/i18nNavigation';

// Image paths
const IMG_TWITTER = '/svg/x_dark.svg';
const IMG_EMAIL = '/svg/mail_dark.svg';
const IMG_DISCORD = '/svg/discord_dark.svg';
const IMG_GITHUB = '/svg/github_dark.svg';

// Page Footer Component
const Footer: React.FC = () => {
  const t = useTranslations('home.footer');
  const router = useRouter();
  const pathname = usePathname();
  const [isInView, setIsInView] = useState(false);
  const footerRef = useRef(null);

  const handleLanguageChange = (locale: string) => {
    router.push(pathname, { locale });
    router.refresh();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing after the first intersection
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-300">
      <div className="flex justify-center pb-[40px] pt-[50px] text-2xl">
        {t('title')}
      </div>
      <div ref={footerRef} className={`relative min-h-[400px] w-full overflow-hidden rounded-none bg-slate-800 xl:w-[1200px] xl:rounded-t-[50px]
        transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}
        `}>
        <div className={`${isInView ? 'animate-slide-in-bottom' : ''}`}>
          <div className="absolute right-[-60px] top-[-180px] size-[300px] rounded-full border-[3px] border-gray-600" />
          <div className="absolute right-[-100px] top-[-220px] size-[420px] rounded-full border-[3px] border-gray-600" />
          <div className="p-[50px]">
            <div className="pb-[36px] text-xl text-orange-500">{t('intro')}</div>
            <div className="grid max-w-[850px] grid-cols-2 gap-y-10 text-xs text-white md:grid-cols-3 lg:grid-cols-5">
              <FooterColumn>
                <div className="cursor-pointer text-sm text-gray-500">{t('box1.title')}</div>
                <FooterLink href="/#carousel" text={t('box1.text1')} />
                <FooterLink href="/#feature" text={t('box1.text2')} />
                <FooterLink href="/#advantage" text={t('box1.text3')} />
              </FooterColumn>
              <FooterColumn>
                <div className="cursor-pointer text-sm text-gray-500">{t('box2.title')}</div>
                <FooterLink href="/points" text={t('box2.text1')} />
                <FooterLink href="/common-points" text={t('box2.text2')} />
                <FooterLink href="/exchange" text={t('box2.text3')} />
                <FooterLink href="/profit" text={t('box2.text4')} />
              </FooterColumn>
              <FooterColumn>
                <div className="cursor-pointer text-sm text-gray-500">{t('box3.title')}</div>
                <FooterLink href="/economic-model" text={t('box3.text1')} />
                <FooterLink href="/ecosys-n-community" text={t('box3.text2')} />
                <FooterLink href="/whitepaper" text={t('box3.text3')} />
              </FooterColumn>
              <FooterColumn>
                <div className="cursor-pointer text-sm text-gray-500">{t('box4.title')}</div>
                <div onClick={() => handleLanguageChange('en')} className="cursor-pointer hover:text-orange-500">
                  {t('box4.text1')}
                </div>
                <div onClick={() => handleLanguageChange('jp')} className="cursor-pointer hover:text-orange-500">
                  {t('box4.text2')}
                </div>
                <div onClick={() => handleLanguageChange('zh-CN')} className="cursor-pointer hover:text-orange-500">
                  {t('box4.text3')}
                </div>
              </FooterColumn>
              <FooterColumn>
                <div className="cursor-pointer text-sm text-gray-500 hover:text-orange-500">{t('button')}</div>
              </FooterColumn>
            </div>
            <FooterBottom />
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Column Component
const FooterColumn: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-w-[200px] flex-col gap-y-3">{children}</div>
);

// Footer Link Component
const FooterLink: React.FC<{ href: string; text: string }> = ({ href, text }) => (
  <Link href={href} passHref>
    <div className="cursor-pointer hover:text-orange-500">{text}</div>
  </Link>
);

// Footer Bottom Section Component
const FooterBottom: React.FC = () => (
  <div className="flex h-[80px] justify-between">
    <div className="absolute bottom-[60px] left-[50px] flex gap-x-3 md:bottom-[30px]">
      <FooterSocialIcon href="https://discord.gg/b3tqEsYZ" iconSrc={IMG_DISCORD} alt="Discord" />
      <FooterSocialIcon href="https://twitter.com/carinachain" iconSrc={IMG_TWITTER} alt="Twitter" />
      <FooterSocialIcon href="https://github.com/carinachain" iconSrc={IMG_GITHUB} alt="Github" />
      <FooterSocialIcon href="mailto:contact@carinachain.com" iconSrc={IMG_EMAIL} alt="Email" />
    </div>
    <div className="absolute bottom-[30px] right-[50px] text-xs text-white">
      Copyright © 2024 Carina Chain Ltd
    </div>
  </div>
);

// Footer Social Icon Component
const FooterSocialIcon: React.FC<{ href: string; iconSrc: string; alt: string }> = ({ href, iconSrc, alt }) => (
  <div className="flex size-[36px] items-center justify-center rounded bg-gray-400 hover:bg-orange-500">
    <Link href={href} target="_blank" rel="noreferrer">
      <Image className="cursor-pointer" src={iconSrc} width={30} height={30} alt={alt} />
    </Link>
  </div>
);

export default Footer;
