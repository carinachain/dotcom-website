import { useTranslations } from 'next-intl';

export default function Profit() {
  return (
    <>
      <Carousel />
      <Title />
      <Advantage />
      <Chart />
    </>
  );
}

const Carousel = function () {
  return (
    <div className="flex justify-center">
      <div className="relative h-[398px] w-[1200px] overflow-hidden rounded-none md:rounded-t-[80px]">
        <div className="size-full">
          <div className="size-full bg-[url('/images/economic_header.png')] bg-contain bg-no-repeat" />
        </div>
      </div>
    </div>
  );
};

const Title = function () {
  const t = useTranslations('economic.carousel');
  return (
    <div className="flex justify-center">
      <div className="mt-[50px] w-[1200px] text-center text-3xl">
        <div className="mb-[15px]">{t('title1')}</div>
        <div>{t('title2')}</div>
      </div>
    </div>
  );
};

const Advantage = function () {
  const t = useTranslations('economic.advantage');
  return (
    <div className="flex justify-center pb-[100px] pt-[50px]">
      <div className="w-[1200px]">
        <div className="text-color-2 grid grid-cols-1 gap-2 rounded-[40px] bg-sky-100/20 p-[20px] text-lg leading-8 md:grid-cols-4 md:gap-6">
          <div className="flex h-[450px] w-full flex-col rounded-none bg-white px-[30px] md:rounded-[25px]">
            <div className="mt-[30px] h-[100px] w-[110px] bg-[url('/images/architecture_01.png')] bg-no-repeat" />
            <div className="pb-[15px] pt-[30px] text-2xl text-orange-500">
              {t('title1')}
            </div>
            <div className="pb-[10px]">{t('text1')}</div>
          </div>
          <div className="flex h-[450px] w-full flex-col rounded-none bg-white px-[30px] md:rounded-[25px]">
            <div className="mt-[30px] h-[100px] w-[110px] bg-[url('/images/architecture_02.png')] bg-no-repeat" />
            <div className="pb-[15px] pt-[30px] text-2xl text-orange-500">
              {t('title2')}
            </div>
            <div className="pb-[10px]">{t('text2')}</div>
          </div>
          <div className="flex h-[450px] w-full flex-col rounded-none bg-white px-[30px] md:rounded-[25px]">
            <div className="mt-[30px] h-[100px] w-[110px] bg-[url('/images/architecture_03.png')] bg-no-repeat" />
            <div className="pb-[15px] pt-[30px] text-2xl text-orange-500">
              {t('title3')}
            </div>
            <div className="pb-[10px]">{t('text3')}</div>
          </div>
          <div className="flex h-[450px] w-full flex-col rounded-none bg-white px-[30px] md:rounded-[25px]">
            <div className="mt-[30px] h-[100px] w-[110px] bg-[url('/images/architecture_04.png')] bg-no-repeat" />
            <div className="pb-[15px] pt-[30px] text-2xl text-orange-500">
              {t('title4')}
            </div>
            <div className="pb-[10px]">{t('text4')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Chart = function () {
  return (
    <div className="flex justify-center pb-[100px]">
      <div className="h-[720px] w-[1200px]">
        <div className="size-full bg-[url('/images/economic.png')] bg-contain bg-no-repeat" />
      </div>
    </div>
  );
};
