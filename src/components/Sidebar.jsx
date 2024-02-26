"use client";
import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");
  const setMenuItem = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <div className="h-lvh   bg-[#3D5654] w-72 rounded-r-3xl py-14  ">
      <div className=" bg-[#3D5654] pb-14 ">
        <div className="flex flex-col items-center justify-center ">
          <div className="p-2 h-32 w-32  border-[1.5px] border-[#D3A019] border-l-[.4px] border-b-[.4px] rounded-full">
            <Image
              className="rounded-full "
              src="/images/profile.jpg"
              width={120}
              height={120}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
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
            <li
              onClick={() => setMenuItem("dashboard")}
              className={`${
                selectedMenu === "dashboard"
                  ? "selected h-[50px] relative rounded-tl-3xl rounded-bl-3xl pl-4 "
                  : " h-[50px] text-white relative rounded-tl-3xl rounded-bl-3xl pl-4 "
              }`}
            >
              <Image
                src="/images/icons/home.svg"
                alt="icon"
                width={30}
                height={30}
              />
              DASHBOARD
            </li>
            <li
              onClick={() => setMenuItem("flights")}
              className={`${
                selectedMenu === "flights"
                  ? "selected h-[50px] relative rounded-tl-3xl rounded-bl-3xl pl-4 "
                  : " h-[50px] text-white relative rounded-tl-3xl rounded-bl-3xl pl-4 "
              }`}
            >
              <Image
                src="/images/icons/flight.svg"
                alt="icon"
                width={30}
                color="#D3A019"
                height={30}
              />
              FLIGHTS
            </li>
            <li
              onClick={() => setMenuItem("wallet")}
              className={`${
                selectedMenu === "wallet"
                  ? "selected h-[50px] relative rounded-tl-3xl rounded-bl-3xl pl-4 "
                  : " h-[50px] text-white relative rounded-tl-3xl rounded-bl-3xl pl-4 "
              }`}
            >
              <Image
                src="/images/icons/wallet.png"
                alt="icon"
                width={30}
                color="#D3A019"
                height={30}
              />
              WALLET
            </li>
            <li
              onClick={() => setMenuItem("reports")}
              className={`${
                selectedMenu === "reports"
                  ? "selected h-[50px] relative rounded-tl-3xl rounded-bl-3xl pl-4 "
                  : " h-[50px] text-white relative rounded-tl-3xl rounded-bl-3xl pl-4 "
              }`}
            >
              <Image
                src="/images/icons/reports.png"
                alt="icon"
                width={30}
                color="#D3A019"
                height={30}
              />
              REPORTS
            </li>
            <li
              onClick={() => setMenuItem("statistics")}
              className={`${
                selectedMenu === "statistics"
                  ? "selected h-[50px] relative rounded-tl-3xl rounded-bl-3xl pl-4 "
                  : " h-[50px] text-white relative rounded-tl-3xl rounded-bl-3xl pl-4 "
              }`}
            >
              <Image
                src="/images/icons/statistics.svg"
                alt="icon"
                width={30}
                color="#D3A019"
                height={30}
              />
              STATISTICS
            </li>
            <li
              onClick={() => setMenuItem("settings")}
              className={`${
                selectedMenu === "settings"
                  ? "selected h-[50px] relative rounded-tl-3xl rounded-bl-3xl pl-4 "
                  : " h-[50px] text-white relative rounded-tl-3xl rounded-bl-3xl pl-4 "
              }`}
            >
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
            <div className=" no-ml h-[30px] w-[30px]  rounded-full">
              <Image
                className="rounded-full  "
                src="/images/profile.jpg"
                alt="active-pics"
                width={30}
                height={30}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className=" users-pics h-[30px] w-[30px]  rounded-full">
              <Image
                className="rounded-full  "
                src="/images/profile.jpg"
                alt="active-pics"
                width={30}
                height={30}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className=" users-pics h-[30px] w-[30px]  rounded-full">
              <Image
                className="rounded-full "
                src="/images/profile.jpg"
                alt="active-pics"
                width={30}
                height={30}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className=" users-pics h-[30px] w-[30px]  rounded-full">
              <Image
                className="rounded-full "
                src="/images/profile.jpg"
                alt="active-pics"
                width={30}
                height={30}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
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
