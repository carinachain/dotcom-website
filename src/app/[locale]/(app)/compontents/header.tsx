import React from 'react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/libs/i18nNavigation';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Link from 'next/link';

// Images path
const img_twitter_rollover = '/svg/x.svg'
const img_email_rollover = '/svg/mail.svg'
const img_discord_rollover = '/svg/discord.svg'
const img_burger = '/svg/burger.svg'

// Page header
export default function Header() {
    const t = useTranslations('home.header');
    return (
        <div className="flex justify-center px-[10px] md:px-0">
            <div className="w-[1200px] flex justify-between items-center h-full py-[30px]">
                <div>
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            width={200}
                            height={40}
                            alt="LOGO"
                        />
                    </Link>
                </div>
                <div className="justify-between flex-1 hidden lg:flex">
                    <HeaderContent></HeaderContent>
                    <div className="flex gap-x-3">
                        <div className='bg-orange-300 w-[36px] h-[36px] flex justify-center items-center rounded hover:bg-orange-400'>
                            <Link href="https://discord.gg/b3tqEsYZ" target="_blank" rel="noreferrer">
                                <Image
                                    className='cursor-pointer'
                                    src={img_discord_rollover}
                                    width={28}
                                    height={28}
                                    alt="Image"
                                />
                            </Link>
                        </div>
                        <div className='bg-orange-300 w-[36px] h-[36px] flex justify-center items-center rounded hover:bg-orange-400'>
                            <Link href="https://twitter.com/carinachain" target="_blank" rel="noreferrer">
                                <Image
                                    className='cursor-pointer'
                                    src={img_twitter_rollover}
                                    width={30}
                                    height={30}
                                    alt="Image"
                                />
                            </Link>
                        </div>
                        <div className='bg-orange-300 w-[36px] h-[36px] flex justify-center items-center rounded hover:bg-orange-400'>
                            <Link href="mailto:contact@carinachain.com">
                                <Image
                                    className='cursor-pointer'
                                    src={img_email_rollover}
                                    width={32}
                                    height={32}
                                    alt="Image"
                                />  
                            </Link>
                        </div>
                        <Button className='ml-3' variant="contained">
                            <div className='text-white text-xs'>{t('openApp')}</div>
                        </Button>
                    </div>
                </div>
                <div className="lg:hidden flex">
                    <div className='w-[36px] h-[36px] mr-[10px] flex justify-center items-center rounded'>
                        <HeaderMenuItem title={''} burger={true}>
                            <ContentOne />
                            <ContentTwo />
                        </HeaderMenuItem>
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
            <Link href="/">
                <HeaderMenuItem children="" title={t('homePage.title')} nopopup={true}>
                </HeaderMenuItem>
            </Link>
            <HeaderMenuItem title={t('function.title')}>
                <ContentOne />
            </HeaderMenuItem>
            <HeaderMenuItem title={t('about.title')}>
                <ContentTwo />
            </HeaderMenuItem>
            <HeaderMenuItem title={t('language.title')}>
                <div className='pt-3 pb-3 pl-0 pr-0 flex flex-col justify-center gap-0 flex-wrap w-[88px] text-xs'>
                    <div className='pl-5 pt-2 pb-2 cursor-pointer hover:shadow hover:bg-gray-100' onClick={() => handleChange('zh')}>简体中文</div>
                    <div className='pl-5 pt-2 pb-2 cursor-pointer hover:shadow hover:bg-gray-100' onClick={() => handleChange('en')}>English</div>
                    <div className='pl-5 pt-2 pb-2 cursor-pointer hover:shadow hover:bg-gray-100' onClick={() => handleChange('jp')}>日本語</div>
                </div>
            </HeaderMenuItem>
        </div>
    )
}

