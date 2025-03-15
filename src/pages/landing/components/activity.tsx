import { useTranslation } from "react-i18next";
import Calendar from "./calendar";
import ContactForm from "./form";



export default function ActivityForm() {
  const { t } = useTranslation();

  return (
    <div data-aos="flip-left" className="max-w-[1240px] mx-auto p-6 bg-white shadow-md rounded-lg">

      <div className="flex w-full items-center justify-between">
        <div className="hidden md:flex h-[2px] w-[10%] border-2 border-[#BBBBBB]" />
        <h2 className="text-center text-[52px] font-semibold text-primary w-full">{t('bloc_2_2.title')}</h2>
        <div className="hidden md:flex h-[2px] w-[10%] border-2 border-[#BBBBBB]" />
      </div>

      <Calendar />
      <ContactForm />
    </div>
  );
}
