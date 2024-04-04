import iphone from "../../assets/images/Herowork/5e90a856c7c8f9000434dd97.png";
import safe from "../../assets/images/Herowork/icon-safe-13.jpg";
import reben from "../../assets/images/brans/822.png"
import cla from "../../assets/images/brans/calendar-icon-clock-meeting-107106062.webp"
import bus from "../../assets/images/brans/bus-education-school-transportation-yellow-transport-illustration-student-child-drive-childhood-school-bus-automobile-study-icon-symbol-travel-back-to-school-car-wheel-safety-free-vector.jpg"
export const Iphone = () => {
  return (
    <>


    
      <div className=" sm:grid sm:grid-cols-2 bg-slate-100  mt-[10%]">
        <div>
          <h2 className="text-black   text-[20px] mt-[10%] ml-[5%] font-bold">
            Hey,{" "}
            <span className="text-[rgb(27,171,110)]">Condition Explained</span>
            <br /> by Wisemarket
            <p className="text-justify text-[13px] font-normal max-md:w-full">
              The mobile phones we offer come in 4<br /> different conditions.
              These conditions are <br />
              <span className="font-semibold">
                Brand New, As New, Good,
              </span>{" "}
              and{" "}
              <span className="font-semibold">
                Fair.
                <br />
              </span>
              Pick your favorite one, depending on <br />
              your price range.
            </p>
          </h2>
        </div>
        <div className=" sm:mt-[0] mt-[10%] ml-[5%] sm:ml-[0%] grid grid-cols-3 ">
          <div className="w-[70%] hover:bg-green-400 h-[70%] hover:border-gray-500  border-gray-400 mt-[10%]  rounded-[50%] border-4 ">
            <img
              src={iphone}
              className="w-[60%] h-[80%] mt-[25%]  ml-[25%] mr-[25%]"
            />

            <div className="border-gray-500 cursor-pointer rounded-lg  hover:bg-[rgb(27,171,110)] text-white w-[100%] bg-gray-400 h-8 ml-[4%] ">
              <div className="ml-[5%]">
                <i class="fa-solid fa-gift"></i>
                <span>Brand New</span>
              </div>
            </div>
          </div>

          <div className="w-[70%] hover:bg-green-400 h-[70%] hover:border-gray-500  border-gray-400 mt-[10%]  rounded-[50%] border-4 ">
            <img
              src={iphone}
              className="w-[60%] h-[80%] mt-[25%]  ml-[25%] mr-[25%]"
            />

            <div className="border-gray-500 cursor-pointer rounded-lg  hover:bg-[rgb(27,171,110)] text-white w-[100%] bg-gray-400 h-8 ml-[4%] ">
              <div className="ml-[5%]">
                <i class="fa-solid fa-diamond"></i>
                <span>Brand New</span>
              </div>
            </div>
          </div>

          <div className="w-[70%] hover:bg-green-400 h-[70%] hover:border-gray-500  border-gray-400 mt-[10%]  rounded-[50%] border-4 ">
            <img
              src={iphone}
              className="w-[60%] h-[80%] mt-[25%]  ml-[25%] mr-[25%]"
            />

            <div className="border-gray-500 cursor-pointer rounded-lg  hover:bg-[rgb(27,171,110)] text-white w-[100%] bg-gray-400 h-8 ml-[4%] ">
              <div className="ml-[5%]">
                <i class="fa-regular fa-thumbs-up"></i>
                <span>Brand New</span>
              </div>
            </div>
          </div>

          <div className="w-[70%]  relative hover:bg-green-400 h-[70%] hover:border-gray-500  border-gray-400 mt-[10%]  rounded-[50%] border-4 ">
            <div className="bg-white  absolute hover:inline hidden ">
              <span className="w-[50%] h-[10%]">
                Brand-New A brand-new device shipped
                <br /> in its box sealed, fully
                <br /> warrantied, and in untouched <br />
                condition in Pakistan
              </span>
            </div>
            <img
              src={iphone}
              className="w-[60%] h-[80%] mt-[25%]  ml-[25%] mr-[25%]"
            />

            <div className="border-gray-500 cursor-pointer rounded-lg  hover:bg-[rgb(27,171,110)] text-white w-[100%] bg-gray-400 h-8 ml-[4%] ">
              <div className="ml-[5%]">
                <i class="fa-solid fa-circle-check"></i>
                <span>Brand New</span>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="ml-[3%] flex mt-[10%]">
            <h1 className="text-xl font-medium">Wisemarket Assured</h1>

            <h1 className="text-green-400"> (Want to know more?)</h1>
          </div>
        </section>
      </div>


      <section className="bg-slate-100">
      
      <div className="grid sm:grid-cols-4">

      <div className="bg-green-200  ml-[3%] mt-[10%] flex p-5">
           <img src={safe} alt="" srcset="" className="w-[20%] h-[100%]" />
      <div className="ml-[8%]">
        <h1 className="text-lg  font-medium">12 Months Free Warranty</h1>
             <a href="" className="text-emerald-600">Only a brand new</a>
      </div>
      </div>

      <div className="bg-green-200  ml-[3%] mt-[10%] flex p-5">
           <img src={reben} alt="" className="text-green-600 w-[20%] h-[100%]" />
      <div className="ml-[8%]">
        <h1 className="text-lg  font-medium">12 Months Free Warranty</h1>
             <a href="" className="text-emerald-600">Only a brand new</a>
      </div>
      </div>

      <div className="bg-green-200  ml-[3%] mt-[10%] flex p-5">
           <img src={cla} alt="" className="text-green-600 w-[20%] h-[50%] mt-[10%]" />
      <div className="ml-[8%]">
        <h1 className="text-lg  font-medium">12 Months Free Warranty</h1>
             <a href="" className="text-emerald-600">Only a brand new</a>
      </div>
      </div>

      <div className="bg-green-200  ml-[3%] mt-[10%] flex p-5">
           <img src={bus} alt="" className="text-green-600 w-[20%] h-[50%] mt-[10%]" />
      <div className="ml-[8%]">
        <h1 className="text-lg  font-medium">12 Months Free Warranty</h1>
             <a href="" className="text-emerald-600">Only a brand new</a>
      </div>
      </div>


      </div>
      

      </section>
    </>
  );
};


