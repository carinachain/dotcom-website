import { useTranslations } from 'next-intl';
import { memo } from 'react';

export default function Profit() {
  return (
    <>
      <MemoizedCarousel />
      <MemoizedTitle />
      <MemoizedAdvantage />
      <MemoizedChart />
    </>
  );
}

// Carousel Component
const Carousel: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="relative h-[170px] w-[1200px] overflow-hidden rounded-none md:h-[398px] md:rounded-t-[80px]">
        <div className="size-full">
          <div className="size-full bg-[url('/images/economic_header.png')] bg-contain bg-no-repeat" />
        </div>
      </div>
    </div>
  );
};

// Title Component
const Title: React.FC = () => {
  const t = useTranslations('ecosys-n-community.carousel');
  return (
    <div className="flex justify-center">
      <div className="mt-[50px] w-[1200px] px-[10px] text-center text-3xl">
        <div className="mb-[15px]">{t('title1')}</div>
        <div>{t('title2')}</div>
      </div>
    </div>
  );
};

// Advantage Component with reusable AdvantageCard
const Advantage: React.FC = () => {
  const t = useTranslations('ecosys-n-community.advantage');
  const advantages = [
    {
      title: t('title1'),
      text: t('text1'),
      imgUrl: '/images/architecture_01.png',
    },
    {
      title: t('title2'),
      text: t('text2'),
      imgUrl: '/images/architecture_02.png',
    },
    {
      title: t('title3'),
      text: t('text3'),
      imgUrl: '/images/architecture_03.png',
    },
    {
      title: t('title4'),
      text: t('text4'),
      imgUrl: '/images/architecture_04.png',
    },
  ];

  return (
    <div className="flex justify-center pb-[100px] pt-[50px]">
      <div className="w-[1200px]">
        <div className="text-color-2 grid grid-cols-1 gap-2 rounded-[40px] bg-sky-100/20 p-[20px] text-lg leading-8 md:grid-cols-4 md:gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              title={advantage.title}
              text={advantage.text}
              imgUrl={advantage.imgUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable AdvantageCard component
interface AdvantageCardProps {
  title: string;
  text: string;
  imgUrl: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  title,
  text,
  imgUrl,
}) => {
  return (
    <div className="flex h-[450px] w-full flex-col rounded-none bg-white px-[30px] md:rounded-[25px]">
      <div
        className="mt-[30px] h-[100px] w-[110px] bg-no-repeat"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="pb-[15px] pt-[30px] text-2xl text-orange-500">
        {title}
      </div>
      <div className="pb-[10px]">{text}</div>
    </div>
  );
};

// Chart Component
const Chart: React.FC = () => {
  return (
    <div className="flex justify-center pb-[100px]">
      <div className="h-[300px] w-[1200px] sm:h-[550px] md:h-[720px]">
        <div className="size-full bg-[url('/images/economic.png')] bg-contain bg-no-repeat" />
      </div>
    </div>
  );
};

// Memoized Components to prevent unnecessary re-renders
const MemoizedCarousel = memo(Carousel);
const MemoizedTitle = memo(Title);
const MemoizedAdvantage = memo(Advantage);
const MemoizedChart = memo(Chart);
