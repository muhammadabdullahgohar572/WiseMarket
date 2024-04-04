import { useEffect, useState } from "react";
import Slider from "react-slick";
import items1 from "../../assets/images/Middle/faster-fus-640-power-strip-extension-with-pd-3-qc3-0-usb-ports-82.webp";
import items2 from "../../assets/images/Middle/remax-rc-c018-15w-3-in-1-fast-charging-cable-40.webp";
import items3 from "../../assets/images/Middle/remax-rpp-129-22-5w-pd-qc-power-bank-20000mah-50.webp";
import items4 from "../../assets/images/Middle/remax-rpp-535-22-5w-power-bank-20000mah-64.webp";

const Middle=()=> {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  });
 
  const [blueth,setblue]=useState([])

  const blue=()=>{
    fetch("http://localhost:5000/getdata")
    .then((res)=>res.json())
    .then((data)=> setblue(data))
  }
useEffect(()=>{
  blue()
},[])

  
    return (
      <div className="w-[91%] sm:w-[95%] ml-[2%]  mt-[10%]">
        <Slider {...settings}>
          {blueth.map((items, index) => {
            return (
              <>
                <div key={index} className="shadow-2xl ml-[9%]   cursor-pointer h-[300px] xx:h-[280px]  xs:h-[328px] md:h-[365px] border border-[#c7c7c7] py-2 sm:w-72  rounded-[4px]">
                  <div className="flex items-center justify-between px-1">
                    <div className="relative w-12 h-8 overflow-hidden">
                      <i className="fa fa-tag text-[34px] text-red-600 rotate-[134deg]"></i>
                      <span className="absolute top-[10px] left-2 text-[11px] font-semibold text-white">
                        {items.person}
                      </span>{" "}
                    </div>
                    <div>
                      <i className="fa fa-heart text-[#1BAB6E] hover:bg-black p-[5px] hover:rounded-md transition-[bg] duration-100"></i>
                    </div>
                  </div>
                  <div className="w-full h-20 xs:h-28 md:h-48">
                    <img
                      src={items.imgpath}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-[105px]">
                    <div className="px-2">
                      <p className="text-[10px] text-[#999999] h-[15px]">Red</p>
                      <h5 className="text-sm font-bold truncate text-ellipsis max-h-5 max-w-[150px] md:max-w-[280px]">
                        {items.name}
                      </h5>
                    </div>
                    <div className="bg-[#fafafa] px-2">
                      <div>
                        <i className="fa fa-star text-[#1bab6e] text-[10px]">
                          <span className="text-[#9e9e9e] px-1">(0)</span>
                        </i>
                        <span className="text-[#9e9e9e] text-[10px]">
                          {items.Dlevery}
                        </span>
                      </div>
                      <div className="flex items-center md:items-start">
                        <h3 className="font-bold">pkR {items.Discount}</h3>
                        <span className="text-xs text-[#707070] mx-3">
                          <del>{items.Discount} </del>
                        </span>
                      </div>
                      <div className="my-0.5  md:block">
                        <button className="text-center w-full bg-[#1bab6e] hover:bg-[#32996e] text-white font-semibold rounded-md py-2 transition-all duration-200">
                          <i className="fa fa-shopping-cart"></i> Add TO Chat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    );
  }

  export default Middle

