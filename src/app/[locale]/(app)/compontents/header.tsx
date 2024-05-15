import React from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/libs/i18nNavigation';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

// Images path
const img_twitter_rollover = '/svg/x.svg'
const img_email_rollover = '/svg/mail.svg'
const img_discord_rollover = '/svg/discord.svg'

// Page header
export default function Header() {
    const t = useTranslations('home.header');
    return (
        <div className="flex justify-center ">
            <div className="w-[1200px] flex justify-between items-center h-full py-[50px]">
                <div>
                    <Image
                        src="/images/logo.png"
                        width={200}
                        height={40}
                        alt="LOGO"
                    />
                </div>
                <div className="flex justify-between flex-1">
                    <HeaderContent></HeaderContent>
                    <div className="flex gap-x-3">
                        <div className='bg-orange-300 w-[36px] h-[36px] flex justify-center items-center rounded'>
                            <Image
                                className='cursor-pointer'
                                src={img_discord_rollover}
                                width={28}
                                height={28}
                                alt="Image"
                            />
                        </div>
                        <div className='bg-orange-300 w-[36px] h-[36px] flex justify-center items-center rounded'>
                            <Image
                                className='cursor-pointer'
                                src={img_twitter_rollover}
                                width={30}
                                height={30}
                                alt="Image"
                            />
                        </div>
                        <div className='bg-orange-300 w-[36px] h-[36px] flex justify-center items-center rounded'>
                            <Image
                                className='cursor-pointer'
                                src={img_email_rollover}
                                width={32}
                                height={32}
                                alt="Image"
                            />
                        </div>
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
    const router = useRouter();
    const pathname = usePathname();
    const handleChange = (val: any) => {
        router.push(pathname, { locale: val });
        router.refresh();
    };
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
                    <div onClick={() => handleChange('zh')}>简体中文</div>
                    <div onClick={() => handleChange('en')}>English</div>
                    <div onClick={() => handleChange('jp')}>日本語</div>
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
