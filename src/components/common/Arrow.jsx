import { LeftArrow, RightArrow } from "../../utils/Icons";

export const Left = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer transition-all duration-200  justify-center items-center bg-white text-[#414143] border border-[#414143] hover:text-white hover:bg-[#01C6B5] h-11.5 w-11.5 rounded-full hover:border-none "
    >
      <LeftArrow />
    </div>
  );
};
export const Right = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer transition-all duration-200  justify-center items-center bg-white text-[#414143] border border-[#414143] hover:text-white hover:bg-[#01C6B5] h-11.5 w-11.5 rounded-full hover:border-none "
    >
      <RightArrow />
    </div>
  );
};
