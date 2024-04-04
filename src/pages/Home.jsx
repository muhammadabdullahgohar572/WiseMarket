
import AutoPlay from "../components/home/Slider";
import SwipeToSlide from "../components/home/Categories";
// import PauseOnHover from "../components/home/ProductsCard";
import { See } from "../components/home/See";
import AdaptiveHeight from "../components/home/Hero";
import { Herowork } from "../components/home/Herowork";
import Heroslider from "../components/home/Heroslider";
import { Buttens } from "../components/home/Buttens";
import Middle from "../components/home/Middle";
import Company from "../components/home/Company";
import Mobile from "../components/home/Mobile";
import { Sopphing } from "../components/home/Shopping";
import { Iphone } from "../components/home/Iphone";
import { Last } from "../components/home/Last";
import { Footter } from "../components/home/Footter";


export const Home = () => {
  return (
    <div>
      <AutoPlay />
      <SwipeToSlide />
         {/* <PauseOnHover/> */}
         <See/>
          <AdaptiveHeight/>
         <Herowork/> 
         <Heroslider/>
          <Buttens/>
      <Middle/> 
     <Company/> 
     <Mobile/>
     <Sopphing/>
     <Iphone/>
    <Last/>
    <Footter/>



 
    </div>
  );
};
