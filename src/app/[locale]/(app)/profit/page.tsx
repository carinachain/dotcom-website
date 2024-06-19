import { useTranslations } from 'next-intl';

export default function Profit() {
    return (
        <>
            <Carousel></Carousel>
            <Advantage></Advantage>
        </>
    )
}

const Carousel = function () {
    const t = useTranslations('common-points.carousel');
    return (
        <div className="flex justify-center">
            <div className="w-[1200px] bg-orange-300 h-[730px] rounded-none md:rounded-t-[80px] bg-slate-300 relative overflow-hidden">
                <div className="w-full h-[390px]">
                    <div className="w-full h-[390px] bg-[url('/images/function_common_head_images_01.png')] bg-cover"></div>
                </div>
                <div className="flex justify-center items-center flex-col gap-3 px-10 mt-[70px]">
                    <div className="text-2xl">{t('title1')}</div>
                    <div className="text-2xl">{t('title2')}</div>
                    <div className="text-orange-500 w-[380px] mt-[20px]">
                        {t('text')}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Advantage = function () {
    const t = useTranslations('home.advantage');
    return (
        <div className="flex justify-center pb-[100px]">
            <div className="w-[1200px]">
                <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">{t('title')}</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 text-color-2 text-xs">
                    <div className="flex flex-col w-full h-[355px] px-[30px] rounded-none bg-gray-100 md:rounded-[50px] drop-shadow">
                        <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_01.png')] bg-no-repeat"></div>
                        <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>{t('box1.text1')}</div>
                        <div className='pb-[10px]'>{t('box1.text2')}</div>
                        <div className='pb-[10px]'>{t('box1.text3')}</div>
                        <div className='pb-[10px]'>{t('box1.text4')}</div>
                        <div className='pb-[10px]'>{t('box1.text5')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[355px] px-[30px] rounded-none bg-gray-100 md:rounded-[50px] drop-shadow">
                        <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_02.png')] bg-no-repeat"></div>
                        <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>{t('box2.text1')}</div>
                        <div className='pb-[10px]'>{t('box2.text2')}</div>
                        <div className='pb-[10px]'>{t('box2.text3')}</div>
                        <div className='pb-[10px]'>{t('box2.text4')}</div>
                        <div className='pb-[10px]'>{t('box2.text5')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[355px] px-[30px] rounded-none bg-gray-100 md:rounded-[50px] drop-shadow">
                        <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_03.png')] bg-no-repeat"></div>
                        <div className='text-orange-500 text-xl pt-[30px] pb-[15px]'>{t('box3.text1')}</div>
                        <div className='pb-[10px]'>{t('box3.text2')}</div>
                        <div className='pb-[10px]'>{t('box3.text3')}</div>
                        <div className='pb-[10px]'>{t('box3.text4')}</div>
                        <div className='pb-[10px]'>{t('box3.text5')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
