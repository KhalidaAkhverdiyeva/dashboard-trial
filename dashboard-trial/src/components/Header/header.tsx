const Header = () => {
  return (
    <div className=" pl-[40px] flex flex-col ">
      <div className="flex justify-between">
        <ul className="flex gap-[10px]">
          <li className="flex text-[#6D6D6D] py-[10px] px-[10px]">
            Şəhər
            <img
              src="/src/assets/icons/tabler_caret-down-filled (3).png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </li>
          <li className="flex text-[#6D6D6D] py-[10px] px-[10px]">
            İl
            <img
              src="/src/assets/icons/tabler_caret-down-filled (3).png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </li>
          <li className="flex text-[#6D6D6D] py-[10px] px-[10px]">
            Ay
            <img
              src="/src/assets/icons/tabler_caret-down-filled (3).png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </li>
          <li className="flex text-[#6D6D6D] py-[10px] px-[10px]">
            Vəzifə
            <img
              src="/src/assets/icons/tabler_caret-down-filled (3).png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </li>
          <li className="flex text-[#6D6D6D] py-[10px] px-[10px]">
            Şirkət
            <img
              src="/src/assets/icons/tabler_caret-down-filled (3).png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </li>
          <li className="flex text-[#6D6D6D] py-[10px] px-[10px]">
            HR mütəxəssis
            <img
              src="/src/assets/icons/tabler_caret-down-filled (3).png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </li>
        </ul>
        <div className="flex items-center gap-[10px]">
          <div className="py-[10px] flex justify-center items-center px-[14px] rounded-[8px] border-solid border-[1px] border-[#E5E7EA]">
            <img
              src="src/assets/icons/ri_reset-left-line (1).png"
              alt=""
              className="w-[20px] h-[20px]"
            />
          </div>
          <div className="flex gap-[5px] py-[12px] px-[14px] bg-[#22385F] rounded-[8px] border-solid border-[1px] border-[#E5E7EA]">
            <p className="text-[#FFFFFF] font-[500]">Layihə əlavə et</p>
            <img
              src="src/assets/icons/si_add-fill (1).png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="flex items-center gap-[5px] py-[12px] px-[14px]  rounded-[8px] border-solid border-[1px] border-[#E5E7EA]">
            <img
              src="src/assets/icons/vscode-icons_file-type-excel (1).png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#403F3F] font-[500]">Upload.xlsx</p>
          </div>
          <img
            src="src/assets/icons/ion_notifications (1).png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <div className="flex flex-col justify-center items-center">
            <img
              src="src/assets/icons/WhatsApp Image 2024-05-31 at 14.59 2 (2).png"
              alt=""
              className="w-[32px] h-[32px]"
            />
            <img
              src="src/assets/icons/tabler_caret-down-filled (4).png"
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
              src="src/assets/icons/iconoir_eye.png"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <p className="text-[#6D6D6D] ">Progress izləmə</p>
          </div>
          <div className="flex items-center gap-[5px] py-[5px] px-[10px] border-solid border-[1px] border-[#E5E7EA] rounded-[8px]">
            <img
              src="src/assets/icons/fluent_apps-list-20-regular.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#6D6D6D] ">Plan & Faktiki</p>
          </div>
          <div className="flex items-center gap-[5px] py-[5px] bg-[#AF2082] px-[10px] border-solid border-[1px] border-[#E5E7EA] rounded-[8px]">
            <img
              src="src/assets/icons/fluent_text-bullet-list-square-search-20-regular.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[white] ">Detallar</p>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex items-center gap-[5px] py-[3px] px-[4px] ">
            <img
              src="src/assets/icons/f7_status.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#403F3F] ">Status</p>
          </div>
          <div className="flex items-center gap-[5px] py-[3px] px-[4px]">
            <img
              src="src/assets/icons/stash_data-date-duotone.png"
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
              src="src/assets/icons/Ellipse 16.png"
              alt=""
              className="w-[10px] h-[10px]"
            />
            <p className="text-[#22385F] text-[14px] ">Icmal</p>
          </div>
          <div className="flex items-center gap-[5px] py-[5px] px-[10px] border-solid border-[1px] border-[#E5E7EA] rounded-[8px]">
            <img
              src="src/assets/icons/fluent_apps-list-20-regular.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#6D6D6D] text-[14px] ">Tam</p>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex items-center gap-[5px] py-[3px] px-[4px] ">
            <img
              src="src/assets/icons/f7_status.png"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#403F3F] ">Status</p>
          </div>
          <div className="flex items-center gap-[5px] py-[3px] px-[4px]">
            <img
              src="src/assets/icons/stash_data-date-duotone.png"
              alt=""
              className="w-[26px] h-[26px]"
            />
            <p className="text-[#403F3F] ">Tarix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
