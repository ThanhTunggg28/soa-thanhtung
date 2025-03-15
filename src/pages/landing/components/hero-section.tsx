import { MountainOutlineIcon, TargetOutlineIcon, WhaleOutlineIcon } from '@/components/icons';
import React from 'react';



const HeroSection: React.FunctionComponent = () => {
  return <div className="relative w-full h-screen overflow-hidden">

    <img src={'/src/assets/images/hero-bg.png'} alt="" className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2" />
    <div className='flex absolute bottom-10 left-1/2 transform -translate-x-1/2 pb-10 w-1/2 justify-between pt-5 border-t border-white/30'>
      <MountainOutlineIcon />
      <WhaleOutlineIcon />
      <TargetOutlineIcon />
    </div>
  </div>;
};

export default HeroSection;
