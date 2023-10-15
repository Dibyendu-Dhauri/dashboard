import Table from "./Table";

import { tableData } from "../data/tableData";
import { genderTable } from "../data/genderTable";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-row overflow-hidden   ">
        <Table tableData={tableData} thead={"Campaigns"} />
        <Table tableData={genderTable} thead={"Group"} />
      </div>
    </>
  );
}
