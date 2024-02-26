const PriceSlider = () => {
  return (
    <div>
      <div className="relative mt-5 h-[1px] rounded-lg w-full bg-[#E1ECEB] ">
        <div className=" left-slider w-5 h-5 cursor-pointer left-6 absolute -top-2 rounded-full bg-[#D3A019]">
          <div className=" absolute top-8 -left-6 rounded-3xl price-tag1 px-3 py-1 bg-[#D3A019] text-white text-sm ">
            $7,500
          </div>
        </div>
        <div className="w-5 h-5 right-slider absolute -top-2 rounded-full right-6 cursor-pointer bg-[#D3A019]">
          <div className=" price-tag2 absolute top-8 -right-6 rounded-3xl price-tag px-3 py-1 bg-[#D3A019] text-white text-sm ">
            $7,500
          </div>
        </div>
      </div>
    </div>
  );
};
export default PriceSlider;
