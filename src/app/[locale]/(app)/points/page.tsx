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
  const t = useTranslations('points.carousel');
  return (
    <div className="flex justify-center">
      <div className="relative grid h-[500px] w-[1200px] grid-cols-1 overflow-hidden rounded-none bg-orange-300 bg-orange-400/80 md:grid-cols-2 md:rounded-t-[50px]">
        <div className="flex flex-col justify-center gap-3 px-10">
          <div className="text-2xl">{t('title1')}</div>
          <div className="text-2xl">{t('title2')}</div>
          <div className="w-[380px] text-white">{t('text')}</div>
        </div>
        <div className="relative hidden md:block">
          <div className="absolute bottom-0 left-[50px] z-50 h-full w-[400px] bg-[url('/images/function_exclusive_head_image_01.png')] bg-cover" />
          <div className="absolute bottom-0 left-0 z-10 h-[480px] w-[450px] rounded-t-[50px] bg-slate-400/80" />
        </div>
        <div className="absolute left-[580px] top-[70px] z-50 size-[60px] bg-[url('/images/function_common_yen_bg.png')] bg-cover" />
        <div className="absolute bottom-[-15px] right-[80px] z-50 size-[40px] bg-[url('/images/function_exclusive_yen_bg.png')] bg-cover" />
        <div className="absolute left-[550px] top-[50px] z-50 size-[30px] rounded-full bg-black bg-cover" />
        <div className="absolute bottom-[30px] left-[80px] z-50 size-[30px] rounded-full bg-black bg-cover" />
        <div className="absolute bottom-[40px] left-[340px] z-50 size-[30px] rounded-full bg-white bg-cover" />
        <div className="absolute bottom-[70px] left-[410px] z-50 size-[30px] rounded-full bg-orange-500 bg-cover" />
        <div className="absolute bottom-[-60px] left-[380px] z-50 size-[120px] rounded-full bg-white bg-cover" />
        <div className="absolute bottom-[160px] left-[630px] z-30 size-[120px] rounded-full bg-white bg-cover" />
        <div className="absolute left-[110px] top-[-40px] z-50 size-[80px] rounded-full bg-white bg-cover" />
      </div>
    </div>
  );
};

const Feature = function () {
  const t = useTranslations('points.feature');
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] pb-10 pt-[80px] md:pb-[80px]">
        <div className="justify-bewteen flex flex-col md:flex-row">
          <div className="mb-[50px] ml-0 flex justify-center md:mb-0 md:ml-[80px]">
            <div className="flex size-[250px] flex-col items-center justify-center rounded-full border-[20px] bg-orange-500 text-white">
              <div className="text-7xl">500</div>
              <div className="text-2xl">{t('jpy')}</div>
            </div>
          </div>
          <div className="flex grow flex-col items-center justify-center">
            <div className="mb-[40px] text-center text-3xl">
              {t('conetent.title')}
            </div>
            <div className="items-cneter flex flex-col justify-center gap-1 px-[10px] text-gray-500">
              <div className="text-center">{t('conetent.text1')}</div>
              <div className="text-center">{t('conetent.text2')}</div>
              <div className="text-center">{t('conetent.text3')}</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 px-[20px] pt-[80px] text-gray-800 md:grid-cols-3 lg:px-[80px]">
          <div className="flex min-h-[400px] flex-col rounded-xl bg-white shadow-lg">
            <div className="m-[20px] h-[160px] rounded-xl bg-[url('/images/function_exclusive_white_pic_01.png')] bg-cover" />
            <div className="m-[20px]">
              <div className="mb-3 text-2xl text-orange-500">
                {t('box1.title')}
              </div>
              <div>{t('box1.text1')}</div>
            </div>
          </div>
          <div className="flex min-h-[400px] flex-col rounded-md bg-white shadow-lg">
            <div className="m-[20px] h-[160px] rounded-md bg-blue-100 bg-[url('/images/function_exclusive_white_pic_02.png')] bg-cover" />
            <div className="m-[20px]">
              <div className="mb-3 text-2xl text-orange-500">
                {t('box2.title')}
              </div>
              <div>{t('box2.text1')}</div>
            </div>
          </div>
          <div className="flex min-h-[400px] flex-col rounded-md bg-white shadow-lg">
            <div className="m-[20px] h-[160px] rounded-md bg-blue-100 bg-[url('/images/function_exclusive_white_pic_03.png')] bg-cover" />
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
