
import bag from "../../assets/brand-bag.png";
import { Footter } from "../home/Footter";
export const Accounts = () => {
  return (
    <>
      <div className="flex m-4 sm:m-12">
        <div className=" w-[118px] xx:w-[140px]  xx:h-[400px]  sm:h-[500px] h-[450px]  sm:w-[150px]  border-2  rounded-md  border-gray-300">
          <div className="m-2 sm:m-5 bg-[#1BAB6E]  rounded-lg  hover:text-black">
            <div className="flex  hover:bg-[#D3F9E9] rounded-md  sm:p-[10px]  ">
              <div>
                <i className=" fa-solid fa-briefcase "></i>
              </div>
              <div className="ml-[10%]">
                <span className="text-xl ">order</span>
              </div>
            </div>
          </div>

          <div className="m-2 sm:m-5 bg-white   hover:text-black">
            <div className="flex  rounded-md  hover:bg-[#D3F9E9] p-2 sm:p-[10px]  ">
              <div>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="ml-[10%]">
                <span className="text-xl ">Address</span>
              </div>
            </div>
          </div>

          <div className="m-2 sm:m-5 bg-white   hover:text-black">
            <div className="flex  rounded-md   hover:bg-[#D3F9E9] mr-3  p-0  sm:p-[10px]  ">
              <div>
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="ml-[10%]">
                <span className="text-xl ">Account Details</span>
              </div>
            </div>
          </div>

          <div className="m-2 sm:m-5 bg-white   hover:text-black">
            <div className="flex  hover:bg-[#D3F9E9] p-[10px]  ">
              <div>
                <i className="fa-solid fa-comment"></i>
              </div>
              <div className="ml-[10%]">
                <span className="text-xl ">Alert</span>
              </div>
            </div>
          </div>

          <div className="m-2 sm:m-5 bg-white   hover:text-black">
            <div className="flex  rounded-md   hover:bg-[#D3F9E9] p-2  sm:p-[10px]  ">
              <div>
                <i className="fa-solid fa-trophy"></i>
              </div>
              <div className="ml-[10%]">
                <span className="text-xl ">chash back</span>
              </div>
            </div>
          </div>

          <div className="m-2 sm:m-5 bg-white   hover:text-black">
            <div className="flex   rounded-md  hover:bg-[#D3F9E9] p-0  sm:p-[10px] ">
              <div>
                <i className="fa-solid fa-right-from-bracket"></i>
              </div>
              <div className="ml-[10%]">
                <span className="text-xl ">Logout</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-[30%]  mt-[10%] text-center">
      
          
            <img src={bag} alt=""  className="ml-[40%]"/>
          <br />

          <div>
            <h1 className="text-2xl font-bold">Hey, it feels empty!</h1>
            <span>There are no orders placed yet. Let’s add some items</span>
          </div>
          <br />

          <div>
            <button className="text-white bg-[#1BAB6E] w-[100px] rounded-md  p-3">
              shop Now
            </button>
          </div>
        </div>
      </div>

      <Footter/>
    </>
  );
};