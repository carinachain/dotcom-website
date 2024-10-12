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
  const t = useTranslations('common-points.carousel');
  return (
    <div className="flex justify-center">
      <div className="relative h-[1100px] w-[1200px] overflow-hidden rounded-none bg-orange-300 bg-slate-300 md:h-[730px] md:rounded-t-[80px]">
        <div className="h-[390px] w-full">
          <div className="h-[390px] w-full bg-[url('/images/function_common_head_images_01.png')] bg-cover" />
        </div>
        <div className="z-60 mt-[70px] flex flex-col items-center justify-center gap-3 px-10">
          <div className="text-2xl">{t('title1')}</div>
          <div className="text-2xl">{t('title2')}</div>
          <div className="mt-[20px] flex flex-col gap-2 text-center text-orange-500">
            <div>{t('text1')}</div>
            <div>{t('text2')}</div>
            <div>{t('text3')}</div>
          </div>
        </div>
        <div className="absolute bottom-[170px] left-[70px] z-50 size-[60px] bg-[url('/images/function_common_yen_bg.png')] bg-cover" />
        <div className="absolute bottom-[100px] left-[-20px] z-50 size-[40px] bg-[url('/images/function_exclusive_yen_bg.png')] bg-cover" />
        <div className="absolute bottom-[180px] right-[80px] z-50 size-[30px] rounded-full bg-black bg-cover" />
        <div className="absolute bottom-[-60px] left-[120px] z-50 size-[120px] rounded-full bg-gray-100 bg-cover" />
        <div className="absolute bottom-[-100px] right-[-100px] z-30 size-[250px] rounded-full bg-gray-100 bg-cover" />
      </div>
    </div>
  );
};

const Feature = function () {
  const t = useTranslations('common-points.feature');
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] py-[80px]">
        <div className="justify-bewteen flex flex-col md:flex-row">
          <div className="mb-[50px] ml-0 flex justify-center md:mb-0 md:ml-[80px]">
            <div className="flex size-[250px] flex-col items-center justify-center rounded-full border-[20px] bg-slate-700 text-white">
              <div className="text-7xl">500</div>
              <div className="text-2xl">{t('jpy')}</div>
            </div>
          </div>
          <div className="flex grow flex-col items-center justify-center px-[10px]">
            <div className="mb-[40px] text-3xl">{t('content.title')}</div>
            <div className="items-cneter flex flex-col justify-center gap-1 text-gray-500">
              <div className="mw-[640px] text-center leading-8">
                {t('content.text1')}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 px-[20px] pt-[80px] text-gray-800 md:grid-cols-3 lg:px-[80px]">
          <div className="flex min-h-[400px] flex-col rounded-xl bg-white shadow-lg">
            <div className="m-[20px] h-[160px] rounded-xl bg-[url('/images/function_common_white_pic_01.png')] bg-cover" />
            <div className="m-[20px]">
              <div className="mb-3 text-2xl text-orange-500">
                {t('box1.title')}
              </div>
              <div>{t('box1.text1')}</div>
            </div>
          </div>
          <div className="flex min-h-[400px] flex-col rounded-md bg-white shadow-lg">
            <div className="m-[20px] h-[160px] rounded-md bg-blue-100 bg-[url('/images/function_common_white_pic_02.png')] bg-cover" />
            <div className="m-[20px]">
              <div className="mb-3 text-2xl text-orange-500">
                {t('box2.title')}
              </div>
              <div>{t('box2.text1')}</div>
            </div>
          </div>
          <div className="flex min-h-[400px] flex-col rounded-md bg-white shadow-lg">
            <div className="m-[20px] h-[160px] rounded-md bg-blue-100 bg-[url('/images/function_common_white_pic_03.png')] bg-cover" />
            <div className="m-[20px]">
              <div className="mb-3 text-2xl text-orange-500">
                {t('box3.title')}
              </div>
              <div>{t('box3.text1')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
