import { mockData } from "../../static/mockspidata";

const PlanTable = () => {
  const getSPIColor = (value: number): string => {
    if (value > 1) {
      return "text-[#38C782]";
    } else if (value >= 0.9) {
      return "text-[#EEBE17]";
    } else {
      return "text-[#E92626]";
    }
  };

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
                colSpan={2}
                className="text-center border border-[#4069B2] bg-[#295197] text-[16px] font-[600] text-white rounded-tr-[8px] rounded-tl-[8px] whitespace-nowrap"
              >
                Vakansiya Elanı
              </th>
              <th
                colSpan={2}
                className="text-center border border-[#55A5DB] bg-[#368AC2] text-[16px] font-[600] text-white rounded-tr-[8px] rounded-tl-[8px] whitespace-nowrap"
              >
                CV Dəyərləndirmə
              </th>
              <th
                colSpan={2}
                className="text-center border border-[#32B19F] bg-[#219886] text-[16px] font-[600] text-white  rounded-tr-[8px]  rounded-tl-[8px] whitespace-nowrap"
              >
                Imtahan
              </th>
              <th
                colSpan={2}
                className="text-center border border-[#55A5DB] bg-[#177668] text-[16px] font-[600] text-white  rounded-tl-[8px] whitespace-nowrap"
              >
                Mərhələ
              </th>

              <th className="bg-[#22385F] rounded-tr-[8px] border-0 max-h-[38px]"></th>
            </tr>
            <tr>
              <th className="bg-[#22385F] border-0"></th>

              <th className="w-[160px] text-[12px] font-[500] text-center px-[6px] text-white bg-[#295197] border border-[#4069B2] whitespace-nowrap">
                <div className="flex gap-[3px] justify-center items-center">
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
                </div>
              </th>
              <th className="w-[160px] flex h-[22px] gap-[8px] justify-center items-center text-[12px] font-[500] text-center px-[6px] text-white bg-[#295197] border border-[#4069B2] whitespace-nowrap">
                SPI
                <div className="flex items-center justify-center gap-[2px] ">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#C51212] rounded-full border-solid border-[#E92626]"></div>
                  <span className="text-[#E92626] text-[10px]">{">0,9"}</span>
                </div>
                <div className="flex items-center justify-center  gap-[2px]">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#EEBE17] rounded-full border-solid border-[#F6D86B]"></div>
                  <span className="text-[#EEBE17] text-[10px]">{"0,9-1"}</span>
                </div>
                <div className="flex items-center justify-center gap-[2px]">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#47E69A] rounded-full border-solid border-[#38C782]"></div>
                  <span className="text-[#38C782] text-[10px]">{">0,1"}</span>
                </div>
              </th>
              <th className="w-[160px] text-[12px] font-[500] text-center px-[6px] text-white bg-[#368AC2] border border-[#55A5DB] whitespace-nowrap">
                <div className="flex gap-[3px] justify-center items-center">
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
                </div>
              </th>
              <th className="w-[160px] flex h-[22px] gap-[8px] justify-center items-center text-[12px] font-[500] text-center px-[6px] text-white bg-[#368AC2] border border-[#55A5DB] whitespace-nowrap">
                SPI
                <div className="flex items-center justify-center gap-[2px] ">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#C51212] rounded-full border-solid border-[#E92626]"></div>
                  <span className="text-[#E92626] text-[10px]">{">0,9"}</span>
                </div>
                <div className="flex items-center justify-center  gap-[2px]">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#EEBE17] rounded-full border-solid border-[#F6D86B]"></div>
                  <span className="text-[#EEBE17] text-[10px]">{"0,9-1"}</span>
                </div>
                <div className="flex items-center justify-center gap-[2px]">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#47E69A] rounded-full border-solid border-[#38C782]"></div>
                  <span className="text-[#38C782] text-[10px]">{">0,1"}</span>
                </div>
              </th>
              <th className="w-[160px] text-[12px] font-[500] text-center px-[6px] text-white bg-[#219886] border border-[#32B19F] whitespace-nowrap">
                <div className="flex gap-[3px] justify-center items-center">
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
                </div>
              </th>
              <th className="w-[160px] flex h-[22px] gap-[8px] justify-center items-center text-[12px] font-[500] text-center px-[6px] text-white bg-[#219886] border border-[#32B19F] whitespace-nowrap">
                SPI
                <div className="flex items-center justify-center gap-[2px] ">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#C51212] rounded-full border-solid border-[#E92626]"></div>
                  <span className="text-[#E92626] text-[10px]">{">0,9"}</span>
                </div>
                <div className="flex items-center justify-center  gap-[2px]">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#EEBE17] rounded-full border-solid border-[#F6D86B]"></div>
                  <span className="text-[#EEBE17] text-[10px]">{"0,9-1"}</span>
                </div>
                <div className="flex items-center justify-center gap-[2px]">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#47E69A] rounded-full border-solid border-[#38C782]"></div>
                  <span className="text-[#38C782] text-[10px]">{">0,1"}</span>
                </div>
              </th>
              <th className="w-[160px] text-[12px] font-[500] text-center px-[6px] text-white bg-[#177668] border border-[#55A5DB] whitespace-nowrap">
                <div className="flex gap-[3px] justify-center items-center">
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
                </div>
              </th>
              <th className="w-[160px] flex h-[22px] gap-[8px] justify-center items-center text-[12px] font-[500] text-center px-[6px] text-white bg-[#177668] border border-[#55A5DB] whitespace-nowrap">
                SPI
                <div className="flex items-center justify-center gap-[2px] ">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#C51212] rounded-full border-solid border-[#E92626]"></div>
                  <span className="text-[#E92626] text-[10px]">{">0,9"}</span>
                </div>
                <div className="flex items-center justify-center  gap-[2px]">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#EEBE17] rounded-full border-solid border-[#F6D86B]"></div>
                  <span className="text-[#EEBE17] text-[10px]">{"0,9-1"}</span>
                </div>
                <div className="flex items-center justify-center gap-[2px]">
                  <div className="w-[10px] h-[10px] border-[1px] bg-[#47E69A] rounded-full border-solid border-[#38C782]"></div>
                  <span className="text-[#38C782] text-[10px]">{">0,1"}</span>
                </div>
              </th>

              <th className="bg-[#22385F] border-0 max-h-[38px]"></th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, rowIndex) => (
              <tr key={row.id}>
                <td
                  className={`bg-[#22385F] w-[9px] border-0 ${
                    rowIndex === 4 ? "rounded-bl-[8px]" : ""
                  }`}
                ></td>
                <td className="px-4 text-[#0057A8] py-2 bg-white text-center border-[#DFE0E2] border-[1px] whitespace-nowrap">
                  {row.name}
                </td>

                <td className="px-4 py-2 text-[14px] bg-[#E9ECF3] font-[500] text-center border border-white text-[#22385F] whitespace-nowrap">
                  <div className="flex flex-col items-center w-[70%]">
                    <div className="flex w-full h-2 bg-white rounded mb-1 relative">
                      <div
                        className="h-2 bg-[#22385F] rounded"
                        style={{
                          width: `${(row.planValue / 100) * 100}%`, // Plan value as percentage
                        }}
                      ></div>
                      <span className="absolute right-[-30px] bottom-[-5px] text-[10px] text-[#22385F] ">
                        {row.planValue}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white rounded relative">
                      <div
                        className="h-2 bg-[#4F7FC6] rounded"
                        style={{
                          width: `${(row.faktikiValue / 100) * 100}%`, // Faktiki value as percentage
                        }}
                      ></div>
                      <span className="absolute right-[-30px] bottom-[-5px] text-[10px] text-[#4F7FC6] ">
                        {row.faktikiValue}%
                      </span>
                    </div>
                  </div>
                </td>
                <td
                  className={`text-[14px] font-[500] text-center py-2 bg-[#E9ECF3] border border-white ${getSPIColor(
                    row.spiValue
                  )}`}
                >
                  {row.spiValue}
                </td>
                <td className="px-4 py-2 text-[14px] bg-white font-[500] text-center border border-[#DFE0E2] text-[#22385F] whitespace-nowrap">
                  <div className="flex flex-col items-center w-[70%]">
                    <div className="flex w-full h-2 bg-white rounded mb-1 relative">
                      <div
                        className="h-2 bg-[#22385F] rounded"
                        style={{
                          width: `${(row.planValue / 100) * 100}%`, // Plan value as percentage
                        }}
                      ></div>
                      <span className="absolute right-[-30px] bottom-[-5px] text-[10px] text-[#22385F] ">
                        {row.planValue}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white rounded relative">
                      <div
                        className="h-2 bg-[#4F7FC6] rounded"
                        style={{
                          width: `${(row.faktikiValue / 100) * 100}%`, // Faktiki value as percentage
                        }}
                      ></div>
                      <span className="absolute right-[-30px] bottom-[-5px] text-[10px] text-[#4F7FC6] ">
                        {row.faktikiValue}%
                      </span>
                    </div>
                  </div>
                </td>
                <td
                  className={`text-[14px] font-[500] text-center py-2 bg-white border border-[#DFE0E2] ${getSPIColor(
                    row.spiValue
                  )}`}
                >
                  {row.spiValue}
                </td>
                <td className="px-4 py-2 text-[14px] bg-[#E9ECF3] font-[500] text-center border border-[white] text-[#22385F] whitespace-nowrap">
                  <div className="flex flex-col items-center w-[70%]">
                    <div className="flex w-full h-2 bg-white rounded mb-1 relative">
                      <div
                        className="h-2 bg-[#22385F] rounded"
                        style={{
                          width: `${(row.planValue / 100) * 100}%`, // Plan value as percentage
                        }}
                      ></div>
                      <span className="absolute right-[-30px] bottom-[-5px] text-[10px] text-[#22385F] ">
                        {row.planValue}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white rounded relative">
                      <div
                        className="h-2 bg-[#4F7FC6] rounded"
                        style={{
                          width: `${(row.faktikiValue / 100) * 100}%`, // Faktiki value as percentage
                        }}
                      ></div>
                      <span className="absolute right-[-30px] bottom-[-5px] text-[10px] text-[#4F7FC6] ">
                        {row.faktikiValue}%
                      </span>
                    </div>
                  </div>
                </td>
                <td
                  className={`text-[14px] font-[500] text-center py-2 bg-white border border-[#DFE0E2] ${getSPIColor(
                    row.spiValue
                  )}`}
                >
                  {row.spiValue}
                </td>
                <td className="px-4 py-2 text-[14px] bg-[#E9ECF3] font-[500] text-center border border-[white] text-[#22385F] whitespace-nowrap">
                  <div className="flex flex-col items-center w-[70%]">
                    <div className="flex w-full h-2 bg-white rounded mb-1 relative">
                      <div
                        className="h-2 bg-[#22385F] rounded"
                        style={{
                          width: `${(row.planValue / 100) * 100}%`, // Plan value as percentage
                        }}
                      ></div>
                      <span className="absolute right-[-30px] bottom-[-5px] text-[10px] text-[#22385F] ">
                        {row.planValue}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-white rounded relative">
                      <div
                        className="h-2 bg-[#4F7FC6] rounded"
                        style={{
                          width: `${(row.faktikiValue / 100) * 100}%`, // Faktiki value as percentage
                        }}
                      ></div>
                      <span className="absolute right-[-30px] bottom-[-5px] text-[10px] text-[#4F7FC6] ">
                        {row.faktikiValue}%
                      </span>
                    </div>
                  </div>
                </td>
                <td
                  className={`text-[14px] font-[500] text-center py-2 bg-[#E9ECF3] border border-[white] ${getSPIColor(
                    row.spiValue
                  )}`}
                >
                  {row.spiValue}
                </td>

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

export default PlanTable;
