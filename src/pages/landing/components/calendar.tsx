import { useState } from "react";

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  firstDayOfMonth = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

  const occupiedDays = ['4-2-2025', '28-1-2025', '29-1-2025'];

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) setCurrentYear((prev) => prev - 1);
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) setCurrentYear((prev) => prev + 1);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-[1240px]">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="text-primary hover:text-gray-700">
          {'<'}
        </button>
        <span className="text-lg font-semibold">
          {new Date(currentYear, currentMonth).toLocaleString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={nextMonth} className="text-primary hover:text-gray-700">
          {'>'}


        </button>
      </div>

      <div className="grid grid-cols-7 text-center text-sm font-semibold text-secondary">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="py-2">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array(firstDayOfMonth - 1)
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`} className="`cursor-pointer p-3 text-sm font-medium border rounded-lg text-center bg-gray-100 text-[#999999] bg-[#D7D7D7] border-[#AAAAAA]">{daysInPrevMonth - firstDayOfMonth + i + 2}</div>
          ))}

        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const isOccupied = occupiedDays.includes(`${day}-${currentMonth + 1}-${currentYear}`);

          return (
            <div
              key={day}
              className={`cursor-pointer p-3 text-sm font-medium border rounded-lg text-center ${isOccupied
                ? "bg-gray-100 text-[#999999] border-[#AAAAAA]"
                : "border-primary text-secondary hover:bg-primary-hover hover:text-white "
                }`}
            >
              {day}
            </div>
          );
        })}
        {Array(firstDayOfMonth - 1 + daysInMonth < 35 ? 35 - (firstDayOfMonth - 1 + daysInMonth) : 42 - (firstDayOfMonth - 1 + daysInMonth))
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`} className="`cursor-pointer p-3 text-sm font-medium border rounded-lg text-center bg-gray-100 text-[#999999] bg-[#D7D7D7] border-[#AAAAAA]">{i + 1}</div>
          ))}
      </div>
    </div>
  );
};

export default Calendar;