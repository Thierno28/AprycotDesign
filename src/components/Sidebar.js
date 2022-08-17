import React from "react";
import Logo from "../assets/Logo.svg";
import Category from "../assets/Iconly/Bulk/Category.svg";
import TicketStart from "../assets/Iconly/Bulk/Ticket Star.svg"
import ShieldDone from "../assets/Iconly/Bulk/Shield Done.svg"
import User from "../assets/Iconly/Bulk/3 User.svg"
import Frame from "../assets/Frame 38142.svg"
import Wallet from "../assets/Iconly/Bulk/Wallet.svg"

const Sidebar = () => {
  return (
    <div className="flex flex-col space-y-6 items-center ">
      {/* logo */}

      <img src={Logo} alt="" className="border-b border-gray " />
      {/* Category Logo */}
      <img src={Category} alt="" className="w-12" />
      {/* Ticket Start Logo */}
      <img src={TicketStart} alt="" className="w-10" />
      {/* Shield Done logo */}
      <img src={ShieldDone} alt="" className="w-10" />
      {/* 3 User */}
      <img src={User} alt="" className="w-10" />
      {/* Frame */}
      <img src={Frame} alt="" className="w-10" />
      {/* wallet */}
      <img src={Wallet} alt="" className="w-10" />
      {/* Frame */}
      <img src={Frame} alt="" className="w-10" />
      
    </div>
  );
};

export default Sidebar;
