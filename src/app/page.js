import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Main from "@/components/Main";
export default function Home() {
  return (
    <div className="bg-[#E1ECEB] h-lvh overflow-x-hidden w-lvw flex gap-9">
      <Sidebar />
      <div className=" my-7  mr-5 w-full right-0 ">
        <Header />
        <Main />
      </div>
    </div>
  );
}
