"use client";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const HeaderComp2 = ({
  imgsrc1,
  calendar,
  text1,
  selectedDate,
  handleChange,
}) => {
  return (
    <div
      className={`
         "py-4  rounded-[38px]  flex items-center  justify-center gap-2 bg-[#E1ECEB]`}
    >
      <div className="flex cursor-pointer gap-2 items-center">
        {calendar ? (
          <>
            <label htmlFor="dater" className="cursor-pointer">
              <Image src={imgsrc1} alt="datepicker" width={20} height={20} />
            </label>
            <DatePicker
              className="hidden"
              id="dater"
              selected={selectedDate}
              onChange={handleChange}
              dateFormat="dd MMMM yyy"
              //
            />
          </>
        ) : (
          <Image src={imgsrc1} alt={"imgsrc1"} width={20} height={20} />
        )}

        <p className="text-[#3D5654] font-medium">{text1}</p>
      </div>
    </div>
  );
};
export default HeaderComp2;
