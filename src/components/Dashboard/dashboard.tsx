import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDashboard = () => {
    setIsOpen(true);
  };
  const closeDashboard = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative h-screen flex">
      <div
        className={`fixed top-0 left-0 h-full bg-[#172847] text-white transform transition-all duration-300 ease-in-out z-20 ${
          isOpen ? "w-[290px]" : "w-[40px]"
        }`}
        onClick={openDashboard}
      >
        <div
          className={`mt-[50px] w-full flex flex-col justify-center ${
            isOpen ? "px-[10px]" : "px-[0px]"
          }`}
        >
          <div className={`flex mx-[-2px] ${isOpen ? "w-full" : ""}`}>
            <img
              src="/src/assets/icons/Planlama (1).png"
              alt="menuIcon"
              className=" w-[44px] h-[44px]"
            />

            {isOpen && (
              <div className="flex items-center w-full justify-between">
                <p className="text-[14px] text-[#C9CACB]">Menu</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeDashboard();
                  }}
                >
                  <img
                    src="/src/assets/icons/cuida_x-outline (1).png"
                    alt="xIcon"
                    className="w-[20px] h-[20px]"
                  />
                </button>
              </div>
            )}
          </div>

          {isOpen && (
            <div className="flex items-center gap-[10px] bg-[#223250] rounded-[8px] px-[10px] py-[5px] mt-[8px]">
              <div className="mx-[-2px]">
                <img
                  src="/src/assets/icons/bitcoin-icons_search-outline (1).png"
                  alt="searchIcon"
                  className="  w-[20px] h-[20px] "
                />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="text-[#5B677E] bg-transparent focus:outline-none"
              />
            </div>
          )}
          <div
            className={`flex justify-center text-[#C9CACB] px-[10px] py-[6px] gap-[10px] mx-[-2px] ${
              isOpen ? "w-full mt-[20px]" : "mt-[35px]"
            }`}
          >
            <img
              src="/src/assets/icons/carbon_sales-ops (1).png"
              alt="xIcon"
              className="w-[20px] h-[20px]"
            />

            {isOpen && (
              <div className="flex items-center w-full justify-between">
                <p className="text-[14px] text-[#C9CACB]">Satınalma İcmalı</p>
                <button>
                  <img
                    src="/src/assets/icons/Ellipse 18 (1).png"
                    alt="xIcon"
                    className="w-[10px] h-[10px]"
                  />
                </button>
              </div>
            )}
          </div>
          <div
            className={`flex flex-col text-[#C9CACB] rounded-[8px]  py-[6px]  ${
              isOpen ? " mt-[20px] bg-[#1F3D74]" : "mt-[30px]"
            }`}
          >
            <div className="flex gap-[10px] w-full px-[10px]">
              <img
                src="/src/assets/icons/grommet-icons_plan (2).png"
                alt="xIcon"
                className="w-[20px] h-[20px]"
              />
              {isOpen && (
                <div className="flex items-center w-full justify-between">
                  <div className="flex gap-[7px] items-center">
                    <p className="text-[14px] text-[#C9CACB]">Planlama</p>
                    <img
                      src="/src/assets/icons/prime_sort-down-fill (1).png"
                      alt="xIcon"
                      className="w-[16px] h-[16px] mt-[3px]"
                    />
                  </div>

                  <button>
                    <img
                      src="/src/assets/icons/Ellipse 18 (1).png"
                      alt="xIcon"
                      className="w-[10px] h-[10px]"
                    />
                  </button>
                </div>
              )}
            </div>
            <div className="py-[20px]">
              <div
                className={`flex justify-center gap-[10px] w-full bg-[#275EC3] ${
                  isOpen ? "px-[23px]" : ""
                }  py-[5px]`}
              >
                <img
                  src="/src/assets/icons/Frame 427320129.png"
                  alt="xIcon"
                  className="w-[14px] h-[20px]"
                />
                {isOpen && (
                  <div className="flex items-center w-full justify-between">
                    <div className="flex gap-[7px] items-center">
                      <p className="text-[12px] text-[#C9CACB]">
                        Master Schedule
                      </p>
                    </div>

                    <button>
                      <img
                        src="/src/assets/icons/Ellipse 18 (1).png"
                        alt="xIcon"
                        className="w-[6px] h-[6px]"
                      />
                    </button>
                  </div>
                )}
              </div>
              <div
                className={`flex justify-center gap-[10px] w-full  ${
                  isOpen ? "px-[23px]" : "bg-[#1A3361] "
                } py-[5px]`}
              >
                <img
                  src="/src/assets/icons/mingcute_government-line (2).png"
                  alt="xIcon"
                  className="w-[16px] h-[19px]"
                />
                {isOpen && (
                  <div className="flex items-center w-full justify-between">
                    <div className="flex gap-[7px] items-center">
                      <p className="text-[12px] text-[#C9CACB]">
                        Dövlət qürumları ilə iş
                      </p>
                    </div>

                    <button>
                      <img
                        src="/src/assets/icons/Ellipse 18 (1).png"
                        alt="xIcon"
                        className="w-[6px] h-[6px]"
                      />
                    </button>
                  </div>
                )}
              </div>
              <div
                className={`flex justify-center gap-[10px] w-full  ${
                  isOpen ? "px-[23px]" : "pl-[7px] bg-[#1A3361] "
                } py-[5px]`}
              >
                <img
                  src="/src/assets/icons/carbon_report-data (1).png"
                  alt="xIcon"
                  className="w-[19px] h-[19px]"
                />
                {isOpen && (
                  <div className="flex items-center w-full justify-between">
                    <div className="flex gap-[7px] items-center">
                      <p className="text-[12px] text-[#C9CACB]">Hesabat</p>
                    </div>

                    <button>
                      <img
                        src="/src/assets/icons/Ellipse 18 (1).png"
                        alt="xIcon"
                        className="w-[6px] h-[6px]"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={`flex flex-col ${isOpen ? "" : "gap-[10px]"}`}>
            <div
              className={`flex justify-center text-[#C9CACB] px-[10px] py-[6px] gap-[10px] mx-[-2px] ${
                isOpen ? "w-full mt-[10px]" : ""
              }`}
            >
              <img
                src="/src/assets/icons/icon-park-outline_sales-report (2).png"
                alt="xIcon"
                className="w-[20px] h-[20px]"
              />

              {isOpen && (
                <div className="flex items-center w-full justify-between">
                  <p className="text-[14px] text-[#C9CACB]">Maliyyə</p>
                  <button>
                    <img
                      src="/src/assets/icons/Ellipse 18 (1).png"
                      alt="xIcon"
                      className="w-[10px] h-[10px]"
                    />
                  </button>
                </div>
              )}
            </div>
            <div
              className={`flex justify-center text-[#C9CACB] px-[10px] py-[6px] gap-[10px] mx-[-2px] ${
                isOpen ? "w-full mt-[10px]" : ""
              }`}
            >
              <img
                src="/src/assets/icons/mdi_company (2).png"
                alt="xIcon"
                className="w-[20px] h-[20px]"
              />

              {isOpen && (
                <div className="flex items-center w-full justify-between">
                  <p className="text-[14px] text-[#C9CACB]">
                    Şirkət Məlumatları
                  </p>
                  <button>
                    <img
                      src="/src/assets/icons/Ellipse 18 (1).png"
                      alt="xIcon"
                      className="w-[10px] h-[10px]"
                    />
                  </button>
                </div>
              )}
            </div>
            <div
              className={`flex justify-center text-[#C9CACB] px-[10px] py-[6px] gap-[10px] mx-[-2px] ${
                isOpen ? "w-full mt-[10px]" : ""
              }`}
            >
              <img
                src="/src/assets/icons/teenyicons_gantt-chart-solid (2).png"
                alt="xIcon"
                className="w-[20px] h-[20px]"
              />

              {isOpen && (
                <div className="flex items-center w-full justify-between">
                  <p className="text-[14px] text-[#C9CACB]">İş qrafiki</p>
                  <button>
                    <img
                      src="/src/assets/icons/Ellipse 18 (1).png"
                      alt="xIcon"
                      className="w-[10px] h-[10px]"
                    />
                  </button>
                </div>
              )}
            </div>
            <div
              className={`flex justify-center text-[#C9CACB] px-[10px] py-[6px] gap-[10px] mx-[-2px] ${
                isOpen ? "w-full mt-[10px]" : ""
              }`}
            >
              <img
                src="/src/assets/icons/icon-park-outline_folder-quality (1).png"
                alt="xIcon"
                className="w-[20px] h-[20px]"
              />

              {isOpen && (
                <div className="flex items-center w-full justify-between">
                  <p className="text-[14px] text-[#C9CACB]">Keyfiyyət</p>
                  <button>
                    <img
                      src="/src/assets/icons/Ellipse 18 (1).png"
                      alt="xIcon"
                      className="w-[10px] h-[10px]"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;