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
                    <div className="w-full h-full bg-[url('/images/architecture_header.png')] bg-contain bg-no-repeat"></div>
                </div>
            </div>
        </div>
    )
}

const Title = function () {
    const t = useTranslations('architecture.carousel');
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
    const t = useTranslations('architecture.advantage');
    return (
        <div className="flex justify-center pb-[100px] pt-[50px]">
            <div className="w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6 text-color-2 text-lg leading-8 bg-sky-100/20 rounded-[40px] p-[20px]">
                    <div className="flex flex-col w-full h-[350px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[80px] h-[80px] bg-slate-400/90 my-[30px] rounded-[10px]">
                            <div className='text-white ml-[20px] pt-[18px] text-7xl'>1</div>
                        </div>
                        <div className='pb-[10px]'>{t('text1')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[350px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[80px] h-[80px] bg-slate-400/90 my-[30px] rounded-[10px]">
                            <div className='text-white ml-[20px] pt-[18px] text-7xl'>2</div>
                        </div>
                        <div className='pb-[10px]'>{t('text2')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[350px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[80px] h-[80px] bg-slate-400/90 my-[30px] rounded-[10px]">
                            <div className='text-white ml-[20px] pt-[18px] text-7xl'>3</div>
                        </div>
                        <div className='pb-[10px]'>{t('text3')}</div>
                    </div>
                    <div className="flex flex-col w-full h-[350px] px-[30px] rounded-none bg-white md:rounded-[25px]">
                        <div className="w-[80px] h-[80px] bg-slate-400/90 my-[30px] rounded-[10px]">
                            <div className='text-white ml-[20px] pt-[18px] text-7xl'>4</div>
                        </div>
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
            <div className="w-[1200px] h-[900px]">
                <div className="w-full h-full bg-[url('/images/architecture.png')] bg-contain bg-no-repeat"></div>
            </div>
        </div>
    )
}
