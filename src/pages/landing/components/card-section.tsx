import { ArrowTopRightIcon } from "@/components/icons";
import { useTranslation } from "react-i18next";

const CardSection = () => {

  const { t } = useTranslation();
  const cards = [
    {
      image: "/src/assets/images/card-1.png",
      category: t('bloc_1.cases.0.category'),
      title: t('bloc_1.cases.0.tagline'),
      description: t('bloc_1.cases.0.description'),
      buttonText: t('bloc_1.cases.0.cta'),
    },
    {
      image: "/src/assets/images/card-2.png",
      category: t('bloc_1.cases.1.category'),
      title: t('bloc_1.cases.1.tagline'),
      description: t('bloc_1.cases.1.description'),
      buttonText: t('bloc_1.cases.1.cta'),
    },
    {
      image: "/src/assets/images/card-3.png",
      category: t('bloc_1.cases.2.category'),
      title: t('bloc_1.cases.2.tagline'),
      description: t('bloc_1.cases.2.description'),
      buttonText: t('bloc_1.cases.2.cta'),
    },
  ];

  return (
    <section className="py-10 max-w-[1240px] mx-auto px-[16px] md:px-0]">
      <div className="flex w-full items-center justify-between">
        <div className="hidden md:flex h-[2px] w-[10%] border-2 border-[#BBBBBB]" />
        <h2 className="text-center text-[52px] font-semibold text-primary w-fit">{t('bloc_1.title')}</h2>
        <div className="hidden md:flex h-[2px] w-[10%] border-2 border-[#BBBBBB]" />
      </div>
      <p className="text-center text-secondary text-[24px] font-normal mb-12">{t('bloc_1.subtitle')}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
        {cards.map((card, index) => (
          <div data-aos={'fade-up'} className="bg-white w-full transition-transform duration-500 hover:-translate-y-5" key={index}>
            <img src={card.image} alt={card.title} className="w-full h-[200px] md:h-[240px] lg:h-[355px] xl:h-[397px] object-cover rounded-xl" />
            <div className="mt-4 ">
              <p className="text-[20px] text-primary font-medium">{card.category}</p>
              <h3 className="text-[28px] font-medium text-secondary h-[84px]">{card.title}</h3>
              <p className="text-secondary/60 text-[18px] mt-2">{card.description}</p>
              <button className="mt-4 flex items-center justify-center gap-2 border border-secondary/30 rounded-full px-4 py-2 text-sm font-medium text-secondary hover:bg-[#FFEDE8] transition">
                {card.buttonText} <ArrowTopRightIcon color="#0E9594" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
