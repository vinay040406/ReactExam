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
      className={`flex ${customize} items-center  justify-center w-full`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="md:text-[48px] sm:text-[40px] text-[35px] md:whitespace-nowrap font-semibold ">
          {heading}
        </h2>
        <p className="text-xl font-normal text-[#414143]">{desc}</p>
      </div>

      <div className={` ${svgCustomize}  gap-4 items-center flex 2xl:mt-0 mt-6`}>
        {svg1}
        {svg2}
      </div>
    </div>
  );
};

export default ProductsHeading;
