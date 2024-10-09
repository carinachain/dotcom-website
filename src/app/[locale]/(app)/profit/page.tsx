import { useTranslations } from 'next-intl';

export default function Profit() {
  return (
    <>
      <Carousel />
      <Advantage />
    </>
  );
}

const Carousel = function () {
  const t = useTranslations('profit.carousel');
  return (
    <div className="flex justify-center">
      <div className="relative h-[900px] w-[1200px] overflow-hidden rounded-none bg-gray-600/90 bg-slate-300 md:h-[800px] md:rounded-t-[80px]">
        <div className="h-[450px] w-full">
          <div className="h-[450px] w-full bg-[url('/images/function_income_head_images_01.png')] bg-cover" />
        </div>
        <div className="mt-[50px] flex flex-col items-center justify-center gap-3 px-10">
          <div className="text-3xl text-orange-500">{t('title1')}</div>
          <div className="mw-[500px] mt-[20px] text-center text-lg leading-8 text-white">
            {t('text1')}
          </div>
        </div>
      </div>
    </div>
  );
};

const Advantage = function () {
  const t = useTranslations('profit.advantage');
  return (
    <div className="flex justify-center pb-0 md:pb-[100px]">
      <div className="w-[1200px]">
        <div className="text-color-2 grid grid-cols-1 gap-x-2 pt-0 text-lg leading-8 md:grid-cols-3 md:gap-x-6 md:pt-[50px]">
          <div className="flex h-[450px] w-full flex-col rounded-none bg-gray-100 px-[30px] drop-shadow md:rounded-[50px]">
            <div className="ml-[-20px] h-[100px] w-[110px] bg-[url('/images/index_advantage_icon_01.png')] bg-no-repeat" />
            <div className="pb-[15px] pt-[30px] text-3xl text-orange-500">
              {t('box1.title')}
            </div>
            <div className="pb-[10px]">{t('box1.text')}</div>
          </div>
          <div className="flex h-[450px] w-full flex-col rounded-none bg-gray-100 px-[30px] drop-shadow md:rounded-[50px]">
            <div className="ml-[-20px] h-[100px] w-[110px] bg-[url('/images/index_advantage_icon_02.png')] bg-no-repeat" />
            <div className="pb-[15px] pt-[30px] text-3xl text-orange-500">
              {t('box2.title')}
            </div>
            <div className="pb-[10px]">{t('box2.text')}</div>
          </div>
          <div className="flex h-[450px] w-full flex-col rounded-none bg-gray-100 px-[30px] drop-shadow md:rounded-[50px]">
            <div className="ml-[-20px] h-[100px] w-[110px] bg-[url('/images/index_advantage_icon_03.png')] bg-no-repeat" />
            <div className="pb-[15px] pt-[30px] text-3xl text-orange-500">
              {t('box3.title')}
            </div>
            <div className="pb-[10px]">{t('box3.text')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
