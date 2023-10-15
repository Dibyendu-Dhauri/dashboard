import { BsChevronDown } from "react-icons/bs";

export default function Submit() {
  return (
    <div className="absolute h-full w-full   flex items-center justify-center backdrop-blur-md  ">
      <div className=" border-2 flex  flex-col items-center justify-center  h-36 w-72 shadow-lg">
        <span className="bg-blue-400 w-10 h-10 rounded-full  text-white text-lg font-bold  flex   items-center justify-center">
          {" "}
          <BsChevronDown className="w-10 h-8 " />
        </span>

        <span className="text-lg font-bold mt-4">Submitted</span>
      </div>
    </div>
  );
}
