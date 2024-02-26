const Button = ({ text, search }) => {
  return (
    <div
      className={`${search ? "p-5" : "p-3"} bg-[#D3A019] ${
        search
          ? "py-4 px-4 pl-8 font-semibold"
          : "py-2 px-6 text-[8px] font-semibold"
      } rounded-[38px]   flex items-center justify-center  gap-2 text-white uppercase  cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out`}
    >
      {text}
    </div>
  );
};
export default Button;
