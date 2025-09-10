import React from "react";
import Image from "next/image";
import LogoText from "./LogoText";
import IconFb from "./IconFb";
import IconPin from "./IconPin";
import IconCheck from "./IconCheck";
import IconPhone from "./IconPhone";

const Sidebar = () => {
  return (
    <aside className="w-[320px] sticky top-[60px] self-start">
      <header>
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={100} height={100} />
          <LogoText />
        </div>
        <article className="mt-[42px]">
          <h1 className="text-[21px] max-w-[320px]">
            Looking for the perfect cozy place to jam, and rehearse with your
            friends?
          </h1>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScU_EB12I7P8TRlME4ZfUOYp0nbnPEKKc00w2UihEbTtbesVQ/viewform?fbclid=IwY2xjawMuK81leHRuA2FlbQIxMABicmlkETEwY09UZnJYQmQzTnhtamtUAR7BRSordWJ5PXk_mtWMQPs1htXCbws5dyF0xh-zq50EyOvYc2c-NWS4FECHFw_aem_dX_XhJ6xPM1pTDzsTg2yAg"
            className="flex uppercase max-w-[300px] items-center justify-center mt-[24px] text-[14px] font-bold hover:bg-gradient-to-l bg-gradient-to-r from-[#9E1717] to-[#7C0D0D] text-[#fff] px-[16px] h-[40px] rounded-full"
          >
            Book now and make some noise!
          </a>
          <h2 className="text-[16px] mt-11">
            Your cozy space for music, creativity, and good vibes.
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <IconCheck />
              Play with quality instruments
            </li>
            <li className="flex items-center gap-2">
              <IconCheck />
              Enjoy a spacious setup
            </li>
            <li className="flex items-center gap-2">
              <IconCheck />
              All at affordable session rates
            </li>
          </ul>
          <nav className="mt-[42px] flex flex-col gap-2">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100068199806701"
              className="cursor-pointer flex gap-2 hover:text-[#df5752] transition-colors duration-200"
            >
              <span className="w-[24px] flex items-center justify-center">
                <IconFb />
              </span>
              <span>Say Hi on Facebook</span>
            </a>
            <a
              href="tel:+639458223807"
              className="cursor-pointer flex gap-2 hover:text-[#df5752] transition-colors duration-200"
            >
              <span className="w-[24px] flex items-center justify-center">
                <IconPhone />
              </span>
              <span>+63 945 822 3807</span>
            </a>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Roadside+band+rehearsal+studio/@14.2897791,120.9096867,17z/data=!3m1!4b1!4m6!3m5!1s0x3397d5002e8d1a7d:0x9783d084a43e930f!8m2!3d14.2897791!4d120.9122616!16s%2Fg%2F11wxstgv24"
              className="cursor-pointer flex gap-2 hover:text-[#df5752] transition-colors duration-200"
            >
              <span className="w-[24px] flex items-center justify-center">
                <IconPin />
              </span>
              <span>General Trias, Cavite</span>
            </a>
          </nav>
        </article>
      </header>
      <footer className="mt-[62px] text-[14px]">
        <span className="opacity-60">
          © 2025 Roadside Studio. All rights reserved.
        </span>
      </footer>
    </aside>
  );
};

export default Sidebar;
