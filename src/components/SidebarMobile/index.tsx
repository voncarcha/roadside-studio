"use client";

import React from "react";
import Image from "next/image";
import { useScrollPosition } from "@/hooks/useScrollPosition";

const SidebarMobile = () => {
  const isScrolledPast300 = useScrollPosition(undefined, 300); // Check if scrolled past 300px

  return (
    <section className={`w-full h-[80px] mb-6 sticky top-[20px] self-start lg:hidden z-50 transition-opacity duration-300 ${isScrolledPast300 ? "block" : "hidden"}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image 
            src="/images/logo.png" 
            alt="logo" 
            width={60} 
            height={60} 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer"
          />
        </div>

        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLScU_EB12I7P8TRlME4ZfUOYp0nbnPEKKc00w2UihEbTtbesVQ/viewform?fbclid=IwY2xjawMuK81leHRuA2FlbQIxMABicmlkETEwY09UZnJYQmQzTnhtamtUAR7BRSordWJ5PXk_mtWMQPs1htXCbws5dyF0xh-zq50EyOvYc2c-NWS4FECHFw_aem_dX_XhJ6xPM1pTDzsTg2yAg"
          className="flex uppercase max-w-[300px] items-center justify-center text-[14px] font-bold hover:bg-gradient-to-l bg-gradient-to-r from-[#9E1717] to-[#7C0D0D] text-[#fff] px-[24px] h-[40px] rounded-full"
        >
          Book now
        </a>
      </div>
    </section>
  );
};

export default SidebarMobile;
