import { useTranslation } from "react-i18next";

const ContactForm: React.FC = () => {

  const { t } = useTranslation();

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-[1240px] mx-auto">
      <form className="space-y-4">
        <div className="flex items-center space-x-2">
          <label className="block text-[16px] font-medium text-secondary w-[20%]">{t('bloc_2_2.btn_1.0')}</label>
          <input
            type="text"
            name="name"
            className=" shadow-[0_0_10px_#FFF4F1] transition-all duration-300 mt-1 w-full p-2 border border-[#562C2C]/30 rounded-full focus:ring-[#562C2C] focus:border-[#562C2C]"
            placeholder={t('bloc_2_2.btn_1.1')}
          />
        </div>

        <div className="flex items-center space-x-2">
          <label className="block text-[16px] font-medium text-secondary w-[20%]">{t('bloc_2_2.btn_2.0')}</label>
          <input
            type="email"
            name="email"
            className=" shadow-[0_0_10px_#FFF4F1] mt-1 w-full p-2 border border-[#562C2C]/30 rounded-full focus:ring-[#562C2C] focus:border-[#562C2C]"
            placeholder={t('bloc_2_2.btn_2.1')}
          />
        </div>

        <div className="flex items-center space-x-2">
          <label className="block text-[16px] font-medium text-secondary w-[20%]">{t('bloc_2_2.btn_3')}</label>
          <textarea
            name="message"
            rows={4}
            className="shadow-[0_0_10px_#FFF4F1] mt-1 w-full p-2 border border-[#562C2C]/30 rounded-xl focus:ring-[#562C2C] focus:border-[#562C2C]"
            placeholder={t('bloc_2_2.btn_3')}
          />
        </div>

        <div className="flex items-center space-x-2">
          <label className="block text-[16px] font-medium text-secondary w-[20%]">{t('bloc_2_2.btn_4.0')}</label>
          <label className="flex items-center cursor-pointer space-x-2">
            <span className="text-[#1E88F9] hover:underline">{t('bloc_2_2.btn_4.1')}</span>
            <input type="file" className="hidden" />
            <span className="text-[#ccc]">({t('bloc_2_2.btn_4.2')})</span>
          </label>

        </div>

        <div className="flex justify-end space-x-4">
          <button type="button" className="mt-6 px-10 py-2 bg-white text-secondary border-2 border-[#562C2C]/30 font-medium rounded-full hover:bg-primary-hover transition">
            {t('bloc_2_2.btn_5')}
          </button>


          <button type="submit" className="mt-6 px-10 py-2 bg-primary text-white font-medium rounded-full hover:bg-primary-hover transition">
            {t('bloc_2_2.btn_6')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;