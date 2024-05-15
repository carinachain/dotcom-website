import { useTranslations } from 'next-intl';
import Image from 'next/image';

// Images path
const img_twitter = '/svg/x_dark.svg'
const img_email = '/svg/mail_dark.svg'
const img_discord = '/svg/discord_dark.svg'

// Page Footer
export default function Footer() {
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
                <div className='bg-gray-400 w-[36px] h-[36px] flex justify-center items-center rounded'>
                    <Image
                        className='cursor-pointer'
                        src={img_discord}
                        width={28}
                        height={28}
                        alt="Image"
                    />
                </div>
                <div className='bg-gray-400 w-[36px] h-[36px] flex justify-center items-center rounded'>
                    <Image
                        className='cursor-pointer'
                        src={img_twitter}
                        width={30}
                        height={30}
                        alt="Image"
                    />
                </div>
                <div className='bg-gray-400 w-[36px] h-[36px] flex justify-center items-center rounded'>
                    <Image
                        className='cursor-pointer'
                        src={img_email}
                        width={32}
                        height={32}
                        alt="Image"
                    />
                </div>
            </div>
            <div className="text-white absolute bottom-[30px] right-[50px] text-xs">Copyright © 2024 Carina Chain Ltd</div>
        </div>
    )
}