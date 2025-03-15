import { AuthenIcon, ConfortIcon, DisverIcon, PersonnalityIcon, RespectIcon } from "@/components/icons";
import { useTranslation } from "react-i18next";

const ExperienceSection = () => {
  const { t } = useTranslation();
  const features = [
    { icon: <AuthenIcon />, title: "Authenticité" },
    { icon: <RespectIcon />, title: "Respect" },
    { icon: <DisverIcon />, title: "Diversité" },
    { icon: <PersonnalityIcon />, title: "Personnalisation" },
    { icon: <ConfortIcon />, title: "Confort" },
  ];

  return (
    <section data-aos="zoom-in-up" className="py-10 max-w-[1240px] mx-auto flex flex-col gap-8 items-center px-[16px] md:px-0]">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
        <div className="flex flex-col  justify-center w-full md:w-[60%]">
          <span className="text-start text-24px md:text-[52px] text-primary w-fit font-bold  uppercase">
            {t('bloc_4.title')}<span className="text-primary/60">{` ${t('bloc_4.subtitle')}`}</span>
          </span>
          <div className="flex flex-row items-start gap-[10px] md:gap-[30px] justify-center w-full">
            <div className="flex h-[2px] w-[10%] border-2 border-[#BBBBBB] mt-[25px] md:mt-[35px]" />
            <div className="flex flex-col items-center justify-center w-full">
              <h3 className="mt-4 text-[16px] md:text-[28px] font-normal text-secondary w-full">{`${t('bloc_4.text_title')}`}</h3>
              <p className="mt-2 text-[12px] md:text-[18px] font-normal text-secondary/60 leading-relaxed">{`${t('bloc_4.text')}`}</p>
            </div>
          </div>
        </div>
        <img
          src="/images/ice-cream.png"
          alt="Ice Cream"
          className="rounded-lg shadow-lg w-full md:w-[40%]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 w-full justify-items-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center justify-items-center">

            <div className="cursor-pointer bg-[#0E9594] p-[4px] rounded-full flex items-center justify-center">
              {feature.icon}
            </div>
            <p className="mt-2 font-semibold">{feature.title}</p>
            <p className="text-gray-500 text-xs">Sous-titre</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
