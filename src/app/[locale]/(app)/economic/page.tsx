import { useTranslations } from 'next-intl';

export default function Profit() {
    return (
        <>
            <Carousel></Carousel>
            <Title></Title>
            <Advantage></Advantage>
            <Chart></Chart>
        </>
    )
}

const Carousel = function () {
    return (
        <div className="flex justify-center">
            <div className="w-[1200px] h-[398px] rounded-none md:rounded-t-[80px] relative overflow-hidden">
                <div className="w-full h-full">
                    <div className="w-full h-full bg-[url('/images/economic_header.png')] bg-contain bg-no-repeat"></div>
                </div>
            </div>
        </div>
    )
}

const Title = function () {
    const t = useTranslations('economic.carousel');
    return (
        <div className="flex justify-center">
            <div className="w-[1200px] mt-[50px] text-3xl text-center">
                <div className="mb-[15px]">{t('title1')}</div>
                <div>{t('title2')}</div>
            </div>
        </div>
    )
}

const Advantage = function () {
    const t = useTranslations('economic.advantage');
    return (
        <div className="flex justify-center pb-[100px] pt-[50px]">
            <div className="w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 text-color-2 text-lg leading-8 bg-sky-100/20 rounded-[40px] p-[20px]">
                    <div className="flex flex-col w-full h-[450px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[110px] h-[100px] bg-[url('/images/architecture_01.png')] mt-[30px] bg-no-repeat"></div>
                        <div className='text-orange-500 text-2xl pt-[30px] pb-[15px]'>{t('title1')}</div>
                        <div className='pb-[10px]'>{t('text1')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[450px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[110px] h-[100px] bg-[url('/images/architecture_02.png')] mt-[30px] bg-no-repeat"></div>
                        <div className='text-orange-500 text-2xl pt-[30px] pb-[15px]'>{t('title2')}</div>
                        <div className='pb-[10px]'>{t('text2')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[450px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[110px] h-[100px] bg-[url('/images/architecture_03.png')] mt-[30px] bg-no-repeat"></div>
                        <div className='text-orange-500 text-2xl pt-[30px] pb-[15px]'>{t('title3')}</div>
                        <div className='pb-[10px]'>{t('text3')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[450px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[110px] h-[100px] bg-[url('/images/architecture_04.png')] mt-[30px] bg-no-repeat"></div>
                        <div className='text-orange-500 text-2xl pt-[30px] pb-[15px]'>{t('title4')}</div>
                        <div className='pb-[10px]'>{t('text4')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Chart = function () {
    return (
        <div className="flex justify-center pb-[100px]">
            <div className="w-[1200px] h-[720px]">
                <div className="w-full h-full bg-[url('/images/economic.png')] bg-contain bg-no-repeat"></div>
            </div>
        </div>
    )
}
