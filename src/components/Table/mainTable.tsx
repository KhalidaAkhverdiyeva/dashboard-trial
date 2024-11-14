const MainTable = () => {
  return (
    <div className="mt-[12px] w-full">
      <div className="overflow-x-auto max-w-full">
        <table className="min-w-[1600px] table-auto text-left border-separate border-spacing-y-0">
          <thead>
            <tr>
              <th className="bg-[#22385F] rounded-tl-[8px] border-0"></th>
              <th className="px-[21px] py-[6px] bg-[#22385F] text-white text-[18px] font-[500] text-center border-0 rounded-tr-[8px] whitespace-nowrap">
                İşə müraciyyət edən:
              </th>
              <th
                colSpan={4}
                className="text-center border-solid border-[1px] border-[#DFE0E2] bg-[#295197] text-[16px] font-[600] text-white rounded-tl-[8px] whitespace-nowrap"
              >
                Vakansiya Elanı
                <div className="grid grid-cols-4 gap-1">
                  <div className="text-[12px] text-white whitespace-nowrap">
                    Planlaşdırılmış Başlama:
                  </div>
                  <div className="text-[12px] text-white whitespace-nowrap">
                    Planlaşdırılmış bitmə :
                  </div>
                  <div className="text-[12px] text-white whitespace-nowrap">
                    Faktiki Başlama:
                  </div>
                  <div className="text-[12px] text-white whitespace-nowrap">
                    Faktiki Bitmə:
                  </div>
                </div>
              </th>
              {[...Array(4)].map((_, index) => (
                <th
                  key={index}
                  className="text-center border-solid border-[1px] border-[#DFE0E2] rounded-tl-[8px] rounded-tr-[8px] px-[13px] py-[9px] bg-[#E8EEF8] text-[14px] font-[500] text-[#22385F] whitespace-nowrap"
                >
                  Heading {index + 3}
                </th>
              ))}
              <th className="bg-[#22385F] rounded-tr-[8px] border-0"></th>
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
                <td className="px-4 py-2 bg-white text-center border-[#DFE0E2] border-[1px] whitespace-nowrap">
                  Row {rowIndex + 1}
                </td>

                {[...Array(4)].map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 text-[14px] font-[500] text-center border-solid border-[1px] border-[#FFFFFF] bg-[#E7EAF1] text-[#22385F] whitespace-nowrap"
                  >
                    01/Oct/22
                  </td>
                ))}

                {[...Array(4)].map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 text-center border-[#DFE0E2] border-[1px] text-[#22385F] whitespace-nowrap"
                  >
                    Row {rowIndex + 1} - {`Column ${colIndex + 1}`}
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
