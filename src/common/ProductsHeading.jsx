const ProductsHeading = ({
  heading,
  desc,
  customize,
  svg1,
  svg2,
  svgCustomize,
}) => {
  return (
    <div
      className={`flex ${customize} items-center lg:text-left text-center 2xl:justify-between justify-center w-full`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-[48px]  md:whitespace-nowrap font-semibold ">
          {heading}
        </h2>
        <p className="text-xl font-normal text-[#414143]">{desc}</p>
      </div>

      <div className={` ${svgCustomize}  gap-4 items-center `}>
        {svg1}
        {svg2}
      </div>
    </div>
  );
};

export default ProductsHeading;
