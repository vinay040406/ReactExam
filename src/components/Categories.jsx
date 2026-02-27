import ProductsHeading from "../common/ProductsHeading";
import ProductCard from "../common/ProductCard";
import Button from "../common/Button";
import { categoryData } from "../utils/PageData";

const Categories = () => {
  const handleClick = (value) => {
    const existingProducts = JSON.parse(localStorage.getItem("Products")) || [];
    existingProducts.push(value);
    localStorage.setItem("Products", JSON.stringify(existingProducts));
  };

  return (
    <div className="max-w-285 w-full  flex flex-col lg:mt-35 md:mt-25 mt-10 2xl:px-0 px-10 md:gap-12.5 gap-8">
      <ProductsHeading
        customize={"lg:justify-between justify-center"}
        heading={"Shop Our Categories"}
        svg1={
          <Button
            text={"View All"}
            padding={
              "px-6 py-3 lg:flex hidden whitespace-nowrap bg-[rgba(1,198,181,1)] text-white"
            }
          />
        }
        desc={"Use this area to describe the collection."}
      />
      <div className="flex w-full flex-wrap gap-5 justify-center">
        {window.innerWidth > 768
          ? categoryData.map((item, index) => (
              <ProductCard
                onClick={() => handleClick(item)}
                key={index}
                height={"h-[251px] w-[267px]"}
                imageSrc={item.imageSrc}
                productName={item.productName}
                spanText={
                  "flex justify-between w-full px-4 text-base font-semibold text-[#414143]"
                }
                spanPrice={item.price}
                peerHeight={"h-[251px] w-[267px]"}
                pText={"text-base font-normal"}
              />
            ))
          : categoryData
              .slice(0, 6)
              .map((item, index) => (
                <ProductCard
                  onClick={() => handleClick(item)}
                  key={index}
                  height={"h-[251px] w-[267px]"}
                  imageSrc={item.imageSrc}
                  productName={item.productName}
                  spanText={
                    "flex justify-between w-full px-4 text-base font-semibold text-[#414143]"
                  }
                  spanPrice={item.price}
                  peerHeight={"h-[251px] w-[267px]"}
                  pText={"text-base font-normal"}
                />
              ))}
      </div>
    </div>
  );
};

export default Categories;
