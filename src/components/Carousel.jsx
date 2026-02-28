import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { carouselArray } from "../utils/PageData";

function DemoCarousel() {
  return (
    <Carousel
      className="max-w-417.5 w-full"
      autoPlay
      showIndicators={false}
      showArrows={false}
      infiniteLoop
      showThumbs={false}
      swipeable
      useKeyboardArrows
      emulateTouch
      showStatus={false}
      stopOnHover={false}
    >
      {carouselArray.map((item, index) => (
        <div
          key={index}
          className="w-full h-196.75 bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${item.bgImage})` }}
        >
          <div
            className="w-full max-w-285  2xl:px-30 sm:px-10 px-5 flex flex-col 
                           items-center lg:items-start 
                           text-center lg:text-left 
                           text-white"
          >
            <h1 className="md:text-2xl text-xl font-normal tracking-wider">
              {item.title}
            </h1>

            <h1 className="lg:text-[66px] md:text-[60px] sm:text-[55px] text-[48px] font-bold">
              {item.heading}
            </h1>

            <p className="lg:text-xl md:text-[18px] text-base font-normal leading-[165%] max-w-149.5">
              {item.desc}
            </p>

            <button className="bg-[#01C6B5] px-8 py-3.5 text-lg font-medium mt-8 hover:scale-103 transition duration-200">
              Shop now
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default DemoCarousel;
