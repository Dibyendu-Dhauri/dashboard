import { useState } from "react";
import AdsCard from "./AdsCard";
import { useNavigate } from "react-router-dom";

export default function CreateAds() {
  const [adChecked, setAdChecked] = useState({
    Media: false,
    Text: false,
  });
  const navigate = useNavigate();

  const handleChecked = (checkedItem) => {
    if (checkedItem === "Media") {
      setAdChecked({
        Media: true,
        Text: false,
      });
    } else {
      setAdChecked({
        Media: false,
        Text: true,
      });
    }
  };

  const handleNavigate = () => {
    if (adChecked.Media === true) {
      navigate("media");
    } else if (adChecked.Text === true) {
      navigate("text");
    }
  };

  return (
    <div className="m-4 border-2  relative">
      <span className="text-[1.5rem] font-semibold m-4"> Create Ads </span>
      <div className="flex flex-col md:flex-col lg:flex-row  justify-center items-center overflow-hidden ">
        <AdsCard
          adTypes={"Text"}
          handleChecked={handleChecked}
          adChecked={adChecked}
        />
        <AdsCard
          adTypes={"Media"}
          handleChecked={handleChecked}
          adChecked={adChecked}
        />
      </div>
      <div className="flex items-end justify-end m-4 ">
        <button
          className="btn btn-info px-8 text-lg font-semibold"
          onClick={handleNavigate}
        >
          Next
        </button>
      </div>
    </div>
  );
}
