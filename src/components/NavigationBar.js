import React from "react";
import Search from "../assets/Iconly/Light/Search.png";
import Notification from "../assets/Iconly/Bulk/Notification.svg";
import Message from "../assets/Iconly/Bulk/Message.svg";
import Buy from "../assets/Iconly/Bulk/Buy.svg";
import Profil from "../assets/profil.svg";
const NavigationBar = () => {
  return (
    <div className="flex flex-row justify-between items-center  p-3 ">
      {/* search */}
      <label class="relative block">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src={Search} alt="" />
        </span>
        <input
          class=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search …"
          type="text"
          name="search"
        />
      </label>
      {/* options */}
      <div className="flex flex-row space-x-3  px-6">
        <img src={Notification} alt="" />
        <img src={Message} alt="" />
        <img src={Buy} alt="" />
        <div className="flex flex-row space-x-2">
          <img src={Profil} alt="" />
          <div className="flex flex-col">
            <span>Thierno DIOP</span>
            <span className="">Software Engineer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
