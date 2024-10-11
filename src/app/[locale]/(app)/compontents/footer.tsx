import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/libs/i18nNavigation';
import Image from 'next/image';
import Link from 'next/link';

// Images path
const img_twitter = '/svg/x_dark.svg'
const img_email = '/svg/mail_dark.svg'
const img_discord = '/svg/discord_dark.svg'

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
        <div className="flex items-center flex-col bg-gray-300">
            <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">{t('title')}</div>
            <div className="w-full xl:w-[1200px] min-h-[400px] bg-slate-800 rounded-none xl:rounded-t-[50px] relative overflow-hidden">
                <div className='absolute top-[-180px] right-[-60px] w-[300px] h-[300px] border-[3px] border-gray-600 rounded-full'></div>
                <div className='absolute top-[-220px] right-[-100px] w-[420px] h-[420px] border-[3px] border-gray-600 rounded-full'></div>
                <div className="p-[50px]">
                    <div className='text-orange-500 text-xl pb-[36px]'>{t('intro')}</div>
                    <div className="max-w-[850px] grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-y-10 text-white text-xs">
                        <FooterMapCol>
                            <div className='text-gray-500 cursor-pointer text-sm'>{t('box1.title')}</div>
                            <Link href="/#carousel" passHref>
                                <div className='cursor-pointer'>{t('box1.text1')}</div>
                            </Link>
                            <Link href="/#feature" passHref>
                                <div className='cursor-pointer'>{t('box1.text2')}</div>
                            </Link>
                            <Link href="/#advantage" passHref>
                                <div className='cursor-pointer'>{t('box1.text3')}</div>
                            </Link>
                        </FooterMapCol>
                        <FooterMapCol>
                            <div className='text-gray-500 cursor-pointer text-sm'>{t('box2.title')}</div>
                            <Link href="/points" passHref>
                                <div className='cursor-pointer'>{t('box2.text1')}</div>
                            </Link>
                            <Link href="/common-points" passHref>
                                <div className='cursor-pointer'>{t('box2.text2')}</div>
                            </Link>
                            <Link href="/exchange" passHref>
                                <div className='cursor-pointer'>{t('box2.text3')}</div>
                            </Link>
                            <Link href="/profit" passHref>
                                <div className='cursor-pointer'>{t('box2.text4')}</div>
                            </Link>
                        </FooterMapCol>
                        <FooterMapCol>
                            <div className='text-gray-500 cursor-pointer text-sm'>{t('box3.title')}</div>
                            <Link href="/architecture" passHref>
                                <div className='cursor-pointer'>{t('box3.text1')}</div>
                            </Link>
                            <Link href="/economic" passHref>
                                <div className='cursor-pointer'>{t('box3.text2')}</div>
                            </Link>
                            <Link href="/whitepaper" passHref>
                                <div className='cursor-pointer'>{t('box3.text3')}</div>
                            </Link>
                        </FooterMapCol>
                        <FooterMapCol>
                            <div className='text-gray-500 cursor-pointer text-sm'>{t('box4.title')}</div>
                            <div onClick={() => handleChange('zh')} className='cursor-pointer'>{t('box4.text1')}</div>
                            <div onClick={() => handleChange('en')} className='cursor-pointer'>{t('box4.text2')}</div>
                            <div onClick={() => handleChange('jp')} className='cursor-pointer'>{t('box4.text3')}</div>
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
        <div className="flex flex-col gap-y-3 min-w-[200px]">
            {props.children}
        </div>
    )
}

const FooterBtnContent = function () {
    return (
        <div className="flex justify-between h-[80px]">
            <div className="flex gap-x-3 absolute bottom-[30px] left-[50px]">
                <div className='bg-gray-400 w-[36px] h-[36px] flex justify-center items-center rounded hover:bg-gray-200'>
                    <Link href="https://discord.gg/b3tqEsYZ" target="_blank" rel="noreferrer">
                        <Image
                            className='cursor-pointer'
                            src={img_discord}
                            width={28}
                            height={28}
                            alt="Image"
                        />
                    </Link>
                </div>
                <div className='bg-gray-400 w-[36px] h-[36px] flex justify-center items-center rounded hover:bg-gray-200'>
                    <Link href="https://twitter.com/carinachain" target="_blank" rel="noreferrer">
                        <Image
                            className='cursor-pointer'
                            src={img_twitter}
                            width={30}
                            height={30}
                            alt="Image"
                        />
                    </Link>
                </div>
                <div className='bg-gray-400 w-[36px] h-[36px] flex justify-center items-center rounded hover:bg-gray-200'>
                    <Link href="mailto:contact@carinachain.com">
                        <Image
                            className='cursor-pointer'
                            src={img_email}
                            width={32}
                            height={32}
                            alt="Image"
                        />
                    </Link>
                </div>
            </div>
            <div className="text-white absolute bottom-[30px] right-[50px] text-xs">Copyright © 2024 Carina Chain Ltd</div>
        </div>
    )
}