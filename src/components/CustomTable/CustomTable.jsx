import React from "react";

const CustomTable = ({ tableData }) => {
  return (
    <>
      <table className="table table-bordered">
        <thead className="table-secondary">
          <tr>
            {Object.keys(tableData[0])?.map((el, index) => (
              <th scope="col" key={index}>
                {el.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((el, index) => (
            <tr key={index}>
              {Object.values(el).map((el, index) => (
                <td key={index}>{el}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomTable;
