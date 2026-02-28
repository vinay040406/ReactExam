import ProductsHeading from "../components/common/ProductsHeading";
import ProductCard from "../components/common/ProductCard";
import Button from "../components/common/Button";
import { categoryData } from "../utils/PageData";

const Categories = () => {
  const handleClick = (value) => {
    const existingProducts = JSON.parse(localStorage.getItem("Products")) || [];
    existingProducts.push(value);
    localStorage.setItem("Products", JSON.stringify(existingProducts));
  };

  return (
    <div className="max-w-360 w-full  flex flex-col lg:mt-35 md:mt-25 mt-10 2xl:px-0 sm:px-10 px-5 md:gap-12.5 gap-8">
      <ProductsHeading
        customize={"lg:justify-between justify-center lg:text-left text-center "}
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
      <div
        className="grid w-full gap-6 justify-center 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                xl:grid-cols-4"
      >
        {categoryData.map((item, index) => (
          <ProductCard
            key={index}
            parent="h-[303px] w-full border border-[#0000000D]"
            onClick={() => handleClick(item)}
            height="h-[251px]"
            peerHeight={"h-[251px]"}
            imageSrc={item.imageSrc}
            productName={item.productName}
            spanText="flex justify-between w-full px-4 text-base font-semibold text-[#414143]"
            spanPrice={item.price}
            pText="text-base font-normal"
            price={item.sale && <button className="bg-[#01C6B5] text-white text-[14px] font-normal px-3 py-1.5 ">Sale</button>}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
