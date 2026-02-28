import ProductsHeading from "../components/common/ProductsHeading";
import { featuredData } from "../utils/PageData";
import { Left, Right } from "../components/common/Arrow";

import ProductCard from "./common/ProductCard";

import useEmblaCarousel from "embla-carousel-react";

const Featured = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const handleNext = () => emblaApi?.scrollNext();
  const handlePrev = () => emblaApi?.scrollPrev();

  return (
    <div className="max-w-360 w-full lg:mt-32.5 md:mt-25 mt-10 2xl:px-0 sm:px-10 px-5">
      <div className="flex flex-col md:gap-12.5 gap-8">
        <ProductsHeading
          customize={
            "2xl:justify-between justify-center lg:text-left text-center 2xl:flex-row flex-col"
          }
          svg1={<Left onClick={handlePrev} />}
          svg2={<Right onClick={handleNext} />}
          svgCustomize={""}
          heading={"Featured Products"}
          desc={"Use this area to describe the collection."}
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {featuredData.map((item, index) => (
              <div
                key={index}
                className="flex-none w-full  lg:w-1/2  xl:w-1/3 px-3"
              >
                <ProductCard
                  onClick={() => addToCart(item)}
                  imageSrc={item.imageSrc}
                  height={"h-[441px]"}
                  peerHeight={"h-[441px] w-full"}
                  price={item.price}
                  tag={
                    "bg-white px-6 py-2 rounded-[88px] border border-[#0000000D]"
                  }
                />
                <h3 className="text-2xl font-normal flex justify-center mt-6">
                  {item.productName}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
