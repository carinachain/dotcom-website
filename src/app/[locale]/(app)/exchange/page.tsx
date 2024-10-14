import { useTranslations } from 'next-intl';
import { memo } from 'react';

export default function Points() {
  return (
    <>
      <MemoizedCarousel />
      <MemoizedFeature />
    </>
  );
}

// Carousel Component
const Carousel: React.FC = () => {
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
        {/* Decorative Circles */}
        <DecorativeCircles />
      </div>
    </div>
  );
};

// Decorative Circles Component
const DecorativeCircles: React.FC = () => (
  <>
    <div className="absolute left-[550px] top-[50px] z-50 size-[30px] rounded-full bg-black bg-cover" />
    <div className="absolute bottom-[30px] left-[80px] z-50 size-[30px] rounded-full bg-black bg-cover" />
    <div className="absolute bottom-[40px] left-[340px] z-50 size-[30px] rounded-full bg-white bg-cover" />
    <div className="absolute bottom-[70px] left-[410px] z-50 size-[30px] rounded-full bg-orange-500 bg-cover" />
    <div className="absolute bottom-[-60px] left-[380px] z-50 size-[120px] rounded-full bg-white bg-cover" />
    <div className="absolute left-[110px] top-[-40px] z-50 size-[80px] rounded-full bg-white bg-cover" />
  </>
);

// Feature Component
const Feature: React.FC = () => {
  const t = useTranslations('exchange.feature');

  const boxes = [
    {
      iconUrl: '/images/function_interchange_icon_01.png',
      title: t('box1.title'),
      texts: [t('box1.text1')],
    },
    {
      iconUrl: '/images/function_interchange_icon_02.png',
      title: t('box2.title'),
      texts: [t('box2.text1'), t('box2.text2')],
    },
    {
      iconUrl: '/images/function_interchange_icon_03.png',
      title: t('box3.title'),
      texts: [t('box3.text1'), t('box3.text2')],
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[1200px]">
        <div className="flex justify-center pb-[40px] pt-[50px] text-2xl">
          {t('title')}
        </div>
        <div className="text-color-2 mb-0 grid grid-cols-1 gap-x-6 drop-shadow-2xl md:mb-[100px] md:grid-cols-3">
          {boxes.map((box, index) => (
            <FeatureBox
              key={index}
              iconUrl={box.iconUrl}
              title={box.title}
              texts={box.texts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// FeatureBox Component
interface FeatureBoxProps {
  iconUrl: string;
  title: string;
  texts: string[];
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ iconUrl, title, texts }) => (
  <div className="flex h-[620px] w-full flex-col items-center rounded-none bg-orange-400 drop-shadow md:rounded-[50px]">
    <div className="flex h-[250px] items-center justify-center">
      <div
        className="size-[160px] bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${iconUrl})` }}
      />
    </div>
    <div className="mb-[20px] text-2xl text-white">{title}</div>
    <div className="px-[30px]">
      {texts.map((text, idx) => (
        <div key={idx} className="mb-[15px]">
          {text}
        </div>
      ))}
    </div>
  </div>
);

// Memoized Components to prevent unnecessary re-renders
const MemoizedCarousel = memo(Carousel);
const MemoizedFeature = memo(Feature);
