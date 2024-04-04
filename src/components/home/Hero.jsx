
import Slider from 'react-slick';

import Heroimg2 from "../../assets/images/Hero/inventory_26299.webp";
import Heroimg3 from "../../assets/images/Hero/inventory_54851.webp"
import Heroimg4 from "../../assets/images/Hero/inventory_59234.webp"
import Heroimg5 from "../../assets/images/Hero/inventory_95403.webp"
import Heroimg6 from "../../assets/images/Hero/inventory_97883.webp"
import Heroimg7 from "../../assets/images/Hero/inventory_98309.webp"
import { useEffect, useState } from 'react';

const PauseOnHover = () => {
  // const products = [
  //   {
  //     discount: 5,
  //     img: Heroimg2,
  //     color: "Brand-New-white ",
  //     name: "Realme Air 3 Neo Wireless E..",
  //     rating: 0,
  //     actprice: 9899,
  //     disprice: 1090000000,
  //   },
  //   {
  //     discount: "08",
  //     img: Heroimg3,
  //     color: "Active-Black-Brand-New",
  //     name: "Brand wacth",
  //     rating: 0,
  //     actprice: 6999,
  //     disprice: 8899,
  //   },
  //   {
  //     discount: 26,
  //     img: Heroimg4,
  //     color: "Pink",
  //     name: "Realme Buds",
  //     rating: 0,
  //     actprice: 3599,
  //     disprice: 6499,
  //   },
  //   {
  //     discount: 10,
  //     img: Heroimg5,
  //     color: "Ice-Blue",
  //     name: "Realme Buds Air 2 Neo",
  //     rating: 0,
  //     actprice: 5399,
  //     disprice: 5999,
  //   },
  //   {
  //     discount: 26,
  //     img: Heroimg6,
  //     color: "Ice-Blue",
  //     name: "Yaar Neon Sign",
  //     rating: 0,
  //     actprice: 2799,
  //     disprice: 3799,
  //   },
  //   {
  //     discount: "08",
  //     img: Heroimg7,
  //     color: "Red",
  //     name: "You & Me Neon Light",
  //     rating: 0,
  //     actprice: 5499,
  //     disprice: 5999,
  //   },
  // ];

  const [blueth,setblue]=useState([])

  const blue=()=>{
    fetch("http://localhost:5000/getdata")
    .then((res)=>res.json())
    .then((data)=> setblue(data))
  }
useEffect(()=>{
  blue()
},[])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    margin: 20,
    pauseOnHover: true,
  };

  // imgpath:
  //       "https://media.wisemarket.com.pk/product/baseus-super-mini-inflator-pump-97.webp",
  //     priice: "pkR  14444",
  //     Discount: "PKR 44444",
  //     person: 6,
  //     name: "WM Travel Baby Seat Carry...",
  //     button: "Add to Cart",
  //     Dlevery: "Free Shipping",
  return (
    <div className="sm:m-[3%] w-[91%] sm:w-[90%]">
      <Slider {...settings}>
        {blueth.map((item) => (
          <div key={item.name} className="your-class-name">
           
  <div className=" h-[330px] xx:h-[281px]  ml-[10%] w-[90%] gap-4 xs:h-[308px] md:h-[365px] border border-[#c7c7c7] py-2 rounded-[4px]">
    <div className="flex items-center justify-between px-1">
      <div className="relative w-12 h-8 overflow-hidden">
        <i className="fa fa-tag text-[34px] text-red-600 rotate-[134deg]"></i>
        <span className="absolute top-[10px] left-2 text-[11px] font-semibold text-white">
          {`${item.person}`}
        </span>
      </div>
      <div>
        <i className="fa fa-heart text-[#1BAB6E] hover:bg-black p-[5px] hover:rounded-md transition-[bg] duration-100"></i>
      </div>
    </div>
    <div className="w-full h-20 xs:h-28 md:h-48">
      <img
        src={item.imgpath}
        alt={`${item.name} Image`}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-full h-[105px]">
      <div className="px-2">
        <p className="text-[10px] text-[#999999] h-[15px]">
          {item.color}
        </p>
        <h5 className="text-sm font-bold truncate text-ellipsis max-h-5 max-w-[150px] md:max-w-[280px]">
          {item.name}
        </h5>
      </div>
      <div className="bg-[#fafafa] px-2">
        <div>
          <i className="fa fa-star text-[#1bab6e] text-[10px]">
            <span className="text-[#9e9e9e] px-1">{`( ${item.person} )`}</span>
          </i>
          <span className="text-[#9e9e9e] text-[10px]">
           {item.Dlevery}
          </span>
        </div>
        <div className="flex items-center md:items-start">
          <h3 className="font-bold">{`PKR ${item.person}`}</h3>
          <span className="text-xs text-[#707070] mx-3">
            <del>{`PKR ${item.Discount}`} </del>
          </span>
        </div>
        <div className="my-0.5   md:block">
          <button className="text-center w-full bg-[#1bab6e] hover:bg-[#32996e] text-white font-semibold rounded-md py-2 transition-all duration-200">
            <i className="fa fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PauseOnHover;



  // <div className=" h-[330px] xx:h-[281px]  ml-[10%] w-[90%] gap-4 xs:h-[308px] md:h-[365px] border border-[#c7c7c7] py-2 rounded-[4px]">
  //   <div className="flex items-center justify-between px-1">
  //     <div className="relative w-12 h-8 overflow-hidden">
  //       <i className="fa fa-tag text-[34px] text-red-600 rotate-[134deg]"></i>
  //       <span className="absolute top-[10px] left-2 text-[11px] font-semibold text-white">
  //         {`${item.discount}`}
  //       </span>
  //     </div>
  //     <div>
  //       <i className="fa fa-heart text-[#1BAB6E] hover:bg-black p-[5px] hover:rounded-md transition-[bg] duration-100"></i>
  //     </div>
  //   </div>
  //   <div className="w-full h-20 xs:h-28 md:h-48">
  //     <img
  //       src={item.img}
  //       alt={`${item.name} Image`}
  //       className="w-full h-full object-cover"
  //     />
  //   </div>
  //   <div className="w-full h-[105px]">
  //     <div className="px-2">
  //       <p className="text-[10px] text-[#999999] h-[15px]">
  //         {item.color}
  //       </p>
  //       <h5 className="text-sm font-bold truncate text-ellipsis max-h-5 max-w-[150px] md:max-w-[280px]">
  //         {item.name}
  //       </h5>
  //     </div>
  //     <div className="bg-[#fafafa] px-2">
  //       <div>
  //         <i className="fa fa-star text-[#1bab6e] text-[10px]">
  //           <span className="text-[#9e9e9e] px-1">{`( ${item.rating} )`}</span>
  //         </i>
  //         <span className="text-[#9e9e9e] text-[10px]">
  //           Free Shipping
  //         </span>
  //       </div>
  //       <div className="flex items-center md:items-start">
  //         <h3 className="font-bold">{`PKR ${item.actprice}`}</h3>
  //         <span className="text-xs text-[#707070] mx-3">
  //           <del>{`PKR ${item.disprice}`} </del>
  //         </span>
  //       </div>
  //       <div className="my-0.5   md:block">
  //         <button className="text-center w-full bg-[#1bab6e] hover:bg-[#32996e] text-white font-semibold rounded-md py-2 transition-all duration-200">
  //           <i className="fa fa-shopping-cart"></i> Add to Cart
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>

{
  /* <div className=" my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
{prod.map((item) => {
  return (
    <Link to={item.name}>
      <div className="h-200px xs:h-[238px] md:h-[365px] border border-[#c7c7c7] py-2 rounded-[4px]">
        <div className="flex items-center justify-between px-1">
          <div className="relative w-12 h-8 overflow-hidden">
            <i className="fa fa-tag text-[34px] text-red-600 rotate-[134deg]"></i>
            <span className="absolute top-[10px] left-2 text-[11px] font-semibold text-white">
              {`${item.discount}`}
            </span>
          </div>
          <div>
            <i className="fa fa-heart text-[#1BAB6E] hover:bg-black p-[5px] hover:rounded-md transition-[bg] duration-100"></i>
          </div>
        </div>
        <div className="w-full h-20 xs:h-28 md:h-48">
          <img
            src={item.img}
            alt={`${item.name} Image`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[105px]">
          <div className="px-2">
            <p className="text-[10px] text-[#999999] h-[15px]">
              {item.color}
            </p>
            <h5 className="text-sm font-bold truncate text-ellipsis max-h-5 max-w-[150px] md:max-w-[280px]">
              {item.name}
            </h5>
          </div>
          <div className="bg-[#fafafa] px-2">
            <div>
              <i className="fa fa-star text-[#1bab6e] text-[10px]">
                <span className="text-[#9e9e9e] px-1">{`( ${item.rating} )`}</span>
              </i>
              <span className="text-[#9e9e9e] text-[10px]">
                Free Shipping
              </span>
            </div>
            <div className="flex items-center md:items-start">
              <h3 className="font-bold">{`PKR ${item.actprice}`}</h3>
              <span className="text-xs text-[#707070] mx-3">
                <del>{`PKR ${item.disprice}`} </del>
              </span>
            </div>
            <div className="my-0.5 hidden md:block">
              <button className="text-center w-full bg-[#1bab6e] hover:bg-[#32996e] text-white font-semibold rounded-md py-2 transition-all duration-200">
                <i className="fa fa-shopping-cart"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
})}
</div> */
}

{
  /* <div className="h-[330px]  cursor-pointer xx:h-[280px]  shadow-2xl  xs:h-[328px] md:h-[365px] border border-[#c7c7c7] py-2 rounded-[4px]">
<div className="flex items-center justify-between px-1">
  <div className="relative w-12 h-8 overflow-hidden">
    <i className="fa fa-tag text-[34px] text-red-600 rotate-[134deg]"></i>
    <span className="absolute top-[10px] left-2 text-[11px] font-semibold text-white">
      6%{" "}
    </span>{" "}
  </div>
  <div>
    <i className="fa fa-heart text-[#1BAB6E] hover:bg-black p-[5px] hover:rounded-md transition-[bg] duration-100"></i>
  </div>
</div>
<div className="w-full h-20 xs:h-28 md:h-48">
  <img src={Heroimg2} className="w-full h-full object-cover" />
</div>
<div className="w-full h-[105px]">
  <div className="px-2">
    <p className="text-[10px] text-[#999999] h-[15px]">Red</p>
    <h5 className="text-sm font-bold truncate text-ellipsis max-h-5 max-w-[150px] md:max-w-[280px]">
      WM Travel Baby Seat Carry...
    </h5>
  </div>
  <div className="bg-[#fafafa] px-2">
    <div>
      <i className="fa fa-star text-[#1bab6e] text-[10px]">
        <span className="text-[#9e9e9e] px-1">(0)</span>
      </i>
      <span className="text-[#9e9e9e] text-[10px]">
        Free Shipping
      </span>
    </div>
    <div className="flex items-center md:items-start">
      <h3 className="font-bold">PKR 14999</h3>
      <span className="text-xs text-[#707070] mx-3">
        <del>PKR 13009 </del>
      </span>
    </div>
    <div className="my-0.5  md:block">
      <button className="text-center w-full bg-[#1bab6e] hover:bg-[#32996e] text-white font-semibold rounded-md py-2 transition-all duration-200">
        <i className="fa fa-shopping-cart"></i> Add to Cart
      </button>
    </div>
  </div>
</div>
</div>


<div className="h-[330px]  cursor-pointer xx:h-[280px]  shadow-2xl  xs:h-[328px] md:h-[365px] border border-[#c7c7c7] py-2 rounded-[4px]">
<div className="flex items-center justify-between px-1">
  <div className="relative w-12 h-8 overflow-hidden">
    <i className="fa fa-tag text-[34px] text-red-600 rotate-[134deg]"></i>
    <span className="absolute top-[10px] left-2 text-[11px] font-semibold text-white">
      6%{" "}
    </span>{" "}
  </div>
  <div>
    <i className="fa fa-heart text-[#1BAB6E] hover:bg-black p-[5px] hover:rounded-md transition-[bg] duration-100"></i>
  </div>
</div>
<div className="w-full h-20 xs:h-28 md:h-48">
  <img src={Heroimg3} className="w-full h-full object-cover" />
</div>
<div className="w-full h-[105px]">
  <div className="px-2">
    <p className="text-[10px] text-[#999999] h-[15px]">Red</p>
    <h5 className="text-sm font-bold truncate text-ellipsis max-h-5 max-w-[150px] md:max-w-[280px]">
      WM Travel Baby Seat Carry...
    </h5>
  </div>
  <div className="bg-[#fafafa] px-2">
    <div>
      <i className="fa fa-star text-[#1bab6e] text-[10px]">
        <span className="text-[#9e9e9e] px-1">(0)</span>
      </i>
      <span className="text-[#9e9e9e] text-[10px]">
        Free Shipping
      </span>
    </div>
    <div className="flex items-center md:items-start">
      <h3 className="font-bold">PKR 14999</h3>
      <span className="text-xs text-[#707070] mx-3">
        <del>PKR 13009 </del>
      </span>
    </div>
    <div className="my-0.5  md:block">
      <button className="text-center w-full bg-[#1bab6e] hover:bg-[#32996e] text-white font-semibold rounded-md py-2 transition-all duration-200">
        <i className="fa fa-shopping-cart"></i> Add to Cart
      </button>
    </div>
  </div>
</div>
</div> 
   
<div className="h-[330px]  cursor-pointer xx:h-[280px]  shadow-2xl  xs:h-[328px] md:h-[365px] border border-[#c7c7c7] py-2 rounded-[4px]">
<div className="flex items-center justify-between px-1">
  <div className="relative w-12 h-8 overflow-hidden">
    <i className="fa fa-tag text-[34px] text-red-600 rotate-[134deg]"></i>
    <span className="absolute top-[10px] left-2 text-[11px] font-semibold text-white">
      6%{" "}
    </span>{" "}
  </div>
  <div>
    <i className="fa fa-heart text-[#1BAB6E] hover:bg-black p-[5px] hover:rounded-md transition-[bg] duration-100"></i>
  </div>
</div>
<div className="w-full h-20 xs:h-28 md:h-48">
  <img src={Heroimg4} className="w-full h-full object-cover" />
</div>
<div className="w-full h-[105px]">
  <div className="px-2">
    <p className="text-[10px] text-[#999999] h-[15px]">Red</p>
    <h5 className="text-sm font-bold truncate text-ellipsis max-h-5 max-w-[150px] md:max-w-[280px]">
      WM Travel Baby Seat Carry...
    </h5>
  </div>
  <div className="bg-[#fafafa] px-2">
    <div>
      <i className="fa fa-star text-[#1bab6e] text-[10px]">
        <span className="text-[#9e9e9e] px-1">(0)</span>
      </i>
      <span className="text-[#9e9e9e] text-[10px]">
        Free Shipping
      </span>
    </div>
    <div className="flex items-center md:items-start">
      <h3 className="font-bold">PKR 14999</h3>
      <span className="text-xs text-[#707070] mx-3">
        <del>PKR 13009 </del>
      </span>
    </div>
    <div className="my-0.5  md:block">
      <button className="text-center w-full bg-[#1bab6e] hover:bg-[#32996e] text-white font-semibold rounded-md py-2 transition-all duration-200">
        <i className="fa fa-shopping-cart"></i> Add to Cart
      </button>
    </div>
  </div>
</div>
</div> 


<div className="h-[330px]  cursor-pointer xx:h-[280px]  shadow-2xl  xs:h-[328px] md:h-[365px] border border-[#c7c7c7] py-2 rounded-[4px]">
<div className="flex items-center justify-between px-1">
  <div className="relative w-12 h-8 overflow-hidden">
    <i className="fa fa-tag text-[34px] text-red-600 rotate-[134deg]"></i>
    <span className="absolute top-[10px] left-2 text-[11px] font-semibold text-white">
      6%{" "}
    </span>{" "}
  </div>
  <div>
    <i className="fa fa-heart text-[#1BAB6E] hover:bg-black p-[5px] hover:rounded-md transition-[bg] duration-100"></i>
  </div>
</div>
<div className="w-full h-20 xs:h-28 md:h-48">
  <img src={Heroimg5} className="w-full h-full object-cover" />
</div>
<div className="w-full h-[105px]">
  <div className="px-2">
    <p className="text-[10px] text-[#999999] h-[15px]">Red</p>
    <h5 className="text-sm font-bold truncate text-ellipsis max-h-5 max-w-[150px] md:max-w-[280px]">
      WM Travel Baby Seat Carry...
    </h5>
  </div>
  <div className="bg-[#fafafa] px-2">
    <div>
      <i className="fa fa-star text-[#1bab6e] text-[10px]">
        <span className="text-[#9e9e9e] px-1">(0)</span>
      </i>
      <span className="text-[#9e9e9e] text-[10px]">
        Free Shipping
      </span>
    </div>
    <div className="flex items-center md:items-start">
      <h3 className="font-bold">PKR 14999</h3>
      <span className="text-xs text-[#707070] mx-3">
        <del>PKR 13009 </del>
      </span>
    </div>
    <div className="my-0.5  md:block">
      <button className="text-center w-full bg-[#1bab6e] hover:bg-[#32996e] text-white font-semibold rounded-md py-2 transition-all duration-200">
        <i className="fa fa-shopping-cart"></i> Add to Cart
      </button>
    </div>
  </div>
</div>
</div> */
}

// import Slider from "react-slick";
// import Heroimg2 from "../../assets/images/Hero/inventory_26299.webp"
// import Heroimg3 from "../../assets/images/Hero/inventory_54851.webp"
// import Heroimg4 from "../../assets/images/Hero/inventory_59234.webp"
// import Heroimg5 from "../../assets/images/Hero/inventory_95403.webp"
// import Heroimg6 from "../../assets/images/Hero/inventory_97883.webp"
// import Heroimg7 from "../../assets/images/Hero/inventory_98309.webp"
