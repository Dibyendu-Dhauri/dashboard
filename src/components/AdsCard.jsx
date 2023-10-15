import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

export default function AdsCard({ adTypes, handleChecked, adChecked }) {
  return (
    <div className=" w-96 lg:w-[400px] h-[650px] rounded-lg border-1 border-gray-300 shadow-lg m-7 flex flex-col ">
      {/* Screen */}
      <div className="ml-12 mt-6">
        <input
          type="checkbox"
          className="checkbox  "
          checked={adTypes === "Text" ? adChecked.Text : adChecked.Media}
          onChange={() =>
            adTypes === "Media" ? handleChecked("Media") : handleChecked("Text")
          }
        />
      </div>

      <div
        className="relative h-[470px] bg-white mt-12 mx-12 rounded-tl-lg rounded-tr-lg overflow-hidden border-2
      border-b-0"
      >
        {/* circle */}
        <span className=" absolute top-2 left-[130px] w-8 h-8 rounded-full  border-2 border-gray-400"></span>

        <div className=" h-[470px] bg-white mt-12 mx-2 rounded-lg overflow-hidden border-2 border-b-0">
          {/* nav */}
          <div
            className="flex items-center justify-around
          bg-gray-100 h-10"
          >
            <span>
              <RxHamburgerMenu />
            </span>
            <span className="bg-gray-300  h-2 w-[100px]"></span>
            <span>
              <AiOutlineSearch />
            </span>
          </div>

          <span className="mt-2 mx-2 bg-gray-200  h-2 block"></span>
          <span className="mt-2 mx-2 bg-gray-200  h-2 block"></span>
          <span className="mt-2 mx-2 bg-gray-200  h-2 block"></span>
          <span className="mt-2 mx-2 bg-gray-200  h-2 block w-1/2"></span>
          {/* img */}
          {adTypes === "Media" ? (
            <div className="flex mt-6 mx-2">
              <img src="./img1.jpg" alt="image" className=" w-[150px] " />
              <div className="ml-2">
                <img src="./img2.jpg" alt="image2" className="w-[100px]" />
                <img src="./img3.jpg" alt="image2" className="w-[100px]" />
              </div>
            </div>
          ) : (
            <div className="mt-6 mx-2 ">
              <img src="./text.jpg" alt="text" className="" />

              <span className="mt-2  bg-gray-200  h-2 block"></span>
              <span className="mt-2  bg-gray-200  h-2 block"></span>
              <span className="mt-2  bg-gray-200  h-2 block"></span>
              <span className="mt-2  bg-gray-200  h-2 block w-1/2"></span>
            </div>
          )}

          {/* text */}
        </div>
      </div>

      <div className="flex justify-center items-center flex-col bg-gray-100 h-[135px]  ">
        <span>Create</span>
        <span className=" text-lg font-bold">{adTypes} ad</span>
      </div>
    </div>
  );
}
