import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer data-aos="fade-up" className="bg-secondary text-white py-6">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-[24px] md:mb-[40px] justify-between">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-[16px]">{t('footer.address.name')}</h2>
          <p className="font-[16px]">{t('footer.address.phone')}</p>
          <p className="font-[16px]">{t('footer.address.location')}</p>
        </div>


        <div className="flex flex-col gap-[12px] items-center text-center w-[60%]">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px] md:gap-[8px] text-white/60 w-full">
            <li>{t('footer.links.0.name')}</li>
            <li>{t('footer.links.1.name')}</li>
            <li>{t('footer.links.2.name')}</li>
            <li>{t('footer.links.3.name')}</li>
            <li>{t('footer.links.4.name')}</li>
            <li>{t('footer.links.5.name')}</li>
            <li>{t('footer.links.6.name')}</li>
            <li>{t('footer.links.7.name')}</li>
          </ul>
        </div>


      </div>
      <div className="max-w-[1240px] mx-auto flex flex-col gap-[12px] items-center text-center md:flex-row-reverse md:justify-between md:items-center md:border-t border-white/30 w-full md:pt-[24px]">
        <div className="text-center">
          <div className="flex justify-center gap-3 mt-[32px] md:mt-0">
            <div className="cursor-pointer bg-primary p-[4px] rounded-full flex items-center justify-center">
              <FacebookIcon className="" />
            </div>
            <div className="cursor-pointer bg-primary p-[4px] rounded-full flex items-center justify-center">
              <InstagramIcon className="" />
            </div>
            <div className="cursor-pointer bg-primary p-[4px] rounded-full flex items-center justify-center">
              <YoutubeIcon className="" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/30 w-full pt-[24px] md:border-t-0 md:pt-0 flex justify-center md:justify-start">
          <p className="w-fit text-[14px] font-normal">© BASIC 2024</p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;