import { useTranslations } from 'next-intl';

export default function Points() {
    return (
        <>
            <Carousel></Carousel>
            <Feature></Feature>
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
                {/* <div className="absolute bg-[url('/images/function_common_yen_bg.png')] bg-cover w-[60px] h-[60px] left-[580px] top-[70px] z-50"></div>
                <div className="absolute bg-[url('/images/function_exclusive_yen_bg.png')] bg-cover w-[40px] h-[40px] right-[80px] bottom-[-15px] z-50"></div>
                <div className="absolute bg-black bg-cover w-[30px] h-[30px] left-[550px] top-[50px] rounded-full z-50"></div>
                <div className="absolute bg-black bg-cover w-[30px] h-[30px] left-[80px] bottom-[30px] rounded-full z-50"></div>
                <div className="absolute bg-white bg-cover w-[30px] h-[30px] left-[340px] bottom-[40px] rounded-full z-50"></div>
                <div className="absolute bg-orange-500 bg-cover w-[30px] h-[30px] left-[410px] bottom-[70px] rounded-full z-50"></div>
                <div className="absolute bg-white bg-cover w-[120px] h-[120px] left-[380px] bottom-[-60px] rounded-full z-50"></div>
                <div className="absolute bg-white bg-cover w-[120px] h-[120px] left-[630px] bottom-[160px] rounded-full z-30"></div>
                <div className="absolute bg-white bg-cover w-[80px] h-[80px] left-[110px] top-[-40px] rounded-full z-50"></div> */}
            </div>
        </div>
    )
}

const Feature = function () {
    const t = useTranslations('common-points.feature');
    return (
        <div className="flex justify-center">
            <div className="w-[1200px] py-[80px]">
                <div className="flex flex-col md:flex-row justify-bewteen">
                    <div className="flex justify-center ml-0 md:ml-[80px] mb-[50px] md:mb-0">
                        <div className="flex justify-center items-center flex-col rounded-full bg-slate-700 w-[250px] h-[250px] border-[20px] text-white">
                            <div className="text-7xl">
                                500
                            </div>
                            <div className="text-2xl">
                            {t('jpy')}
                            </div>
                        </div>
                    </div>
                    <div className="grow flex flex-col items-center justify-center">
                        <div className="text-3xl mb-[40px]">{t('conetent.title')}</div>
                        <div className="text-gray-500 flex flex-col items-cneter justify-center gap-1">
                            <div className="text-center">{t('conetent.text1')}</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-[80px] px-[20px] lg:px-[80px] text-gray-800">
                    <div className="bg-white min-h-[400px] flex flex-col rounded-xl shadow-lg">
                        <div className="bg-[url('/images/function_common_white_pic_01.png')] bg-cover h-[160px] m-[20px] rounded-xl">
                        </div>
                        <div className="m-[20px]">
                            <div className="text-2xl text-orange-500">
                            {t('box1.title')}
                            </div>
                            <div>
                            {t('box1.text1')}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white min-h-[400px] flex flex-col rounded-md shadow-lg">
                        <div className="bg-[url('/images/function_common_white_pic_02.png')] bg-cover bg-blue-100 h-[160px] m-[20px] rounded-md">
                        </div>
                        <div className="m-[20px]">
                            <div className="text-2xl text-orange-500">
                            {t('box2.title')}
                            </div>
                            <div>
                            {t('box2.text1')}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white min-h-[400px] flex flex-col rounded-md shadow-lg">
                        <div className="bg-[url('/images/function_common_white_pic_03.png')] bg-cover bg-blue-100 h-[160px] m-[20px] rounded-md">
                        </div>
                        <div className="m-[20px]">
                            <div className="text-2xl text-orange-500">
                            {t('box3.title')}
                            </div>
                            <div>
                            {t('box3.text1')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
