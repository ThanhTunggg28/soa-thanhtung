import { MountainOutlineIcon, TargetOutlineIcon, WhaleOutlineIcon } from "@/components/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const markers = [
  { id: 0, x: 35, y: 45, icon: "/images/map-pin-1.png", image: <MountainOutlineIcon className="cursor-pointer w-6 h-6" color="#562C2C" /> },
  { id: 1, x: 55, y: 60, icon: "/images/map-pin-2.png", image: <WhaleOutlineIcon className="cursor-pointer w-6 h-6" color="#562C2C" /> },
  { id: 2, x: 70, y: 30, icon: "/images/map-pin-3.png", image: <TargetOutlineIcon className="cursor-pointer w-6 h-6" color="#562C2C" /> },
];


export default function MapSection() {
  const { t } = useTranslation();

  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveMarker(id);
  };

  const resetMap = () => {
    setActiveMarker(null);
  };

  return (
    <section data-aos="zoom-in-down" className="relative w-full py-10 px-6">
      <div className="absolute inset-0 bg-[url('/images/bg-map.png')] bg-cover bg-center z-0"></div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-[16px] md:px-0">
        <div className="flex w-full items-center justify-between">
          <div className="hidden md:flex h-[2px] w-[10%] border-2 border-[#BBBBBB]" />
          <h2 className="text-center text-[52px] font-semibold text-primary w-fit">{t('bloc_2.title')}</h2>
          <div className="hidden md:flex h-[2px] w-[10%] border-2 border-[#BBBBBB]" />
        </div>

        <div className="flex justify-center space-x-4 my-4 flex-wrap gap-4">
          {markers.map((marker) => (
            <button
              key={marker.id}
              className={`flex items-center gap-2 px-4 py-2  border-[1.5px] border-[#F2542D80] rounded-full ${activeMarker === marker.id ? "bg-primary text-white" : "bg-[#FAFAFA]  text-secondary"
                }`}
              onClick={() => handleClick(marker.id)}
            >
              {marker.image}
              {t(`bloc_2.cases.${marker.id}`)}
            </button>
          ))}

        </div>

        <div

          className="relative w-full max-w-[1240px] mx-auto h-[400px] md:h-[698px] overflow-hidden rounded-lg bg-no-repeat"
          style={{
            backgroundImage: `url('/images/map.png')`,
            backgroundSize: activeMarker !== null ? "500%" : 'cover',
            backgroundPosition: activeMarker !== null
              ? `${markers[activeMarker].x}% ${markers[activeMarker].y}%`
              : "center",
            transition: "background-size 0.5s ease, background-position 0.5s ease",
          }}
        >
          <button
            className="px-4 py-2 text-secondary border-[1.5px] border-[#F2542D80] rounded-full bg-[#FAFAFA] absolute top-4 left-4"
            onClick={resetMap}
          >
            Emplacement
          </button>
          {markers.map((marker) => (
            <div
              key={marker.id}
              className={`absolute w-6 h-6 transition-opacity ${activeMarker === null || activeMarker === marker.id ? "opacity-100" : "opacity-0"
                }`}
              style={{
                top: `${marker.y}%`,
                left: `${marker.x}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <img src={marker.icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}