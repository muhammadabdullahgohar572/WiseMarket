// import  { Component } from "react";
// import Slider from "react-slick";
// import company1 from "../../assets/images/Company/amazfit-22440895.png"
// import company2 from "../../assets/images/Company/anex-56805572.png"
// import company3 from "../../assets/images/Company/aspor-994280636.png"
// import company4 from "../../assets/images/Company/aukey-468108506.png"
// import company5 from "../../assets/images/Company/baseus-103103752.png"
// import company6 from "../../assets/images/Company/blulory-702990091.png"
// import company7 from "../../assets/images/Company/e-tachi-190076243.png"
// import company8 from "../../assets/images/Company/gfive-581594607.png"
// import company9 from "../../assets/images/Company/itel-294459200.png"
// import company10 from "../../assets/images/Company/redmi-884510225.png"
// import company11 from "../../assets/images/Company/sparx-358489980.png"
// import company12 from "../../assets/images/Company/speakers-headphones-630630639.png"
// import company13 from "../../assets/images/Company/xcess-13488053.png"
// import company14 from "../../assets/images/Company/yolo-826672315.png"

// export default class Company extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 3
//     };

//     const Name=[
//         {imgpath:company1},
//         {imgpath:company2},
//         {imgpath:company3},
//         {imgpath:company4},
//         {imgpath:company5},
//         {imgpath:company6},
//         {imgpath:company7},
//         {imgpath:company8},
//         {imgpath:company9},
//         {imgpath:company10},
//         {imgpath:company11},
//         {imgpath:company12},
//         {imgpath:company13},
//         {imgpath:company14},
//     ]
//     return (
//       <div className="mt-[10%] w-[95%]">

//         <Slider {...settings}>

//          {
//             Name.map((items,index)=>{
//                 return(
//                     <>
//                     <div className="shadow-xl" key={index}>
//                       <div className="w-[95%]">
//                        <span>{items.imgpath}</span>
//                       </div>
//                     </div>

//                     </>
//                 )
//             })
//          }
//         </Slider>
//       </div>
//     );
//   }
// }

// import  { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import company1 from "../../assets/images/Company/amazfit-22440895.png";
// import company2 from "../../assets/images/Company/anex-56805572.png";
// import company3 from "../../assets/images/Company/aspor-994280636.png";
// import company4 from "../../assets/images/Company/aukey-468108506.png";
// import company5 from "../../assets/images/Company/baseus-103103752.png";
// import company6 from "../../assets/images/Company/blulory-702990091.png";
// import company7 from "../../assets/images/Company/e-tachi-190076243.png";
// import company8 from "../../assets/images/Company/gfive-581594607.png";
// import company9 from "../../assets/images/Company/itel-294459200.png";
// import company10 from "../../assets/images/Company/redmi-884510225.png";
// import company11 from "../../assets/images/Company/sparx-358489980.png";
// import company12 from "../../assets/images/Company/speakers-headphones-630630639.png";
// import company13 from "../../assets/images/Company/xcess-13488053.png";
// import company14 from "../../assets/images/Company/yolo-826672315.png";

// const Company = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   };

//   const [campany,allcomapny]=useState([])


//   const getcampant=()=>{
//        fetch("http://localhost:5000/company")
//        .then((res)=>res.json()).then((data)=>allcomapny(data))

//       }
//       useEffect(()=>{
//        getcampant()
//       },[])

//   // const [products, setProduct] = useState([]);
//   // const [productData, setProductData] = useState({
//   //   title: "",
//   //   body: "",
//   // });

//   // const getProducts = () => {
//   //   fetch("http://localhost:4000/getProducts")
//   //     .then((res) => res.json())
//   //     .then((data) => setProduct(data));
//   // };

//   // useEffect(() => {
//   //   getProducts();
//   // }, []);

//   // const handleSubmit = () => {
//   //   fetch("http://localhost:4000/addProduct", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify(productData),
//   //   })
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log(data);

//   //       getProducts();
//   //     });
//   // };

//   // const Name = [
//   //   { imgpath: company1 },
//   //   { imgpath: company2 },
//   //   { imgpath: company3 },
//   //   { imgpath: company4 },
//   //   { imgpath: company5 },
//   //   { imgpath: company6 },
//   //   { imgpath: company7 },
//   //   { imgpath: company8 },
//   //   { imgpath: company9 },
//   //   { imgpath: company10 },
//   //   { imgpath: company11 },
//   //   { imgpath: company12 },
//   //   { imgpath: company13 },
//   //   { imgpath: company14 },
//   // ];

//   return (
//     <div className="mt-[10%] m-[2%] w-[90%] sm:w-[95%]">
//       <h1 className="text-lg font-bold">Shop by favorite Brands</h1>
//       <Slider {...settings} className="mt-[7%]">
//         {campany.map((items, index) => (
//           <div className="sm:h-[100px] h-[60px] shadow-lg p-[20%] cursor-pointer border border-[#c7c7c7] py-2" key={index}>
//             <div className="mt-[10%] ml-[10%]">
//               <img src={items.imgpath} alt={`Company ${index + 1}`} />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Company;


import  { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Company = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
  };
  const [companies, setCompanies] = useState([]);

  const getCompanies = () => {
    fetch("http://localhost:5000/company")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <div className="mt-[10%] m-[2%] w-[90%] sm:w-[95%]">
      <h1 className="text-lg font-bold">Shop by favorite Brands</h1>
      <Slider {...settings} className="mt-[7%]">
        {companies.map((item, index) => (
          <div className="sm:h-[100px] h-[60px] shadow-lg p-[20%] cursor-pointer border border-[#c7c7c7] py-2" key={index}>
            <div className="mt-[10%] ml-[10%]">
              <img src={item.imagpath} alt={`Company ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Company;
