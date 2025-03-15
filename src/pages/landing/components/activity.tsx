import { useState } from "react";
import { useTranslation } from "react-i18next";
import Calendar from "./calendar";
import ContactForm from "./form";

const days = [
  { date: 1, status: "Occupé" },
  { date: 2, status: "Occupé" },
  { date: 3, status: "Libre" },
  { date: 4, status: "Occupé" },
  { date: 5, status: "Libre" },
  { date: 6, status: "Libre" },
  { date: 7, status: "Libre" },
  { date: 8, status: "Libre" },
  { date: 9, status: "Libre" },
  { date: 10, status: "Libre" },
];

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
