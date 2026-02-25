const ProductsHeading = ({ heading, desc, customize, svg1, svg2 }) => {
  return (
    <div
      className={`flex ${customize} items-center md:text-left text-center md:justify-between justify-center w-full`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="lg:text-[48px] text-[35px]  md:whitespace-nowrap font-semibold">
          {heading}
        </h2>
        <p className="text-xl font-normal">{desc}</p>
      </div>

      <div className="hidden gap-4 items-center md:flex">
        {svg1}
        {svg2}
      </div>
    </div>
  );
};

export default ProductsHeading;
