import { useTranslation } from "react-i18next";

const HorizontalCardSection = () => {
  const { t } = useTranslation();
  const cards = [
    {
      image: "/src/assets/images/image.jpg",
      category: t('bloc_3.cases.0.category'),
      title: t('bloc_3.cases.0.tagline'),
      description: t('bloc_3.cases.0.description'),

    },
    {
      image: "/src/assets/images/image.jpg",
      category: t('bloc_3.cases.1.category'),
      title: t('bloc_3.cases.1.tagline'),
      description: t('bloc_3.cases.1.description'),
    },
    {
      image: "/src/assets/images/image.jpg",
      category: t('bloc_3.cases.2.category'),
      title: t('bloc_3.cases.2.tagline'),
      description: t('bloc_3.cases.2.description'),
    },
    {
      image: "/src/assets/images/image.jpg",
      category: t('bloc_3.cases.3.category'),
      title: t('bloc_3.cases.3.tagline'),
      description: t('bloc_3.cases.3.description'),
    },
  ];

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto" data-aos="fade-up">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-center text-[52px] font-semibold text-primary w-fit">{t('bloc_3.title')}</h2>
        <a href="#" className="hidden md:flex text-gray-600 hover:text-gray-800  items-center space-x-1">
          <span>{t('bloc_3.more_info')}</span>
          <span>→</span>
        </a>
      </div>
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-hide">
        {cards.map((card, index) => (
          <div key={index} className="flex-none w-80 bg-white shadow-lg rounded-lg overflow-hidden snap-center">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-primary text-[12px] md:text[16px] font-medium">{card.category}</p>
              <h3 className="text-secondary text-[16px] md:text[28px] font-medium">{card.title}</h3>
              <p className="border-l-[1px]  border-[#562C2C] pl-[10px] text-[#562C2C]/80 text-[12px] md:text-[14px] mt-2 line-clamp-2">{card.description}</p>
            </div>
          </div>
        ))}

      </div>
      <button className="md:hidden mt-6 w-full py-2 bg-primary text-white font-medium rounded-full hover:bg-primary-hover transition">
        {t('bloc_3.more_info')}
      </button>
    </section>
  );
};

export default HorizontalCardSection;