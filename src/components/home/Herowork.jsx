import Gift from "../../assets/images/Herowork/Gift_Box_in_Red_PNG_Clipart-276.png";
export const Herowork = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 h-[300px] lg:h-[170px]  justify-between ml[5%]  sm:p-[2%]">
        <div className="grid sm:grid-cols-2  w-[60%] ml-[20%] mt-[20%] sm:ml-[0%] sm:mt-[0%]">
          <div>
            <h1 className="font-bold text-xl cursor-pointer">Special Offers</h1>
          </div>
          <div>
            <span className="text-[10px]">
              Wisemarket Find Best Of The Best Phones For You Only
            </span>
          </div>
        </div>

        <div className=" flex w-[60%] mt-[5%] sm:m-[0px] sm:ml-[40%] ml-[20%]">
          <div>
            <h1 className="text-base cursor-pointer">ON EVERY PURCHASE</h1>
            <h1 className="font-bold text-xl cursor-pointer">
              + EARN REWARD POINTS
            </h1>
          </div>
          <div className="">
            <img src={Gift} alt="" className="w-[70%] h-[50px] sm:h-[50%]" />
          </div>
        </div>
      </div>
    </>
  );
};