const ContentOne = function ({ onMouseLeave }: { onMouseLeave: () => void }) {
    const t = useTranslations('home.header');
    return (
        <div className='pt-3 pb-3 pl-3 pr-0 flex gap-0 flex-wrap max-w-[550px]'  onMouseLeave={onMouseLeave}>
            <Link className='pt-3 pb-3 pl-5 flex gap-2 cursor-pointer hover:shadow hover:bg-gray-100' href="/points">
                <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_01.png')] bg-no-repeat"></div>
                <div className="flex flex-col justify-between gap-2">
                    <div className="text-orange-500 text-sm">{t('function.text1')}</div>
                    <div className="text-gray-400 text-xs max-w-[175px]">{t('function.detail1')}</div>
                </div>
            </Link>
            <Link className='pt-3 pb-3 pl-5 flex gap-2 cursor-pointer hover:shadow hover:bg-gray-100' href="/exchange">
                <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_03.png')] bg-no-repeat"></div>
                <div className="flex flex-col justify-between gap-2">
                    <div className="text-orange-500 text-sm">{t('function.text2')}</div>
                    <div className="text-gray-400 text-xs max-w-[175px]">{t('function.detail2')}</div>
                </div>
            </Link>
            <Link className='pt-3 pb-3 pl-5 flex gap-2 cursor-pointer hover:shadow hover:bg-gray-100' href="/common-points">
                <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_02.png')] bg-no-repeat"></div>
                <div className="flex flex-col justify-between gap-2">
                    <div className="text-orange-500 text-sm">{t('function.text3')}</div>
                    <div className="text-gray-400 text-xs max-w-[175px]">{t('function.detail3')}</div>
                </div>
            </Link>
            <Link className='pt-3 pb-3 pl-5 flex gap-2 cursor-pointer hover:shadow hover:bg-gray-100' href="/profit">
                <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_04.png')] bg-no-repeat"></div>
                <div className="flex flex-col justify-between gap-2">
                    <div className="text-orange-500 text-sm">{t('function.text4')}</div>
                    <div className="text-gray-400 text-xs max-w-[175px]">{t('function.detail4')}</div>
                </div>
            </Link>
        </div>
    )
}

const ContentTwo = function ({ onMouseLeave }: { onMouseLeave: () => void }) {
    const t = useTranslations('home.header');
    return (
        <div className='pt-3 pb-3 pl-3 pr-0 flex gap-0 flex-wrap max-w-[550px]' onMouseLeave={onMouseLeave}>
            <Link className='pt-3 pb-3 pl-5 flex gap-2 cursor-pointer hover:shadow hover:bg-gray-100' href="/architecture">
                <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_01.png')] bg-no-repeat"></div>
                <div className="flex flex-col justify-between gap-2">
                    <div className="text-orange-500 text-sm">{t('about.text1')}</div>
                    <div className="text-gray-400 text-xs w-[175px]">{t('about.detail1')}</div>
                </div>
            </Link>
            <Link className='pt-3 pb-3 pl-5 flex gap-2 cursor-pointer hover:shadow hover:bg-gray-100' href="/economic">
                <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_03.png')] bg-no-repeat"></div>
                <div className="flex flex-col justify-between gap-2">
                    <div className="text-orange-500 text-sm">{t('about.text2')}</div>
                    <div className="text-gray-400 text-xs max-w-[175px]">{t('about.detail2')}</div>
                </div>
            </Link>
            <Link className='pt-3 pb-3 pl-5 flex gap-2 cursor-pointer hover:shadow hover:bg-gray-100' href="/whitepaper">
                <div className="w-[50px] h-[50px] bg-[url('/images/index_top_menu_icon_02.png')] bg-no-repeat"></div>
                <div className="flex flex-col justify-between gap-2">
                    <div className="text-orange-500 text-sm">{t('about.text3')}</div>
                    <div className="text-gray-400 text-xs max-w-[200px]">{t('about.detail3')}</div>
                </div>
            </Link>
        </div>
    )
}

const HeaderMenuItem = function (props: { children: React.ReactNode, title: any, nopopup?: boolean, burger?: boolean }) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

    const handleOpen = (event: any) => {
        if (props.nopopup) return        
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        console.log('close');
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            {props.burger ? <Image
                aria-describedby={id}
                onMouseEnter={handleOpen}
                className={`cursor-pointer hover:shadow  ${open ? 'shadow' : ''}`}
                src={img_burger}
                width={30}
                height={30}
                alt="Image"
                /> :
                <div className={`cursor-pointer hover:shadow hover:bg-gray-100 ${open ? 'bg-gray-100' : ''}`} aria-describedby={id} onMouseEnter={handleOpen}>
                    <div className='px-8 py-2'>
                        {props.title}
                    </div>
                </div>
            }
            <Popover
                id={id}
                className='mt-0'
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
                }}>
                {React.cloneElement(props.children as React.ReactElement<any>, {
                    onMouseLeave: handleClose
                })}
            </Popover>
        </>
    )
}
