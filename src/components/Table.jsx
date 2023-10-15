import { useState } from "react";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import ProgressBar from "./ProgressBar";

export default function Table({ tableData, thead }) {
  const [data, setData] = useState(tableData);
  const [checked, setChecked] = useState(false);

  const keys = Object.keys(data[0]);

  const handleSort = (itemName, order) => {
    const lastIndex = data.length - 1;
    if (order === "Inc") {
      const sortedData = [...data.slice(0, lastIndex)].sort(
        (a, b) => b[itemName] - a[itemName]
      );
      sortedData.push(data[lastIndex]);
      setData(sortedData);
    } else {
      const sortedData = [...data.slice(0, lastIndex)].sort(
        (a, b) => a[itemName] - b[itemName]
      );
      sortedData.push(data[lastIndex]);
      setData(sortedData);
    }
  };
  return (
    <>
      <div className=" lg:w-1/2 m-4  overflow-x-auto   overflow-y-hidden border-2 rounded-md ">
        <table className=" border-gray-100 table table-sm lg:table-lg md:table-md  text-lg overflow-hidden   rounded-none h-fit">
          {/* head */}
          <thead className="text-lg font-semibold">
            <tr>
              <th>Ad Insights</th>
            </tr>
          </thead>
          {thead === "Group" && checked ? (
            <ProgressBar tableData={tableData} />
          ) : (
            <>
              <thead className="text-lg font-semibold ">
                <tr>
                  <th>{thead}</th>

                  {keys.slice(2).map((item, index) => (
                    <th key={index}>
                      <div className="flex ">
                        <span>{item} </span>

                        <span>
                          <MdKeyboardArrowUp
                            className="cursor-pointer "
                            onClick={() => handleSort(item, "Inc")}
                          />

                          <MdKeyboardArrowDown
                            className="cursor-pointer "
                            onClick={() => handleSort(item, "Dec")}
                          />
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id}
                    className={item[thead] === "Total" ? "bg-gray-100" : ""}
                  >
                    <td>{item[thead]}</td>
                    <td>{item.Clicks}</td>
                    <td>{item.Cost}</td>
                    <td>{item.Conversions}</td>
                    <td>{item.Revenue}</td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
        {thead === "Group" ? (
          <div className="flex justify-end items-end w-full h-36 ">
            <input
              type="checkbox"
              className="toggle toggle-success"
              onChange={() => setChecked(!checked)}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
