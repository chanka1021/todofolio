import React, { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { SidebarContext } from "../pages/Home/Home";
import UserSettingList from "./UserSettingList";


// Component for the sidebar
export function Sidebar({ children }) {
  // State for controlling the expanded state of the sidebar
  const searchInputRef = React.useRef(null);
  const { expanded, setExpanded } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);
  function OnlyExpand_searchFocus() {
    if (!expanded) {
      setExpanded(true);
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  }

  function OnlyExpand() {
    if (!expanded) {
      setExpanded(true);
    }
  }
  // Render the sidebar
  return (
    <aside className="h-screen">
      <nav className="h-full inline-flex flex-col bg-[#F4F4F4] shadow-lg  ">
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            } `}
          />
          {/* Button for toggling the sidebar */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <FaBarsStaggered />
          </button>
        </div>
        {/* search btn */}
        <div className="max-w-md mx-auto mt-3">
          <div className=" flex items-center w-full h-12 rounded-lg border border-[#EBEBEB] focus-within:shadow-sm overflow-hidden">
            <div
              className="grid place-items-center h-full w-12 text-gray-300 cursor-pointer "
              onClick={OnlyExpand_searchFocus}
            >
              <FiSearch className="text-MyGray" />
            </div>
            <input
              ref={searchInputRef}
              className={` ${
                expanded
                  ? " py-2 w-full outline-none text-sm text-MyGray pr-2 font-semibold bg-portica-100 bg-opacity-0 "
                  : "w-0"
              }`}
              type="text"
              id="search"
              placeholder="Search a  Todo.."
            />
          </div>
        </div>
        {/* Provide the sidebar context */}
        <ul className="flex-1 px-3">{children}</ul>
        <div className="border-t border-gray-ii shadow-sm flex p-3 relative">
          {/* Profile image */}
          <img
            src="https://i.pravatar.cc/150?img=56"
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={OnlyExpand}
            
          />
          <div
            className={` flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            } `}
          >
            <div className="leading-4">
              {/* User name and email */}
              <h4 className="font-semibold">Achraf Ch</h4>
              <span className="text-xs text-gray-500">achraf@gmail.com</span>
            </div>
            {/* Settings button */}
            <button onClick={() => setIsOpen(!isOpen)}>
              <BsThreeDotsVertical
                size={20}
                className="opacity-50   hover:opacity-100 cursor-pointer transform hover:scale-125 duration-300"
              />
            </button>
            {/* Settings dropdown */}
            {isOpen && <UserSettingList isOpen={isOpen} setIsOpen={setIsOpen}/>}
          </div>
        </div>
      </nav>
    </aside>
  );
}
