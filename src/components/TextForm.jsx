import { useNavigate, useLocation } from "react-router-dom";

import Submit from "./Submit";
import { useState } from "react";

export default function TextForm() {
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathnameSegments = location.pathname.split("/");

  const lastSegment = pathnameSegments[pathnameSegments.length - 1];
  const timer = () => {
    setTimeout(() => {
      setSubmit(false);
      navigate("/createAds");
    }, 600);
  };
  const handleSubmit = () => {
    setSubmit(true);
    timer();
  };

  return (
    <div className="m-4 border-2  relative  font-semibold">
      {submit && <Submit />}

      <>
        <span className="block text-lg m-4">Create Text and Media</span>
        <div className=" flex mb-4 mx-4 ">
          <div className="mr-2 w-1/2 flex flex-col ">
            <label className=" text-lg font-medium text-gray-700 mb-2">
              Heading 01
            </label>
            <input
              type="text"
              placeholder="Add a heading that would make users interested"
              className="input input-bordered  "
            />

            <label className=" text-lg font-medium text-gray-700 mb-2">
              Heading 02
            </label>
            <input
              type="text"
              placeholder="Add a heading that would make users interested"
              className="input input-bordered  "
            />
          </div>

          <div className="w-1/2 flex flex-col ">
            <label className=" text-lg font-medium text-gray-700 mb-2">
              Description 01
            </label>
            <textarea
              className="textarea textarea-bordered h-[8.3rem] "
              style={{ resize: "none" }}
              placeholder="Add Primary text to help users understand more about your products, servies or offers"
            />
          </div>
        </div>
        {/* three */}
        {lastSegment === "media" && (
          <>
            <div className="flex   mb-4 mx-4">
              <div className="  w-1/3 flex flex-col">
                <label className=" text-lg font-medium text-gray-700 mb-2">
                  Landscape Marketing Image(1.9.1)
                </label>
                <input
                  type="text"
                  placeholder="Add Your Business Name"
                  className="input input-bordered  "
                />
              </div>
              <div className="mx-2 w-1/3 flex flex-col">
                <label className=" text-lg font-medium text-gray-700 mb-2">
                  Portrait Marketing Image(4.5)
                </label>
                <input
                  type="text"
                  placeholder="Select a label that best suits your ad"
                  className="input input-bordered  "
                />
              </div>
              <div className=" w-1/3 flex flex-col">
                <label className=" text-lg font-medium text-gray-700 mb-2">
                  Square Marketing Image(1.1)
                </label>
                <input
                  type="text"
                  placeholder="Select a label that best suits your ad"
                  className="input input-bordered  "
                />
              </div>
            </div>
            <div className="  mx-4  flex flex-col mb-4">
              <label className=" text-lg font-medium text-gray-700 mb-2">
                Video URL
              </label>
              <input
                type="text"
                placeholder="Add Your URL of the landing page you want to redirect users to"
                className="input input-bordered "
              />
            </div>
          </>
        )}
        <div className="flex mb-4 mx-4 ">
          <div className=" mr-2   w-1/2 flex flex-col">
            <label className=" text-lg font-medium text-gray-700 mb-2">
              Buiseness Name
            </label>
            <input
              type="text"
              placeholder="Add Your Business Name"
              className="input input-bordered  "
            />
          </div>
          <div className="  w-1/2 flex flex-col">
            <label className=" text-lg font-medium text-gray-700 mb-2">
              Buiseness Lebel
            </label>
            <input
              type="text"
              placeholder="Select a label that best suits your ad"
              className="input input-bordered  "
            />
          </div>
        </div>
        <div className="  mx-4  flex flex-col  ">
          <label className=" text-lg font-medium text-gray-700 mb-2">
            Website URL
          </label>
          <input
            type="text"
            placeholder="Add Your URL of the landing page you want to redirect users to"
            className="input input-bordered  "
          />
        </div>
        <div className="flex justify-end items-end m-4 ">
          <button
            className="btn px-8 text-lg mx-4  "
            onClick={() => navigate("/createAds")}
          >
            Back
          </button>
          <button className="btn btn-info px-8 text-lg" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </>
    </div>
  );
}
