"use client";
import { MouseEventHandler, useState } from "react";
import FilterModal from "../Filter Modal/filterModal";
import SummaryOptions from "./summaryOptions";

interface HeaderProps {
  onTableChange: (tableName: string) => void;
  activeTable: string;
}

const Header: React.FC<HeaderProps> = ({ onTableChange, activeTable }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const closeDropdown: MouseEventHandler<HTMLImageElement> = (e) => {
    e.stopPropagation();
    setOpenDropdown(null);
  };

  return (
    <div className=" flex flex-col ">
      <div className="flex justify-between">
        <ul className="flex items-center gap-[10px]">
          <li className="relative">
            <div
              className={`flex items-center text-[#6D6D6D] py-[10px] px-[10px] rounded-[8px] cursor-pointer ${
                openDropdown === "city"
                  ? "bg-[#22385F] text-white"
                  : "bg-transparent"
              }`}
              onClick={() => toggleDropdown("city")}
            >
              Şəhər
              <img
                src={
                  openDropdown === "city"
                    ? "/icons/tabler_caret-down-filled (5).png"
                    : "/icons/tabler_caret-down-filled (3).png"
                }
                alt="Caret"
                className="w-[24px] h-[24px] ml-2"
              />
            </div>
            <FilterModal
              closeDropdown={closeDropdown}
              showDropdown={openDropdown === "city"}
              title="Şəhər"
              options={["Baku", "Ganja", "Lənkaran", "Nakhchivan", "Shaki"]}
            />
          </li>

          <li className="relative">
            <div
              className={`flex items-center text-[#6D6D6D] py-[10px] px-[10px] rounded-[8px] cursor-pointer ${
                openDropdown === "year"
                  ? "bg-[#22385F] text-white"
                  : "bg-transparent"
              }`}
              onClick={() => toggleDropdown("year")}
            >
              İl
              <img
                src={
                  openDropdown === "year"
                    ? "/icons/tabler_caret-down-filled (5).png"
                    : "/icons/tabler_caret-down-filled (3).png"
                }
                alt=""
                className="w-[24px] h-[24px] ml-2"
              />
            </div>
            <FilterModal
              closeDropdown={closeDropdown}
              showDropdown={openDropdown === "year"}
              title="İl"
              options={["2024", "2023", "2022", "2021", "2020", "2019"]}
            />
          </li>

          <li className="relative">
            <div
              className={`flex items-center text-[#6D6D6D] py-[10px] px-[10px] rounded-[8px] cursor-pointer ${
                openDropdown === "month"
                  ? "bg-[#22385F] text-white"
                  : "bg-transparent"
              }`}
              onClick={() => toggleDropdown("month")}
            >
              Ay
              <img
                src={
                  openDropdown === "month"
                    ? "/icons/tabler_caret-down-filled (5).png"
                    : "/icons/tabler_caret-down-filled (3).png"
                }
                alt=""
                className="w-[24px] h-[24px] ml-2"
              />
            </div>
            <FilterModal
              closeDropdown={closeDropdown}
              showDropdown={openDropdown === "month"}
              title="Ay"
              options={["Oktyabr", "Sentyabr", "Avqust", "İyul", "İyun", "May"]}
            />
          </li>

          <li className="relative">
            <div
              className={`flex items-center text-[#6D6D6D] py-[10px] px-[10px] rounded-[8px] cursor-pointer ${
                openDropdown === "role"
                  ? "bg-[#22385F] text-white"
                  : "bg-transparent"
              }`}
              onClick={() => toggleDropdown("role")}
            >
              Vəzifə
              <img
                src={
                  openDropdown === "role"
                    ? "/icons/tabler_caret-down-filled (5).png"
                    : "/icons/tabler_caret-down-filled (3).png"
                }
                alt=""
                className="w-[24px] h-[24px] ml-2"
              />
            </div>
            <FilterModal
              closeDropdown={closeDropdown}
              showDropdown={openDropdown === "role"}
              title="Vəzifə"
              options={[
                "Chief Technology Officer",
                "Creative Director",
                "Head of Marketing",
                "Software Engineer",
              ]}
            />
          </li>

          <li className="relative">
            <div
              className={`flex items-center text-[#6D6D6D] py-[10px] px-[10px] rounded-[8px] cursor-pointer ${
                openDropdown === "company"
                  ? "bg-[#22385F] text-white"
                  : "bg-transparent"
              }`}
              onClick={() => toggleDropdown("company")}
            >
              Şirkət
              <img
                src={
                  openDropdown === "company"
                    ? "/icons/tabler_caret-down-filled (5).png"
                    : "/icons/tabler_caret-down-filled (3).png"
                }
                alt=""
                className="w-[24px] h-[24px] ml-2"
              />
            </div>
            <FilterModal
              closeDropdown={closeDropdown}
              showDropdown={openDropdown === "company"}
              title="Şirkət"
              options={[
                "AgroExp",
                "BakuTech",
                "Baku Pearl",
                "LenFarms",
                "NaxTrans",
              ]}
            />
          </li>

          <li className="relative">
            <div
              className={`flex items-center text-[#6D6D6D] py-[10px] px-[10px] rounded-[8px] cursor-pointer ${
                openDropdown === "hr"
                  ? "bg-[#22385F] text-white"
                  : "bg-transparent"
              }`}
              onClick={() => toggleDropdown("hr")}
            >
              HR mütəxəssis
              <img
                src={
                  openDropdown === "hr"
                    ? "/icons/tabler_caret-down-filled (5).png"
                    : "/icons/tabler_caret-down-filled (3).png"
                }
                alt=""
                className="w-[24px] h-[24px] ml-2"
              />
            </div>
            <FilterModal
              closeDropdown={closeDropdown}
              showDropdown={openDropdown === "hr"}
              title="HR mütəxəssis"
              options={[
                "Aysel Hasanova",
                "Farid Aliyev",
                "Sama Safarova",
                "Hikmet Karimov",
              ]}
            />
          </li>
        </ul>

        <div className="flex items-center gap-[10px]">
          <div className="py-[12px] flex justify-center items-center px-[14px] rounded-[8px] border-solid border-[1px] border-[#E5E7EA]">
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

      <div className="flex justify-between mt-[22px] border-b-solid border-b-[1px] rounded-bl-[8px] border-b-[#EDEDED]">
        <div className="flex gap-[10px]">
          <div
            onClick={() => onTableChange("mainTable")}
            className={`cursor-pointer flex items-center gap-[5px] py-[3px] px-[4px] border-t border-r border-l ${
              activeTable === "mainTable"
                ? "border-black border-b-solid border-b-[1px]"
                : "border-[#E5E7EA]"
            } rounded-[8px]`}
          >
            <img
              src="/icons/iconoir_eye.png"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="text-[#6D6D6D]">Progress izləmə</p>
          </div>
          <div className=" cursor-pointer flex items-center gap-[5px] py-[5px] px-[10px] border-t border-r border-l border-[#E5E7EA] rounded-[8px]">
            <img
              src="/icons/fluent_apps-list-20-regular.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#6D6D6D]">Plan & Faktiki</p>
          </div>
          <div>
            <div
              onClick={() => onTableChange("planTable")}
              className={`cursor-pointer flex transition-all  ease-in-out items-center gap-[5px] py-[5px] px-[10px] border-t border-r border-l border-[#E5E7EA] rounded-[8px] ${
                activeTable === "planTable"
                  ? " bg-[#AF2082] text-white"
                  : "bg-white text-black"
              }`}
            >
              <img
                src={`${
                  activeTable === "planTable"
                    ? "/icons/fluent_text-bullet-list-square-search-20-regular.png"
                    : "/icons/fluent_text-bullet-list-square-search-20-regular (2).png"
                }`}
                alt="Icon"
                className="w-[20px] h-[20px] transition-all  ease-in-out"
              />
              <p
                className={`transition-all  ease-in-out ${
                  activeTable === "planTable" ? " text-white" : "text-[#6D6D6D]"
                }`}
              >
                Detallar
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex items-center gap-[5px] py-[3px] px-[4px] border-t border-r border-l border-[#E5E7EA] rounded-[8px]">
            <img
              src="/icons/f7_status.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#403F3F]">Status</p>
          </div>
          <div className="flex items-center gap-[5px] py-[3px] px-[4px] border-t border-r border-l border-[#E5E7EA] rounded-[8px]">
            <img
              src="/icons/stash_data-date-duotone.png"
              alt=""
              className="w-[26px] h-[26px]"
            />
            <p className="text-[#403F3F]">Tarix</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[10px] ">
        <SummaryOptions />
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
