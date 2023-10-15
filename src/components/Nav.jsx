import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [clicked, setClicked] = useState({
    Dashboard: false,
    CreateAds: true,
  });
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <span className="  border-none bg-transparent outline-none text-xl font-semibold ml-2">APP LOGO</span>
      </div>
      <div className="flex-none text-[2rem] font-semibold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">DASHBOARD</NavLink>
          </li>
          <li>
            <NavLink to="/createAds">CREATE ADS</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
