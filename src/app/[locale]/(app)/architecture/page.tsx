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
    const t = useTranslations('profit.carousel');
    return (
        <div className="flex justify-center">
            <div className="w-[1200px] h-[398px] rounded-none md:rounded-t-[80px] relative overflow-hidden">
                <div className="w-full h-full">
                    <div className="w-full h-full bg-[url('/images/architecture_header.png')] bg-contain bg-no-repeat"></div>
                </div>
            </div>
        </div>
    )
}

const Title = function () {
    return (
        <div className="flex justify-center">
            <div className="w-[1200px] mt-[50px] text-3xl text-center">
                <div className="mb-[15px]">Carina积分(CRN)作为媒介在整个生态内流通</div>
                <div>平台通过产品与服务获取的收益是CRN的价值基础</div>
            </div>
        </div>
    )
}

const Advantage = function () {
    const t = useTranslations('profit.advantage');
    return (
        <div className="flex justify-center pb-[100px] pt-[50px]">
            <div className="w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 text-color-2 text-lg leading-8 bg-sky-100/10 rounded-[40px] p-[20px]">
                    <div className="flex flex-col w-full h-[450px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[110px] h-[100px] bg-[url('/images/architecture_01.png')] ml-[20px] mt-[30px] bg-no-repeat"></div>
                        <div className='text-orange-500 text-3xl pt-[30px] pb-[15px]'>{t('box1.title')}</div>
                        <div className='pb-[10px]'>{t('box1.text')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[450px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[110px] h-[100px] bg-[url('/images/architecture_01.png')] ml-[20px] mt-[30px] bg-no-repeat"></div>
                        <div className='text-orange-500 text-3xl pt-[30px] pb-[15px]'>{t('box2.title')}</div>
                        <div className='pb-[10px]'>{t('box2.text')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[450px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[110px] h-[100px] bg-[url('/images/architecture_01.png')] ml-[20px] mt-[30px] bg-no-repeat"></div>
                        <div className='text-orange-500 text-3xl pt-[30px] pb-[15px]'>{t('box3.title')}</div>
                        <div className='pb-[10px]'>{t('box3.text')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[450px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[110px] h-[100px] bg-[url('/images/architecture_01.png')] ml-[20px] mt-[30px] bg-no-repeat"></div>
                        <div className='text-orange-500 text-3xl pt-[30px] pb-[15px]'>{t('box3.title')}</div>
                        <div className='pb-[10px]'>{t('box3.text')}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Chart = function () {
    return (
        <div className="flex justify-center pb-[100px]">
            <div className="w-[1200px] h-[900px]">
                <div className="w-full h-full bg-[url('/images/architecture.png')] bg-contain bg-no-repeat"></div>
            </div>
        </div>
    )
}
