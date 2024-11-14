import { FC, useState } from "react";
import { FilterModalProps } from "../../Types/filterModalTypes";

const FilterModal: FC<FilterModalProps> = ({
  closeDropdown,
  showDropdown,
  title,
  options,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(
    new Set()
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prev) => {
      const updated = new Set(prev);
      if (updated.has(option)) {
        updated.delete(option);
      } else {
        updated.add(option);
      }
      return updated;
    });
  };

  const selectAll = () => {
    setSelectedOptions(new Set(options));
  };

  const resetAll = () => {
    setSelectedOptions(new Set());
  };

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
        <p
          className="text-[#1D7EB7] text-[12px] cursor-pointer"
          onClick={selectAll}
        >
          Hamısını seç
        </p>
        <div className="w-[3px] h-[3px] rounded-full bg-[#1D7EB7]"></div>
        <p
          className="text-[#1D7EB7] text-[12px] cursor-pointer"
          onClick={resetAll}
        >
          Sıfırla
        </p>
        <div className="h-[14px] w-[1px] bg-[#949393]"></div>

        <div className="relative flex items-center transition-all duration-300 ease-in-out">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className={`outline-none text-[12px] rounded-[8px] placeholder:text-[12px] transition-all duration-300 ease-in-out ${
              showSearch ? "w-[100px]" : "w-[0px]"
            }`}
            style={{ transitionProperty: "width" }}
          />
          <img
            onClick={() => setShowSearch(!showSearch)}
            src="/icons/bitcoin-icons_search-outline (2).png"
            alt="search"
            className="w-[20px] h-[20px] cursor-pointer transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      <ul className="flex flex-col gap-[10px] pl-[20px] pr-[10px] text-[#6D6D6D] py-[20px] text-[14px]">
        {filteredOptions.map((option, index) => (
          <li
            key={index}
            className="cursor-pointer flex justify-between"
            onClick={() => handleOptionClick(option)}
          >
            <div className="flex items-center gap-2">
              <span
                className={`${
                  selectedOptions.has(option)
                    ? "text-[#22385F]"
                    : "text-[#6D6D6D]"
                }`}
              >
                {option}
              </span>
            </div>
            <img
              src={`${
                selectedOptions.has(option)
                  ? "/icons/Frame 427320147 (4).png"
                  : "/icons/Frame 427320147 (3).png"
              }`}
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
