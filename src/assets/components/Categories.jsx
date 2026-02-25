import ProductsHeading from "./Common/ProductsHeading";
import ProductCard from "./Common/ProductCard";
import Button from "./Common/Button";
import { categoryData } from "../Data/PageData";

const Categories = () => {
  const handleClick = (value) => {
    const existingProducts = JSON.parse(localStorage.getItem("Products")) || [];
    existingProducts.push(value);
    localStorage.setItem("Products", JSON.stringify(existingProducts));
  };

  return (
    <div className="max-w-360 w-full lg:px-30 md:px-10 px-3 py-20 flex flex-col gap-10">
      <ProductsHeading
        customize={"justify-between"}
        heading={"SHOP OUR CATEGORIES"}
        svg1={
          <Button
            text={"View All"}
            padding={
              "px-6 py-3 whitespace-nowrap bg-[rgba(1,198,181,1)] text-white"
            }
          />
        }
        desc={"Use this area to describe the collection."}
      />
      <div className="flex flex-wrap justify-center gap-10">
        {categoryData.map((item, index) => (
          <ProductCard
            onClick={() => handleClick(item)}
            key={index}
            height={"h-[303px] w-[267px]"}
            imageSrc={item.imageSrc}
            productName={item.productName}
            spanText={"gap-7"}
            spanPrice={item.price}
            peerHeight={"h-[303px] w-[267px]"}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
