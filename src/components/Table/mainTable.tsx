const MainTable = () => {
  return (
    <div className="mt-[12px]">
      <div className="overflow-x-auto w-full">
        <table className="table-auto text-left border-separate border-spacing-y-0 w-full min-w-max">
          <thead>
            <tr>
              <th className="bg-[#22385F] rounded-tl-[8px] border-0 max-h-[38px]"></th>
              <th
                rowSpan={2}
                className="px-[10px] py-[3px] bg-[#22385F] text-white text-[16px] font-[500] text-center border-0 rounded-tr-[8px] max-h-[38px] whitespace-nowrap"
              >
                İşə müraciyyət edən:
              </th>
              <th
                colSpan={4}
                className="text-center border border-[#4069B2] bg-[#295197] text-[16px] font-[600] text-white rounded-tr-[8px] rounded-tl-[8px] whitespace-nowrap"
              >
                Vakansiya Elanı
              </th>
              <th
                colSpan={3}
                className="text-center border border-[#55A5DB] bg-[#368AC2] text-[16px] font-[600] text-white rounded-tr-[8px] rounded-tl-[8px] whitespace-nowrap"
              >
                CV Dəyərləndirmə
              </th>
              <th
                colSpan={4}
                className="text-center border border-[#33B3A0] bg-[#219886] text-[16px] font-[600] text-white  rounded-tl-[8px] whitespace-nowrap"
              >
                Vakansiya Elanı
              </th>
              <th className="bg-[#22385F] rounded-tr-[8px] border-0 max-h-[38px]"></th>
            </tr>
            <tr>
              <th className="bg-[#22385F] border-0 "></th>
              {/* First Vakansiya Elanı columns */}
              <th className="text-[12px] font-[500] text-center px-[6px] text-white bg-[#295197] border border-[#4069B2] whitespace-nowrap">
                Planlaşdırılmış Başlama:
              </th>
              <th className="text-[12px] font-[500] text-center px-[6px] text-white bg-[#295197] border border-[#4069B2] whitespace-nowrap">
                Planlaşdırılmış bitmə:
              </th>
              <th className="text-[12px] font-[500] text-center px-[6px] text-white bg-[#295197] border border-[#4069B2] whitespace-nowrap">
                Faktiki Başlama:
              </th>
              <th className="text-[12px] font-[500] text-center px-[6px] text-white bg-[#295197] border border-[#4069B2] whitespace-nowrap">
                Faktiki Bitmə:
              </th>
              {/* Second Vakansiya Elanı columns */}
              <th className="text-[12px] font-[500] text-center px-[6px] text-white bg-[#368AC2] border border-[#55A5DB] whitespace-nowrap">
                Planlaşdırılmış Başlama:
              </th>
              <th className="text-[12px] font-[500] text-center px-[6px] text-white bg-[#368AC2] border border-[#55A5DB] whitespace-nowrap">
                Planlaşdırılmış bitmə:
              </th>
              <th className="flex gap-[3px] justify-center items-center text-[12px] font-[500] text-center px-[6px] text-white bg-[#368AC2] border border-[#55A5DB] whitespace-nowrap">
                Plan
                <img
                  src="/icons/Ellipse 12.png"
                  alt=""
                  className="w-[10px] h-[10px]"
                />
                Faktiki
                <img
                  src="/icons/Ellipse 13.png"
                  alt=""
                  className="w-[10px] h-[10px]"
                />
                <img
                  src="/icons/ooui_next-ltr.png"
                  alt=""
                  className="w-[10px] h-[10px] ml-[11px]"
                />
              </th>
              <th className="text-[12px] font-[500] text-center px-[6px] text-white bg-[#219886] border border-[#33B3A0] whitespace-nowrap">
                Planlaşdırılmış Başlama:
              </th>
              <th className="text-[12px] font-[500] text-center px-[6px] text-white bg-[#219886] border border-[#33B3A0] whitespace-nowrap">
                Planlaşdırılmış bitmə:
              </th>
              <th className="text-[12px] font-[500] text-center px-[6px] text-white bg-[#219886] border border-[#33B3A0] whitespace-nowrap">
                Faktiki Başlama:
              </th>
              <th className="text-[12px] font-[500] text-center px-[6px] text-white bg-[#219886] border border-[#33B3A0] whitespace-nowrap">
                Faktiki Bitmə:
              </th>

              <th className="bg-[#22385F] border-0 max-h-[38px]"></th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td
                  className={`bg-[#22385F] w-[9px] border-0 ${
                    rowIndex === 4 ? "rounded-bl-[8px]" : ""
                  }`}
                ></td>
                <td className="px-4 text-[#0057A8] py-2 bg-white text-center border-[#DFE0E2] border-[1px] whitespace-nowrap">
                  Row {rowIndex + 1}
                </td>
                {/* First Vakansiya Elanı data columns */}
                {[...Array(4)].map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 text-[14px] font-[500] text-center border border-[#FFFFFF] bg-[#E7EAF1] text-[#22385F] whitespace-nowrap"
                  >
                    01/Oct/22
                  </td>
                ))}
                {/* Second Vakansiya Elanı data columns */}
                {[...Array(2)].map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 text-[14px] font-[500] text-center border border-[#DFE0E2] text-[#22385F] whitespace-nowrap"
                  >
                    01/Oct/22
                  </td>
                ))}
                {/* PlanFaktiki column with progress bars */}
                <td className="px-4 py-2 text-[14px] font-[500] text-center border border-[#DFE0E2] text-[#22385F] whitespace-nowrap">
                  <div className="flex flex-col items-center w-[70%]">
                    <div className="flex w-full h-2 bg-gray-200 rounded mb-1 relative">
                      <div
                        className="h-2 bg-[#22385F] rounded"
                        style={{ width: "75%" }}
                      ></div>
                      <span className="absolute right-[-30px] bottom-[-5px] text-[10px] text-[#22385F] ">
                        75%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded relative">
                      <div
                        className="h-2 bg-[#4F7FC6] rounded"
                        style={{ width: "50%" }}
                      ></div>
                      <span className="absolute right-[-30px] bottom-[-5px] text-[10px] text-[#4F7FC6] ">
                        50%
                      </span>
                    </div>
                  </div>
                </td>
                {[...Array(4)].map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 text-[14px] font-[500] text-center border border-[#FFFFFF] bg-[#DCEEEC] text-[#22385F] whitespace-nowrap"
                  >
                    01/Oct/22
                  </td>
                ))}

                <td
                  className={`bg-[#22385F] w-[9px] border-0 ${
                    rowIndex === 4 ? "rounded-br-[8px]" : ""
                  }`}
                ></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainTable;
