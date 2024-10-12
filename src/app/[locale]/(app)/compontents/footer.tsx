import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { usePathname, useRouter } from '@/libs/i18nNavigation';

// Images path
const img_twitter = '/svg/x_dark.svg';
const img_email = '/svg/mail_dark.svg';
const img_discord = '/svg/discord_dark.svg';

// Page Footer
export default function Footer() {
  const t = useTranslations('home.footer');
  const router = useRouter();
  const pathname = usePathname();
  const handleChange = (val: any) => {
    router.push(pathname, { locale: val });
    router.refresh();
  };
  return (
    <div className="flex flex-col items-center bg-gray-300">
      <div className="flex justify-center pb-[40px] pt-[50px] text-2xl">
        {t('title')}
      </div>
      <div className="relative min-h-[400px] w-full overflow-hidden rounded-none bg-slate-800 xl:w-[1200px] xl:rounded-t-[50px]">
        <div className="absolute right-[-60px] top-[-180px] size-[300px] rounded-full border-[3px] border-gray-600" />
        <div className="absolute right-[-100px] top-[-220px] size-[420px] rounded-full border-[3px] border-gray-600" />
        <div className="p-[50px]">
          <div className="pb-[36px] text-xl text-orange-500">{t('intro')}</div>
          <div className="grid max-w-[850px] grid-cols-2 gap-y-10 text-xs text-white md:grid-cols-3 lg:grid-cols-5">
            <FooterMapCol>
              <div className="cursor-pointer text-sm text-gray-500">
                {t('box1.title')}
              </div>
              <Link href="/#carousel" passHref>
                <div className="cursor-pointer">{t('box1.text1')}</div>
              </Link>
              <Link href="/#feature" passHref>
                <div className="cursor-pointer">{t('box1.text2')}</div>
              </Link>
              <Link href="/#advantage" passHref>
                <div className="cursor-pointer">{t('box1.text3')}</div>
              </Link>
            </FooterMapCol>
            <FooterMapCol>
              <div className="cursor-pointer text-sm text-gray-500">
                {t('box2.title')}
              </div>
              <Link href="/points" passHref>
                <div className="cursor-pointer">{t('box2.text1')}</div>
              </Link>
              <Link href="/common-points" passHref>
                <div className="cursor-pointer">{t('box2.text2')}</div>
              </Link>
              <Link href="/exchange" passHref>
                <div className="cursor-pointer">{t('box2.text3')}</div>
              </Link>
              <Link href="/profit" passHref>
                <div className="cursor-pointer">{t('box2.text4')}</div>
              </Link>
            </FooterMapCol>
            <FooterMapCol>
              <div className="cursor-pointer text-sm text-gray-500">
                {t('box3.title')}
              </div>
              <Link href="/architecture" passHref>
                <div className="cursor-pointer">{t('box3.text1')}</div>
              </Link>
              <Link href="/economic" passHref>
                <div className="cursor-pointer">{t('box3.text2')}</div>
              </Link>
              <Link href="/whitepaper" passHref>
                <div className="cursor-pointer">{t('box3.text3')}</div>
              </Link>
            </FooterMapCol>
            <FooterMapCol>
              <div className="cursor-pointer text-sm text-gray-500">
                {t('box4.title')}
              </div>
              <div
                onClick={() => handleChange('zh-CN')}
                className="cursor-pointer"
              >
                {t('box4.text1')}
              </div>
              <div
                onClick={() => handleChange('en')}
                className="cursor-pointer"
              >
                {t('box4.text2')}
              </div>
              <div
                onClick={() => handleChange('jp')}
                className="cursor-pointer"
              >
                {t('box4.text3')}
              </div>
            </FooterMapCol>
            <FooterMapCol>
              <div className="cursor-pointer text-sm text-gray-500">
                {t('button')}
              </div>
            </FooterMapCol>
          </div>
          <FooterBtnContent />
        </div>
      </div>
    </div>
  );
}

const FooterMapCol = function (props: { children: React.ReactNode }) {
  return (
    <div className="flex min-w-[200px] flex-col gap-y-3">{props.children}</div>
  );
};

const FooterBtnContent = function () {
  return (
    <div className="flex h-[80px] justify-between">
      <div className="absolute bottom-[60px] left-[50px] flex gap-x-3 md:bottom-[30px]">
        <div className="flex size-[36px] items-center justify-center rounded bg-gray-400 hover:bg-gray-200">
          <Link
            href="https://discord.gg/b3tqEsYZ"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="cursor-pointer"
              src={img_discord}
              width={28}
              height={28}
              alt="Image"
            />
          </Link>
        </div>
        <div className="flex size-[36px] items-center justify-center rounded bg-gray-400 hover:bg-gray-200">
          <Link
            href="https://twitter.com/carinachain"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="cursor-pointer"
              src={img_twitter}
              width={30}
              height={30}
              alt="Image"
            />
          </Link>
        </div>
        <div className="flex size-[36px] items-center justify-center rounded bg-gray-400 hover:bg-gray-200">
          <Link href="mailto:contact@carinachain.com">
            <Image
              className="cursor-pointer"
              src={img_email}
              width={32}
              height={32}
              alt="Image"
            />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[30px] right-[50px] text-xs text-white">
        Copyright © 2024 Carina Chain Ltd
      </div>
    </div>
  );
};
