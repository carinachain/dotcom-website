import { useTranslations } from 'next-intl';

export default function Points() {
  return (
    <>
      <Carousel />
      <Feature />
    </>
  );
}

const Carousel = function () {
  const t = useTranslations('exchange.carousel');
  return (
    <div className="flex justify-center">
      <div className="relative grid h-[500px] w-[1200px] grid-cols-1 overflow-hidden rounded-none bg-slate-300 md:grid-cols-2 md:rounded-t-[50px]">
        <div className="flex translate-y-[-50px] flex-col justify-center gap-3 px-14">
          <div className="text-2xl">{t('title1')}</div>
          <div className="text-2xl">{t('title2')}</div>
          <div className="mw-[400px] text-orange-500">{t('text')}</div>
        </div>
        <div className="hidden md:block">
          <div className="h-[550px] w-full -translate-y-10 bg-[url('/images/function_interchange_head_images_01.png')] bg-cover" />
        </div>
        <div className="absolute left-[550px] top-[50px] z-50 size-[30px] rounded-full bg-black bg-cover" />
        <div className="absolute bottom-[30px] left-[80px] z-50 size-[30px] rounded-full bg-black bg-cover" />
        <div className="absolute bottom-[40px] left-[340px] z-50 size-[30px] rounded-full bg-white bg-cover" />
        <div className="absolute bottom-[70px] left-[410px] z-50 size-[30px] rounded-full bg-orange-500 bg-cover" />
        <div className="absolute bottom-[-60px] left-[380px] z-50 size-[120px] rounded-full bg-white bg-cover" />
        <div className="absolute left-[110px] top-[-40px] z-50 size-[80px] rounded-full bg-white bg-cover" />
      </div>
    </div>
  );
};

// Feature block
const Feature = function () {
  const t = useTranslations('exchange.feature');
  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        <div className="flex justify-center pb-[40px] pt-[50px] text-2xl">
          {t('title')}
        </div>
        <div className="text-color-2 mb-0 grid grid-cols-1 gap-x-6 drop-shadow-2xl md:mb-[100px] md:grid-cols-3">
          <div className="flex h-[620px] w-full flex-col items-center rounded-none bg-orange-400 drop-shadow md:rounded-[50px]">
            <div className="flex h-[250px] items-center justify-center">
              <div className="size-[160px] bg-[url(/images/function_interchange_icon_01.png)] bg-contain bg-no-repeat" />
            </div>
            <div className="mb-[20px] text-2xl text-white">
              {t('box1.title')}
            </div>
            <div className="px-[30px]">
              <div className="mb-[15px]">{t('box1.text1')}</div>
            </div>
          </div>
          <div className="flex h-[620px] w-full flex-col items-center rounded-none bg-orange-400 drop-shadow md:rounded-[50px]">
            <div className="flex h-[250px] items-center justify-center">
              <div className="size-[160px] bg-[url(/images/function_interchange_icon_02.png)] bg-contain bg-no-repeat" />
            </div>
            <div className="mb-[20px] text-2xl text-white">
              {t('box1.title')}
            </div>
            <div className="px-[30px]">
              <div className="mb-[15px]">{t('box2.text1')}</div>
              <div className="mb-[15px]">{t('box2.text2')}</div>
            </div>
          </div>
          <div className="flex h-[620px] w-full flex-col items-center rounded-none bg-orange-400 drop-shadow md:rounded-[50px]">
            <div className="flex h-[250px] items-center justify-center">
              <div className="size-[160px] bg-[url(/images/function_interchange_icon_03.png)] bg-contain bg-no-repeat" />
            </div>
            <div className="mb-[20px] text-2xl text-white">
              {t('box1.title')}
            </div>
            <div className="px-[30px]">
              <div className="mb-[15px]">{t('box3.text1')}</div>
              <div className="mb-[15px]">{t('box3.text2')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
