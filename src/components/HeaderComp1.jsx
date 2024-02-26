import Image from "next/image";
const HeaderComp1 = ({
  imgsrc1,
  imgsrc2,
  imgsrc3,
  text1,
  text2,
  text3,
  textOnly,
}) => {
  return (
    <div
      className={`${
        textOnly ? "" : ""
      } rounded-[38px] flex-1 flex items-center ${
        textOnly ? "justify-between" : "justify-center"
      } gap-8 bg-[#E1ECEB] `}
    >
      <div
        className={`flex cursor-pointer gap-4
        } items-center`}
      >
        {!textOnly && (
          <Image src={imgsrc1} alt={"imgsrc1"} width={20} height={20} />
        )}
        <p
          className={` font-medium py-4 px-4 text-[#3D5654] ${
            textOnly
              ? "rounded-3xl hover:text-white  hover:bg-[#3D5654] hover:py-3 hover:ml-1 transition-all duration-500 ease-in-out"
              : ""
          }`}
        >
          {text1}
        </p>
      </div>
      {textOnly ? (
        <p
          className={`text-[#3D5654] font-medium cursor-pointer py-4 px-4  ${
            textOnly
              ? "rounded-3xl hover:text-white  hover:bg-[#3D5654] hover:py-3 hover:ml-1 transition-all duration-500 ease-in-out"
              : ""
          }`}
        >
          {text3}
        </p>
      ) : (
        <div className="flex cursor-pointer rounded-full bg-[#3D5654] p-3 justify-center w-10 h-10 gap-4 items-center">
          <Image src={imgsrc2} alt={"imgsrc2"} width={20} height={20} />
        </div>
      )}
      <div
        className={`flex cursor-pointer gap-4 items-center py-4 px-3 text-[#3D5654] ${
          textOnly
            ? "rounded-3xl hover:text-white  hover:bg-[#3D5654] hover:py-3 transition-all duration-500 ease-in-out hover:mr-1"
            : ""
        } `}
      >
        {!textOnly && (
          <Image src={imgsrc3} alt={"imgsrc3"} width={20} height={20} />
        )}
        <p className="  font-medium">{text2}</p>
      </div>
    </div>
  );
};
export default HeaderComp1;
