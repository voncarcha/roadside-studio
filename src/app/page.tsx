import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

export default function Home() {
  return (
    <main className="min-h-screen px-[82px] py-[60px]">
      <div className="flex max-w-[1276px] mx-auto w-full">
        <Sidebar />
        <Content />
      </div>
    </main>
  );
}
