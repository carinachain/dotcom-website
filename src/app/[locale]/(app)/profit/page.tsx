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
    const t = useTranslations('profit.carousel');
    return (
        <div className="flex justify-center">
            <div className="w-[1200px] bg-gray-600/90 h-[730px] rounded-none md:rounded-t-[80px] bg-slate-300 relative overflow-hidden">
                <div className="w-full h-[450px]">
                    <div className="w-full h-[450px] bg-[url('/images/function_income_head_images_01.png')] bg-cover"></div>
                </div>
                <div className="flex justify-center items-center flex-col gap-3 px-10 mt-[50px]">
                    <div className="text-3xl text-orange-500">{t('title1')}</div>
                    <div className="text-white w-[500px] mt-[20px] text-center text-lg leading-8">
                        {t('text1')}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Advantage = function () {
    const t = useTranslations('profit.advantage');
    return (
        <div className="flex justify-center pb-[100px]">
            <div className="w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 text-color-2 text-lg leading-8 pt-[50px]">
                    <div className="flex flex-col w-full h-[450px] px-[30px] rounded-none bg-gray-100 md:rounded-[50px] drop-shadow">
                        <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_01.png')] bg-no-repeat"></div>
                        <div className='text-orange-500 text-3xl pt-[30px] pb-[15px]'>{t('box1.title')}</div>
                        <div className='pb-[10px]'>{t('box1.text')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[450px] px-[30px] rounded-none bg-gray-100 md:rounded-[50px] drop-shadow">
                        <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_02.png')] bg-no-repeat"></div>
                        <div className='text-orange-500 text-3xl pt-[30px] pb-[15px]'>{t('box2.title')}</div>
                        <div className='pb-[10px]'>{t('box2.text')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[450px] px-[30px] rounded-none bg-gray-100 md:rounded-[50px] drop-shadow">
                        <div className="ml-[-20px] w-[110px] h-[100px] bg-[url('/images/index_advantage_icon_03.png')] bg-no-repeat"></div>
                        <div className='text-orange-500 text-3xl pt-[30px] pb-[15px]'>{t('box3.title')}</div>
                        <div className='pb-[10px]'>{t('box3.text')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
