import "react-circular-progressbar/dist/styles.css";
import { PieChart } from "react-minimal-pie-chart";

export default function ProgressBar() {
  const data = [
    { title: "Male", value: 40, color: "#0088FE" },
    { title: "Female", value: 35, color: "#00C49F" },
    { title: "Unknown", value: 25, color: "#FFBB28" },
  ];

  return (
    <div className="flex  items-center justify-around mt-3 ">
      <div className="">
        <PieChart
          data={data}
          totalValue={100} // The total value for 100%
          lineWidth={30} // Adjust the lineWidth to create a donut effect
          // label={({ dataEntry }) => `${dataEntry.title}: ${dataEntry.value}%`}
          labelPosition={100 - 40 / 2} // Position the labels inside the donut
          labelStyle={{
            fontSize: "1px",
            fill: "#fff",
          }}
          startAngle={-90}
        />
      </div>
      <div className="flex flex-col ">
        <div className="flex items-center">
          <span
            className="bg-blue-500 
      rounded p-2 mr-5 w-9 "
          />

          <span>Male 40%</span>
        </div>
        <div className="flex items-center">
          <span className="bg-teal-400 text-white rounded p-2 mr-5 w-9" />
          <span>Female 35%</span>
        </div>
        <div className="flex items-center">
          <span className="bg-yellow-400 text-white rounded p-2 mr-5 w-9" />
          <span>Unknown 25%</span>
        </div>
      </div>
    </div>
  );
}
