// ComparisonTable.jsx
import React from "react";

const ComparisonTable = ({ comparisonPoints }) => {
  return (
    <div className="overflow-x-auto p-4 lg:w-[50%] lg:mx-auto lg:ml-[8%] md:w-full lg:shadow-lg md:shadow-md shadow-gray-400">
      <h1 className="text-2xl font-title font-extrabold text-PeriwinklePurpleDark mb-4 text-center">Service Comparison</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm font-body">
        {/* Table Header */}
        <thead>
          <tr className="bg-PeriwinklePurpleDark font-title text-white">
            <th className="border border-gray-300 px-4 py-2">Service</th>
            <th className="border border-gray-300 px-4 py-2">Other Company</th>
            <th className="border border-gray-300 px-4 py-2">Sky Need Solution </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {comparisonPoints.length > 0 ? (
            comparisonPoints.map((point, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {point.service}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {point.localCompany}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {point.sky}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="text-center text-gray-500 py-4"
              >
                No comparison data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
