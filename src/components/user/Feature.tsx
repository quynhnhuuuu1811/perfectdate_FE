"use client"
import { useState } from "react";

interface FeatureProps {
  text: string;
  hoverText?: string; 
}

export default function Feature({ text, hoverText = "Đoạn text mới" }: FeatureProps) {
  const [displayText, setDisplayText] = useState(text);

  return (
    <div
      className="flex items-center justify-center border-2 border-darkRed rounded-[10px] px-6 py-6 
                 w-full h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                 text-darkRed hover:bg-lightRed hover:text-white transition-all duration-3000 ease-out"
      onMouseEnter={() => setDisplayText(hoverText)}
      onMouseLeave={() => setDisplayText(text)}
    >
      <h3 className="text-center font-playfair-regular hover:font-montserrat-regular hover:text-xs">{displayText}</h3>
    </div>
  );
}
