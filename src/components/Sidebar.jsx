import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="h-lvh   bg-[#3D5654] w-72 rounded-r-3xl py-14  ">
      <div className=" bg-[#3D5654] pb-14 ">
        <div className="flex flex-col items-center justify-center ">
          <div className="p-2 border-[1.5px] border-[#D3A019] border-l-[.4px] border-b-[.4px] rounded-full">
            <Image
              className="rounded-full  	"
              src="/images/profile.jpg"
              width={120}
              height={120}
              alt="Picture of the author"
            />
          </div>
          <h1 className="my-3 text-white text-2xl uppercase">Alex Johnson</h1>
          <h2 className="text-white text-sm">alex.johnson@gmail.com</h2>
        </div>
      </div>
      <div className="bg-[#415C5A] rounded-br-2xl ">
        <div className="mb-10">
          <ul className="sidebar-ul ml-6 pt-8">
            <li className="h-[50px] relative rounded-tl-3xl rounded-bl-3xl pl-4 hover:bg-[#E1ECEB] hover:text-[#415C5A] ">
              <Image
                src="/images/icons/home.svg"
                alt="icon"
                width={30}
                height={30}
              />
              DASHBOARD
            </li>
            <li className="h-[50px] rounded-tl-3xl rounded-bl-3xl hover:text-[#415C5A] pl-4 hover:bg-[#E1ECEB]">
              <Image
                src="/images/icons/flight.svg"
                alt="icon"
                width={30}
                color="#D3A019"
                height={30}
              />
              FLIGHTS
            </li>
            <li className="h-[50px] rounded-tl-3xl rounded-bl-3xl hover:text-[#415C5A] pl-4 hover:bg-[#E1ECEB]">
              <Image
                src="/images/icons/wallet.png"
                alt="icon"
                width={30}
                color="#D3A019"
                height={30}
              />
              WALLET
            </li>
            <li className="h-[50px] rounded-tl-3xl rounded-bl-3xl pl-4 hover:text-[#415C5A] hover:bg-[#E1ECEB]">
              <Image
                src="/images/icons/house.png"
                alt="icon"
                width={30}
                color="#D3A019"
                height={30}
              />
              REPORTS
            </li>
            <li className="h-[50px] rounded-tl-3xl rounded-bl-3xl pl-4 hover:text-[#415C5A] hover:bg-[#E1ECEB]">
              <Image
                src="/images/icons/statistics.svg"
                alt="icon"
                width={30}
                color="#D3A019"
                height={30}
              />
              STATISTICS
            </li>
            <li className="h-[50px] rounded-tl-3xl rounded-bl-3xl pl-4 hover:text-[#415C5A] hover:bg-[#E1ECEB]">
              <Image
                src="/images/icons/settings.svg"
                alt="icon"
                width={30}
                color="#D3A019"
                height={30}
              />
              SETTINGS
            </li>
          </ul>
        </div>
        <div className="ml-10 pb-4">
          <h3 className="my-5 text-xs text-[#D3A019] ">ACTIVE USERS</h3>
          <div className="flex mb-3 ">
            <Image
              className="rounded-full users-pics no-ml"
              src="/images/profile.jpg"
              alt="active-pics"
              width={30}
              height={30}
            />
            <Image
              className="rounded-full users-pics "
              src="/images/profile.jpg"
              alt="active-pics"
              width={30}
              height={30}
            />
            <Image
              className="rounded-full users-pics"
              src="/images/profile.jpg"
              alt="active-pics"
              width={30}
              height={30}
            />
            <Image
              className="rounded-full users-pics"
              src="/images/profile.jpg"
              alt="active-pics"
              width={30}
              height={30}
            />
            <div className="rounded-full w-[30px] h-[30px] users-pics flex items-center justify-center bg-[#D3A019] text-white text-[10px]">
              +70
            </div>
          </div>
          <div>
            <Image
              src="/images/sidebar.png"
              width={150}
              height={150}
              alt="sidebar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
