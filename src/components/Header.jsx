"use client";

import { useState } from "react";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import HeaderComp1 from "./HeaderComp1";
import HeaderComp2 from "./HeaderComp2";
import Button from "./Button";

const Header = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    if (date) return format(date, "d MMMM yyyy");
  };

  const handleChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="w-full  bg-white rounded-xl p-4">
      <div className="  gap-4 top-header">
        <HeaderComp1
          imgsrc1={"/images/icons/map-marker.png"}
          imgsrc2={"/images/icons/arrows.svg"}
          imgsrc3={"/images/icons/map-marker.png"}
          text1={"NEW YORK (JFK)"}
          text2={"MUMBAI (BOM)"}
        />
        <HeaderComp2
          selectedDate={selectedDate}
          handleChange={handleChange}
          imgsrc1={"/images/icons/calendar.svg"}
          imgsrc2={"/images/icons/calendar-white.png"}
          text1={formatDate(selectedDate)}
          calendar
        />
        <HeaderComp2
          imgsrc1={"/images/icons/person.svg"}
          imgsrc2={"/images/icons/person-white.png"}
          text1={"2 TRAVELLER"}
        />
      </div>
      <div className=" gap-4 pt-8 top-header">
        <HeaderComp1
          textOnly
          text1={"ONE WAY"}
          text2={"ROUND TRIP"}
          text3={"MULTI CITY"}
        />
        <HeaderComp2
          imgsrc1={"/images/icons/Couch.svg"}
          imgsrc2={"/images/icons/couch-white.png"}
          text1={"FIRST CLASS"}
        />
        <Button text={"search"} search />
      </div>
    </div>
  );
};
export default Header;
