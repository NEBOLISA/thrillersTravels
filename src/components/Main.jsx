import Image from "next/image";
import BookNowComp from "./BookNowComp";
const Main = () => {
  return (
    <div className="mt-9">
      <div className="flex justify-between items-center">
        <p className="text-[#3D5654] font-medium">RESULT(25)</p>
        <div className="flex gap-3">
          <div className="text-[#3D5654] font-medium bg-white rounded-3xl py-3 px-14 cursor-pointer">
            FILTER
          </div>
          <div className="text-[#3D5654] font-medium bg-white rounded-3xl py-3 px-6 flex gap-3 items-center cursor-pointer">
            TICKET OF CLASS
            <Image
              src="/images/icons/arrow-down.png"
              alt="dropdown"
              height={15}
              width={15}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 my-6">
        <div className="left-main py-4 bg-white rounded-3xl">
          <BookNowComp
            flightLogo={"/images/icons/map-marker.png"}
            fromLoc={"JFL"}
            fromTime={"13:00"}
            flightName={"EMIRATES"}
            duration={"11H 20M"}
            type={"NON-STOP"}
            toLoc={"BOM"}
            toTime={"14:20"}
            price={"$1,254"}
          />
          <BookNowComp
            flightLogo={"/images/icons/map-marker.png"}
            fromLoc={"JFL"}
            fromTime={"13:00"}
            flightName={"EMIRATES"}
            duration={"11H 20M"}
            type={"NON-STOP"}
            toLoc={"BOM"}
            toTime={"14:20"}
            price={"$1,254"}
          />
        </div>

        <div className="bg-[#3D5654] rounded-3xl p-5 right-main">
          <div className="flex justify-between">
            <div className="text-white">
              <p className="text-[10px]">FROM</p>
              <p className="font-normal text-lg">JFK</p>
            </div>
            <div className="text-white ">
              <p className="text-[10px] mt-5">NON-STOP</p>
            </div>
            <div className="text-white">
              <p className="text-[10px]">TO</p>
              <p className="font-normal text-lg">BOM</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Main;
