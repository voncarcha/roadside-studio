import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import SidebarMobile from "@/components/SidebarMobile";

export default function Home() {
  return (
    <main className="min-h-screen lg:px-[82px] py-[40px] lg:py-[60px] px-[30px] md:px-[60px]">
      <div className="flex max-w-[1276px] mx-auto w-full lg:flex-row flex-col">
        <SidebarMobile />
        <Sidebar />
        <Content />
        <footer className="text-[14px] text-center lg:hidden block">
          <span className="opacity-60">
            © 2025 Roadside Studio. All rights reserved.
          </span>
        </footer>
      </div>
    </main>
  );
}
