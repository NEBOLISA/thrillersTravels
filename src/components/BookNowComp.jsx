import Image from "next/image";
import Button from "./Button";
const BookNowComp = ({
  flightLogo,
  fromLoc,
  fromTime,
  flightName,
  duration,
  type,
  toLoc,
  toTime,
  price,
  first,
}) => {
  return (
    <div
      className={`flex items-center justify-between bg-white  px-6 py-9 ${
        first ? "" : "border-t-2"
      } border-dashed border-[#e1eceb]`}
    >
      <div>
        <Image src={flightLogo} alt="flightlogo" width={30} height={30} />
      </div>
      <div className=" text-[#3D5654]">
        <h2 className="font-semibold uppercase text-lg">{fromLoc}</h2>
        <h2 className="text-sm">{fromTime}</h2>
      </div>
      <div>
        <h2 className="text-[#3D5654] text-[8px] uppercase">{flightName}</h2>
        <h2 className="text-[#D3A019] text-sm">{duration}</h2>
        <h2 className="text-[#3D5654] text-sm">{type}</h2>
      </div>
      <div className="text-[#3D5654]">
        <h2 className="font-semibold uppercase text-lg">{toLoc}</h2>
        <h2 className="text-sm">{toTime}</h2>
      </div>
      <div>
        <h2 className="text-[#3D5654] text-sm text-right font-semibold mb-3">
          {price}
        </h2>
        <Button text="BOOK NOW" />
      </div>
    </div>
  );
};
export default BookNowComp;
