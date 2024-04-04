

import safe from "../../assets/images/Herowork/icon-safe-13.jpg";
import reben from "../../assets/images/brans/822.png";
import cla from "../../assets/images/brans/calendar-icon-clock-meeting-107106062.webp";
import bus from "../../assets/images/brans/bus-education-school-transportation-yellow-transport-illustration-student-child-drive-childhood-school-bus-automobile-study-icon-symbol-travel-back-to-school-car-wheel-safety-free-vector.jpg";

export const Last =()=>{
    return(
        <>    
         <div className="sm:ml-[0px] ml-[5%] xx:ml-[5%] grid sm:grid-cols-4 w-[95%] mt-[10%]">

         
               <div className="w-[100%] sm:mt-[0%] mt-[10%]"  >
                   <img
                     src={safe}
                className="text-green-600 w-[20%]  h-[50%] sm:ml-[35%] ml-[25%] "
               />
                   <div className="m-[6%]">
                   <h1 className="text-lg font-semibold">12 Months Free Warranty</h1>
                   <h1>Only for brand phones</h1>
                   </div>
                 </div>

                 <div className="w-[100%] sm:mt-[0%] mt-[10%]"   >
                   <img
                     src={reben}
                className="text-green-600 w-[20%] h-[50%] sm:ml-[35%] ml-[25%] "
               />
                   <div className="m-[6%]">
                   <h1 className="text-lg font-semibold">Beast Price Guarantee</h1>
                   <h1>some the lowest price that you'll find</h1>
                   </div>
                 </div>

                 <div className="w-[100%] sm:mt-[0%] mt-[10%]"  >
                   <img
                     src={cla}
                className="text-green-600 w-[30%] h-[50%] sm:ml-[35%] ml-[25%] "
               />
                   <div className="m-[6%]">
                   <h1 className="text-lg font-semibold">12 Months Free Warranty</h1>
                   <h1>Only for brand phones</h1>
                   </div>
                 </div>

                 <div className="w-[100%] sm:mt-[0%] mt-[10%]"  >
                   <img
                     src={bus}
                className="text-green-600 w-[30%] h-[50%] sm:ml-[35%] ml-[25%]"
               />
                   <div className="m-[6%]">
                   <h1 className="text-lg font-semibold">12 Months Free Warranty</h1>
                   <h1>Only for brand phones</h1>
                   </div>
                 </div>
                 </div>

        </>
    )
}

