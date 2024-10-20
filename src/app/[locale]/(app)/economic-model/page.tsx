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
          <div className="size-full bg-[url('/images/architecture_header.png')] bg-contain bg-no-repeat" />
        </div>
      </div>
    </div>
  );
};

// Title Component
const Title: React.FC = () => {
  const t = useTranslations('economic-model.carousel');
  return (
    <div className="flex justify-center">
      <div className="mt-[50px] w-[1200px] px-[10px] text-center text-3xl">
        <div className="mb-[15px]">{t('title1')}</div>
        <div>{t('title2')}</div>
      </div>
    </div>
  );
};

// Advantage Component
const Advantage: React.FC = () => {
  const t = useTranslations('economic-model.advantage');
  const advantageKeys = ['text1', 'text2', 'text3', 'text4'] as const;

  return (
    <div className="flex justify-center pb-[100px] pt-[50px]">
      <div className="w-[1200px]">
        <div className="text-color-2 grid grid-cols-1 gap-2 rounded-[40px] bg-sky-100/20 p-[20px] text-lg leading-8 md:grid-cols-4 md:gap-6">
          {advantageKeys.map((key, index) => (
            <AdvantageCard key={index} index={index + 1} text={t(key)} />
          ))}
        </div>
      </div>
    </div>
  );
};

// AdvantageCard Component Props Type Definition
interface AdvantageCardProps {
  index: number;
  text: string;
}

// AdvantageCard Component
const AdvantageCard: React.FC<AdvantageCardProps> = ({ index, text }) => {
  return (
    <div className="flex h-[350px] w-full flex-col rounded-none bg-white px-[30px] md:rounded-[25px]">
      <div className="my-[30px] size-[80px] rounded-[10px] bg-slate-400/90">
        <div className="ml-[20px] pt-[18px] text-7xl text-white">{index}</div>
      </div>
      <div className="pb-[10px]">{text}</div>
    </div>
  );
};

// Chart Component
const Chart: React.FC = () => {
  return (
    <div className="flex justify-center pb-[100px]">
      <div className="h-[350px] w-[1200px] sm:h-[550px] md:h-[900px]">
        <div className="size-full bg-[url('/images/architecture.png')] bg-contain bg-no-repeat" />
      </div>
    </div>
  );
};

// Memoized Components to prevent unnecessary re-renders
const MemoizedCarousel = memo(Carousel);
const MemoizedTitle = memo(Title);
const MemoizedAdvantage = memo(Advantage);
const MemoizedChart = memo(Chart);
