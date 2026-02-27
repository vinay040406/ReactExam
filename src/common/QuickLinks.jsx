import { DownArrow } from "../Icons";

const QuickLinks = ({ text1, text2, text3 }) => {
  return (
    <div>
      <ul className={`md:text-base sm:text-sm text-xs font-normal flex flex-col gap-2`}>
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
      </ul>
    </div>
  );
};

export default QuickLinks;
