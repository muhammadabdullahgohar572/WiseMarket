import  Butten   from "../../assets/images/Mobile/banners-351518086.jpeg";
export const Sopphing = () => {
  return (
    <>
      <div className="bg-slate-100 w-[100%]  pt-[7%] mt-[10%]">
        <div className="ml-[5%]">
          <h1 className="font-bold ml-[2%] mb-[5%] text-2xl">Shop By Price</h1>

          <div className=" hidden sm:inline  sm:mt-5  ">

            <button className="font-medium   sm:ml-[1%]  hover:bg-[#1bab6e] inline-flex lg:text-[13px] justify-center hover:text-white hover:bg-Surface_brand active:bg-Surface_brand max-lg:text-[12px] text-black bg-[#D3F9E9] border-0 py-3 px-4 w-max mt-2 focus:outline-none rounded-[8px] text-lg">
              <h4>
                <strong> PKR0 - PKR 25000</strong>
              </h4>
            </button>

            <button className="font-medium sm:ml-[1%] hover:bg-[#1bab6e] inline-flex lg:text-[13px] justify-center hover:text-white hover:bg-Surface_brand active:bg-Surface_brand max-lg:text-[12px] text-black bg-[#D3F9E9] border-0 py-3 px-4 w-max mt-2 focus:outline-none rounded-[8px] text-lg">
              <h4>
                <strong>PKR 25000 - PKR 50000</strong>
              </h4>
            </button>

            <button className="font-medium sm:ml-[1%] hover:bg-[#1bab6e] inline-flex lg:text-[13px] justify-center hover:text-white hover:bg-Surface_brand active:bg-Surface_brand max-lg:text-[12px] text-black bg-[#D3F9E9] border-0 py-3 px-4 w-max mt-2 focus:outline-none rounded-[8px] text-lg">
              <h4>
                <strong>PKR 50000 - PKR 100000</strong>
              </h4>
            </button>

            <button className="font-medium sm:ml-[1%] hover:bg-[#1bab6e] inline-flex lg:text-[13px] justify-center hover:text-white hover:bg-Surface_brand active:bg-Surface_brand max-lg:text-[12px] text-black bg-[#D3F9E9] border-0 py-3 px-4 w-max mt-2 focus:outline-none rounded-[8px] text-lg">
              <h4>
                <strong>PKR 100000 - PKR 200000</strong>
              </h4>
            </button>

            <button className="font-medium sm:ml-[1%] hover:bg-[#1bab6e] inline-flex lg:text-[13px] justify-center hover:text-white hover:bg-Surface_brand active:bg-Surface_brand max-lg:text-[12px] text-black bg-[#D3F9E9] border-0 py-3 px-4 w-max mt-2 focus:outline-none rounded-[8px] text-lg">
              <h4>
                <strong>PKR 200000 - PKR 300000</strong>
              </h4>
            </button>
          </div>

          <div className="  sm:hidden mt-[5%]  ">
          <button className="font-medium mt-[5%] hover:text-white   hover:bg-[#1bab6e] p-[5%] rounded-md  bg-[#D3F9E9] ">
              <h4>
                <strong> PKR0 - PKR 25000</strong>
              </h4>
            </button>
            <br />
            <button className="font-medium mt-[5%] hover:text-white   hover:bg-[#1bab6e] p-[5%] rounded-md  bg-[#D3F9E9] ">
              <h4>
                <strong>PKR 25000 - PKR 50000</strong>
              </h4>
            </button>
            <br />
            <button className="font-medium mt-[5%] hover:text-white   hover:bg-[#1bab6e] p-[5%] rounded-md  bg-[#D3F9E9] ">
              <h4>
                <strong>PKR 50000 - PKR 100000</strong>
              </h4>
            </button>
            <br />
            <button className="font-medium mt-[5%] hover:text-white   hover:bg-[#1bab6e] p-[5%] rounded-md  bg-[#D3F9E9] ">
              <h4>
                <strong>PKR 100000 - PKR 200000</strong>
              </h4>
            </button>
            <br />
            <button className="font-medium mt-[5%] hover:text-white   hover:bg-[#1bab6e] p-[5%] rounded-md  bg-[#D3F9E9] ">
              <h4>
                <strong>PKR 200000 - PKR 300000</strong>
              </h4>
            </button>
          </div>
         
        </div>


          <div className=" sm:w-[100%]  mt-[10%]">

        <img src={Butten} alt="" srcset="" />
          </div>
      </div>
    </>
  );
};
