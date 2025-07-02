import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import item1 from "../assets/photo/item1.jpg";
// import item2 from "../assets/photo/item2.jpg";
// import item3 from "../assets/photo/item3.jpg";
import banner from '../assets/photo/Share your.png'


// import required modules
import { Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="overflow-hidden bg-green-50">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                  <h2 className="max-w-lg text-gray-600 mb-6 font-sans text-xl md:text-3xl font-bold tracking-tightsm:text-4xl sm:leading-none">
                    <br className="hidden md:block" /> "Equestrian Statue of Frederick William IV"
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-500 md:text-lg">
                   This grand bronze statue of King Frederick William IV of Prussia sits proudly at the entrance of the Alte Nationalgalerie in Berlin. Representing military honor and royal legacy, it captures the essence of 19th-century Prussian power and cultural influence,
                  </p>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div className="relative">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                    >
                      <defs>
                        <pattern
                          id="766323e1-e594-4ffd-a688-e7275079d540"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                      <img src={item1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden bg-green-50">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                  <h2 className="max-w-lg text-gray-600 mb-6 font-sans text-xl md:text-3xlfont-bold tracking-tightsm:text-4xl sm:leading-none">
                    <br className="hidden md:block" /> " Roman Togate Statue (Headless)"
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-500 md:text-lg">
                    An ancient Roman marble statue, draped in a toga — symbol of Roman citizenship and authority. Though time has taken its head, the intricate folds of the garment still reflect the refined artistry of the Roman Empire. Found among the ruins, it echoes a once-flourishing civilization.
                  </p>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div className="relative">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                    >
                      <defs>
                        <pattern
                          id="766323e1-e594-4ffd-a688-e7275079d540"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                      <img src={item2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden bg-green-50">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
                  <h2 className="max-w-lg text-gray-600 mb-6 font-sans text-xl md:text-3xl font-bold tracking-tightsm:text-4xl sm:leading-none">
                    <br className="hidden md:block" /> "Victorian Era Tailor’s Mannequin"
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-500 md:text-lg">
                    A segmented tailor's form from the late 19th to early 20th century, used in dressmaking and fashion design. With its weathered wood and padded frame, it stands as a reminder of the craftsmanship behind bespoke tailoring during the industrial age.


                  </p>
                </div>
                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div className="relative">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
                    >
                      <defs>
                        <pattern
                          id="766323e1-e594-4ffd-a688-e7275079d540"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <div className="relative bg-white rounded shadow-2xl p-7 sm:p-10">
                      <img src={item3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
      <div className="">
        <img className=" w-full h-[65vh] inset-0 object-center z-0" src={banner} alt="" />
      </div>
    </>
  );
}
