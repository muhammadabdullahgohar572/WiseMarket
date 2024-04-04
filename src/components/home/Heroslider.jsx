import React from 'react';
import Slider from 'react-slick';
import Heros1 from "../../assets/images/Herowork/banners-457436603.png";
import Heros2 from "../../assets/images/Herowork/banners-536311920.png";
import Heros3 from "../../assets/images/Herowork/banners-59999290.png";
import Heros4 from "../../assets/images/Herowork/banners-727510725.png";

const PauseOnHover = () => {
  const products = [
    { imgpath: Heros1 },
    { imgpath: Heros2 },
    { imgpath: Heros3 },
    { imgpath: Heros4 },
  ];

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

  return (
    <div className="sm:mt-[3%] sm:ml-[3%] w-[92%] sm:w-[92%] sm:mr-[3%]">
      <Slider {...settings}>
        {products.map((item, index) => (
          <div key={index} className="">
            <img
              className="ml-[50px] sm:m-[0px] mt-[20%] cursor-pointer"
              src={item.imgpath}
              alt={`Hero Image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PauseOnHover;


// import React, { Component } from "react";
// import Slider from "react-slick";
// import Heros1 from "../../assets/images/Herowork/banners-457436603.png"
// import Heros2 from "../../assets/images/Herowork/banners-536311920.png"
// import Heros3 from "../../assets/images/Herowork/banners-59999290.png"
// import Heros4 from "../../assets/images/Herowork/banners-727510725.png"

// export default class Heroslider extends Component {
//   render() {
//     var settings = {
//       className: "",
//       dots: true,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       adaptiveHeight: true
//     };
//     return (
//       <div>
//         <h2>Adaptive height</h2>
//         <Slider {...settings}>
//           <div>
//           <div >
//             <img  src={Heros1} />

//            </div>
//           <div>
//           <img  src={Heros2} />

//          </div>
//           <div>
//             <img src={Heros3} />
//           </div>
//            <div>
//              <img src={Heros4} />
//            </div>

//                  </div>
//         </Slider>
//       </div>
//     );
//   }
// }
