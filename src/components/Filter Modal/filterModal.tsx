import { FC } from "react";
import { FilterModalProps } from "../../Types/filterModalTypes";

const FilterModal: FC<FilterModalProps> = ({
  closeDropdown,
  showDropdown,
  title,
  options,
}) => {
  return (
    <div
      className={`absolute top-full left-0 w-[313px] bg-white border border-[#E5E7EA] rounded transition-all duration-300 ease-in-out transform ${
        showDropdown
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-95 translate-y-[-10px] pointer-events-none"
      }`}
    >
      <div className="bg-[#F6F7F8] mt-[10px] pl-[20px] pr-[10px] flex items-center justify-between text-[#22385F] font-[500]">
        {title}
        <img
          onClick={closeDropdown}
          src="/icons/cuida_x-outline (2).png"
          alt=""
          className="w-[20px] h-[20px] cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-[5px] pl-[21px] mt-[10px]">
        <p className="text-[#1D7EB7] text-[12px]">Hamısını seç</p>
        <div className="w-[3px] h-[3px] rounded-full bg-[#1D7EB7]"></div>
        <p className="text-[#1D7EB7] text-[12px]">Sıfırla</p>
        <div className="h-[14px] w-[1px] bg-[#949393]"></div>
        <img
          src="/icons/bitcoin-icons_search-outline (2).png"
          alt=""
          className="w-[20px] h-[20px]"
        />
      </div>
      <ul className="flex flex-col gap-[10px] pl-[20px] pr-[10px] text-[#6D6D6D] py-[20px] text-[14px]">
        {options.map((option, index) => (
          <li key={index} className="cursor-pointer flex justify-between">
            {option}
            <img
              src="/icons/Frame 427320147 (1).png"
              alt=""
              className="w-[16px] h-[16px]"
            />
          </li>
        ))}
      </ul>

      <button className="bg-[#22385F] text-[14px] text-[#FFFFFF] mb-[10px] ml-[15px] rounded-[8px] py-[10px] px-[118px]">
        Göstər
      </button>
    </div>
  );
};

export default FilterModal;
