import { useState } from "react";

const SummaryOptions = () => {
  const [selectedOption, setSelectedOption] = useState<string>("Icmal");

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex gap-[10px]">
      <div
        className={`flex items-center gap-[5px] py-[3px] px-[5px] border-solid border-[1px] border-[#E5E7EA] rounded-[8px] cursor-pointer`}
        onClick={() => handleSelect("Icmal")}
      >
        <img
          src={
            selectedOption === "Icmal"
              ? "/icons/Ellipse 16.png"
              : "/icons/Ellipse 16 (3).png"
          }
          alt=""
          className="w-[10px] h-[10px]"
        />
        <p
          className={`text-[14px] ${
            selectedOption === "Icmal" ? "text-[#22385F]" : "text-[#6D6D6D]"
          }`}
        >
          Icmal
        </p>
      </div>
      <div
        className={`flex items-center gap-[5px] py-[5px] px-[10px] border-solid border-[1px] border-[#E5E7EA] rounded-[8px] cursor-pointer`}
        onClick={() => handleSelect("Tam")}
      >
        <img
          src={
            selectedOption === "Tam"
              ? "/icons/Ellipse 16.png"
              : "/icons/Ellipse 16 (3).png"
          }
          alt=""
          className="w-[10px] h-[10px]"
        />
        <p
          className={`text-[14px] ${
            selectedOption === "Tam" ? "text-[#22385F]" : "text-[#6D6D6D]"
          }`}
        >
          Tam
        </p>
      </div>
    </div>
  );
};

export default SummaryOptions;
