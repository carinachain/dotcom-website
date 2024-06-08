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
  const t = useTranslations('exchange.carousel');
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] grid grid-cols-1 md:grid-cols-2 bg-slate-300 h-[500px] rounded-none md:rounded-t-[50px] relative overflow-hidden">
        <div className="flex justify-center flex-col gap-3 px-14 translate-y-[-50px]">
          <div className="text-2xl">{t('title1')}</div>
          <div className="text-2xl">{t('title2')}</div>
          <div className="text-orange-500 w-[400px]">
          {t('text')}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-[url('/images/function_interchange_head_images_01.png')] bg-cover w-full h-[550px] -translate-y-10"></div>
        </div>
        <div className="absolute bg-black bg-cover w-[30px] h-[30px] left-[550px] top-[50px] rounded-full z-50"></div>
        <div className="absolute bg-black bg-cover w-[30px] h-[30px] left-[80px] bottom-[30px] rounded-full z-50"></div>
        <div className="absolute bg-white bg-cover w-[30px] h-[30px] left-[340px] bottom-[40px] rounded-full z-50"></div>
        <div className="absolute bg-orange-500 bg-cover w-[30px] h-[30px] left-[410px] bottom-[70px] rounded-full z-50"></div>
        <div className="absolute bg-white bg-cover w-[120px] h-[120px] left-[380px] bottom-[-60px] rounded-full z-50"></div>
        <div className="absolute bg-white bg-cover w-[80px] h-[80px] left-[110px] top-[-40px] rounded-full z-50"></div>
      </div>
    </div>
  )
}

// Feature block
const Feature = function () {
  const t = useTranslations('exchange.feature');
    return (
      <div className="flex justify-center">
        <div className="w-[1200px]">
          <div className="flex justify-center text-2xl pt-[50px] pb-[40px]">{t('title')}</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-color-2 mb-[100px] drop-shadow-2xl">
            <div className="flex flex-col items-center w-full h-[620px] bg-orange-400 rounded-none md:rounded-[50px] drop-shadow">
              <div className="h-[250px] flex justify-center items-center">
                <div className="h-[160px] w-[160px] bg-[url(/images/function_interchange_icon_01.png)] bg-no-repeat bg-contain"></div>
              </div>
              <div className="text-white text-2xl mb-[20px]">{t('box1.title')}</div>
              <div className="px-[30px]">
                <div className="mb-[15px]">{t('box1.text1')}</div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full h-[620px] bg-orange-400 rounded-none md:rounded-[50px] drop-shadow">
              <div className="h-[250px] flex justify-center items-center">
                <div className="h-[160px] w-[160px] bg-[url(/images/function_interchange_icon_02.png)] bg-no-repeat bg-contain"></div>
              </div>
              <div className="text-white text-2xl mb-[20px]">{t('box1.title')}</div>
              <div className="px-[30px]">
                <div className="mb-[15px]">{t('box2.text1')}</div>
                <div className="mb-[15px]">{t('box2.text2')}</div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full h-[620px] bg-orange-400 rounded-none md:rounded-[50px] drop-shadow">
              <div className="h-[250px] flex justify-center items-center">
                <div className="h-[160px] w-[160px] bg-[url(/images/function_interchange_icon_03.png)] bg-no-repeat bg-contain"></div>
              </div>
              <div className="text-white text-2xl mb-[20px]">{t('box1.title')}</div>
              <div className="px-[30px]">
                <div className="mb-[15px]">{t('box3.text1')}</div>
                <div className="mb-[15px]">{t('box3.text2')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
