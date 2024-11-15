import React from "react";

// Mock data for the table with meaningful data
const mockData = [
  {
    username: "john_doe",
    headings: [
      "Sales Report Q1",
      "Marketing Strategy",
      "Product Launch",
      "Customer Feedback",
      "Team Meeting Notes",
      "Budget Allocation",
      "Client Engagement",
      "Project Timeline",
      "Employee Satisfaction",
    ],
  },
  {
    username: "jane_smith",
    headings: [
      "Sales Report Q2",
      "SEO Strategy",
      "Brand Development",
      "Customer Satisfaction",
      "Quarterly Budget",
      "Recruitment Plan",
      "Partnership Opportunities",
      "Product Development",
      "Employee Growth",
    ],
  },
  {
    username: "michael_jones",
    headings: [
      "Sales Report Q3",
      "Content Strategy",
      "New Product Features",
      "Client Reviews",
      "Budget Review",
      "Team Collaboration",
      "Marketing Campaign",
      "Training Programs",
      "Workplace Culture",
    ],
  },
  {
    username: "susan_lee",
    headings: [
      "Sales Report Q4",
      "Market Expansion",
      "Employee Onboarding",
      "Customer Support",
      "Quarterly Results",
      "HR Policies",
      "Product Quality",
      "Supplier Relations",
      "Innovation Initiatives",
    ],
  },
  {
    username: "david_wilson",
    headings: [
      "Sales Report FY",
      "Global Marketing",
      "Leadership Development",
      "Customer Retention",
      "Fiscal Planning",
      "Company Growth",
      "Technology Integration",
      "Cultural Diversity",
      "Sustainability Goals",
    ],
  },
];

const TableDetail = () => {
  return (
    <div className="overflow-x-auto w-full mt-[12px]">
      <table className="w-full min-w-max text-left border-separate border-spacing-y-0">
        <thead>
          <tr>
            <th className="bg-[#22385F] rounded-tl-[8px] border-0"></th>
            <th className="px-[21px] py-[6px] bg-[#22385F] text-white text-[18px] font-[500] text-center border-0 rounded-tr-[8px]">
              Username
            </th>
            {[...Array(9)].map((_, index) => (
              <th
                key={index}
                className={`text-center border-solid border-[1px] border-[#DFE0E2] rounded-tl-[8px] rounded-tr-[8px] px-[13px] py-[9px] bg-[#E8EEF8] text-[14px] font-[500] text-[#22385F] ${
                  index === 8 ? "rounded-tr-none" : ""
                }`}
              >
                Heading {index + 1}
              </th>
            ))}
            <th className="bg-[#22385F] rounded-tr-[8px] border-0"></th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td
                className={`bg-[#22385F] w-[9px] border-0 ${
                  rowIndex === 4 ? "rounded-bl-[8px]" : ""
                }`}
              ></td>

              <td className="px-4 py-2 bg-white text-center border-[#DFE0E2] border-[1px]">
                {row.username}
              </td>

              {row.headings.map((heading, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 text-center border-[#DFE0E2] border-[1px]"
                >
                  {heading}
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
  );
};

export default TableDetail;
