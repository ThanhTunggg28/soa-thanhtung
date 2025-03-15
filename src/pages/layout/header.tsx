import { ArrowTopRightIcon, MenuIcon, MountainIcon, TargetIcon, WhaleIcon } from "@/components/icons";
import { useTranslation } from "react-i18next";


const Header: React.FC = () => {
  const { t, i18n, } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);

  };


  return (
    <header data-aos="fade-down" className="bg-secondary/70 text-white px-[16px] md:px-[32px] flex items-center justify-between fixed top-0 left-0 w-full z-[1000] h-[48px] md:h-[56px] lg:h-[60px] xl:h-[72px]">
      <div className="max-w-[1240px] flex flex-row items-center justify-between w-full mx-auto">

        <div className="flex items-center justify-between md:w-2/3">
          <span className="font-bold text-[16px]">LOGO SAMPLE</span>
          <ul className="hidden lg:flex justify-between space-x-6 w-2/3">
            {[1, 2, 3, 4].map((item) => (
              <li key={item} className="cursor-pointer hover:underline text-[16px]">{t(`head_menu.${item}`)}</li>
            ))}

          </ul>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <MountainIcon className="cursor-pointer" />
          <WhaleIcon className="cursor-pointer" />
          <TargetIcon className="cursor-pointer" />
          <button className="bg-primary p-2 rounded-full w-[64px] h-[40px] flex items-center justify-end">
            <ArrowTopRightIcon />
          </button>
          <div
            className="flex items-center bg-primary rounded-full w-28 cursor-pointer"
            onClick={() => changeLanguage(i18n.language === "en" ? "fr" : "en")}
          >
            <div
              className={`flex-1 text-center py-1 font-semibold transition-all duration-300 ${i18n.language === "en" ? "bg-[#FFEDE8] rounded-full" : ""
                }`}
            >
              🇬🇧
            </div>
            <div
              className={`flex-1 text-center py-1 font-semibold transition-all duration-300 ${i18n.language !== "en" ? "bg-[#FFEDE8] rounded-full" : ""
                }`}
            >
              🇫🇷
            </div>
          </div>
        </div>
        <div className="flex lg:hidden items-center space-x-4">
          <MenuIcon />
        </div>



      </div>
    </header>
  );
};

export default Header;
