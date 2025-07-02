import "swiper/css";
import "swiper/css/navigation";

import banner from '../assets/photo/Share your.png'


// import required modules
import { Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <>
    
      <div className="">
        <img className=" w-full h-[65vh] inset-0 object-center z-0" src={banner} alt="" />
      </div>
    </>
  );
}
