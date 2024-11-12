"use client";
import { useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className=" pl-[40px] flex flex-col ">
      <div className="flex justify-between">
        <ul className="flex items-center gap-[10px]">
          <li
            className={`relative flex items-center text-[#6D6D6D] py-[10px] px-[10px] rounded-[8px] cursor-pointer ${
              showDropdown ? "bg-[#22385F] text-white" : "bg-transparent"
            }`}
            onClick={toggleDropdown}
          >
            Şəhər
            <img
              src={
                showDropdown
                  ? "/icons/tabler_caret-down-filled (5).png"
                  : "/icons/tabler_caret-down-filled (3).png"
              }
              alt=""
              className="w-[24px] h-[24px] ml-2"
            />
            <div
              className={`absolute top-full left-0 w-[313px] bg-white border border-[#E5E7EA] rounded  transition-all duration-200 ease-in-out transform ${
                showDropdown ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <ul className="flex flex-col gap-[10px] pl-[20px] pr-[10px] text-[#6D6D6D] py-[20px] text-[14px]">
                <li className=" cursor-pointer flex justify-between">
                  Baku
                  <img
                    src="/icons/Frame 427320147 (1).png"
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                </li>
                <li className=" cursor-pointer flex justify-between">
                  Ganja
                  <img
                    src="/icons/Frame 427320147 (1).png"
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                </li>
                <li className=" cursor-pointer flex justify-between">
                  Lənkaran
                  <img
                    src="/icons/Frame 427320147 (1).png"
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                </li>
                <li className=" cursor-pointer flex justify-between">
                  Nakhchivan
                  <img
                    src="/icons/Frame 427320147 (1).png"
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                </li>
                <li className=" cursor-pointer flex justify-between">
                  Shaki
                  <img
                    src="/icons/Frame 427320147 (1).png"
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                </li>
              </ul>
              <button className="bg-[#22385F] text-[14px] text-[#FFFFFF] mb-[10px] ml-[15px]  rounded-[8px] py-[10px] px-[118px] ">
                Göstər
              </button>
            </div>
          </li>

          <li className="flex items-center text-[#6D6D6D] py-[10px] px-[10px]">
            İl
            <img
              src="/icons/tabler_caret-down-filled (3).png"
              alt=""
              className="w-[24px] h-[24px] ml-2"
            />
          </li>
          <li className="flex items-center text-[#6D6D6D] py-[10px] px-[10px]">
            Ay
            <img
              src="/icons/tabler_caret-down-filled (3).png"
              alt=""
              className="w-[24px] h-[24px] ml-2"
            />
          </li>
          <li className="flex items-center text-[#6D6D6D] py-[10px] px-[10px]">
            Vəzifə
            <img
              src="/icons/tabler_caret-down-filled (3).png"
              alt=""
              className="w-[24px] h-[24px] ml-2"
            />
          </li>
          <li className="flex items-center text-[#6D6D6D] py-[10px] px-[10px]">
            Şirkət
            <img
              src="/icons/tabler_caret-down-filled (3).png"
              alt=""
              className="w-[24px] h-[24px] ml-2"
            />
          </li>
          <li className="flex items-center text-[#6D6D6D] py-[10px] px-[10px]">
            HR mütəxəssis
            <img
              src="/icons/tabler_caret-down-filled (3).png"
              alt=""
              className="w-[24px] h-[24px] ml-2"
            />
          </li>
        </ul>
        <div className="flex items-center gap-[10px]">
          <div className="py-[10px] flex justify-center items-center px-[14px] rounded-[8px] border-solid border-[1px] border-[#E5E7EA]">
            <img
              src="/icons/ri_reset-left-line (1).png"
              alt=""
              className="w-[20px] h-[20px]"
            />
          </div>
          <div className="flex gap-[5px] py-[12px] px-[14px] bg-[#22385F] rounded-[8px] border-solid border-[1px] border-[#E5E7EA]">
            <p className="text-[#FFFFFF] font-[500]">Layihə əlavə et</p>
            <img
              src="/icons/si_add-fill (1).png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="flex items-center gap-[5px] py-[12px] px-[14px]  rounded-[8px] border-solid border-[1px] border-[#E5E7EA]">
            <img
              src="/icons/vscode-icons_file-type-excel (1).png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#403F3F] font-[500]">Upload.xlsx</p>
          </div>
          <img
            src="/icons/ion_notifications (1).png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <div className="flex flex-col justify-center items-center">
            <img
              src="/icons/WhatsApp Image 2024-05-31 at 14.59 2 (2).png"
              alt=""
              className="w-[32px] h-[32px]"
            />
            <img
              src="/icons/tabler_caret-down-filled (4).png"
              alt=""
              className="w-[20px] h-[15px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[22px] border-b-solid border-b-[1px] border-b-[#EDEDED]">
        <div className="flex gap-[10px]">
          <div className="flex items-center gap-[5px] py-[3px] px-[4px] border-solid border-[1px] border-[#E5E7EA] rounded-[8px]">
            <img
              src="/icons/iconoir_eye.png"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="text-[#6D6D6D] ">Progress izləmə</p>
          </div>
          <div className="flex items-center gap-[5px] py-[5px] px-[10px] border-solid border-[1px] border-[#E5E7EA] rounded-[8px]">
            <img
              src="/icons/fluent_apps-list-20-regular.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#6D6D6D] ">Plan & Faktiki</p>
          </div>
          <div className="flex items-center gap-[5px] py-[5px] bg-[#AF2082] px-[10px] border-solid border-[1px] border-[#E5E7EA] rounded-[8px]">
            <img
              src="/icons/fluent_text-bullet-list-square-search-20-regular.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[white] ">Detallar</p>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex items-center gap-[5px] py-[3px] px-[4px] ">
            <img
              src="/icons/f7_status.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#403F3F] ">Status</p>
          </div>
          <div className="flex items-center gap-[5px] py-[3px] px-[4px]">
            <img
              src="/icons/stash_data-date-duotone.png"
              alt=""
              className="w-[26px] h-[26px]"
            />
            <p className="text-[#403F3F] ">Tarix</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[10px] ">
        <div className="flex gap-[10px]">
          <div className="flex items-center gap-[5px] py-[3px] px-[5px] border-solid border-[1px] border-[#E5E7EA] rounded-[8px]">
            <img
              src="/icons/Ellipse 16.png"
              alt=""
              className="w-[10px] h-[10px]"
            />
            <p className="text-[#22385F] text-[14px] ">Icmal</p>
          </div>
          <div className="flex items-center gap-[5px] py-[5px] px-[10px] border-solid border-[1px] border-[#E5E7EA] rounded-[8px]">
            <img
              src="/icons/fluent_apps-list-20-regular.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#6D6D6D] text-[14px] ">Tam</p>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex items-center gap-[5px] py-[12px] px-[14px]  rounded-[8px] border-solid border-[1px] border-[#E5E7EA]">
            <img
              src="/icons/vscode-icons_file-type-excel (1).png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#403F3F] font-[500]">Export xlsx</p>
          </div>
          <div className="flex items-center gap-[5px] py-[12px] px-[14px]  rounded-[8px] border-solid border-[1px] border-[#E5E7EA]">
            <img
              src="/icons/vscode-icons_file-type-pdf2.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#403F3F] font-[500]">Export PDF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
