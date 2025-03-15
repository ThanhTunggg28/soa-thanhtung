import { useTranslation } from "react-i18next";

const ExploreSection = () => {
  const { t } = useTranslation();
  return (
    <div data-aos="flip-up" className="relative w-full  h-[483px] md:h-[400px] lg:h-[500px] flex  justify-center text-center pt-[100px]">
      <div className="absolute inset-0 bg-[url('/images/explore.png')] bg-cover bg-center z-0 bg-no-repeat"></div>
      <div className="relative z-10 px-4 max-w-[650px] mx-auto">
        <span className="text-[24px] font-semibold text-secondary flex flex-col items-center">
          {t('bloc_6.title')} <span className="text-secondary/50">{t('bloc_6.subtitle')}</span>
        </span>
        <p className="mt-4 text-[14px] text-secondary/80">
          {t('bloc_6.text')}
        </p>
        <button className="mt-6 px-10 py-2 bg-primary text-white font-medium rounded-full hover:bg-primary-hover transition">
          {t('bloc_6.button')}
        </button>
      </div>
    </div>
  );
};

export default ExploreSection;
