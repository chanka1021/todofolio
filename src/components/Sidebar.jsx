import React, { useContext } from "react";
import "../styles/Sidebar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import logo from "../assets/logo.png";

const SidebarContext = React.createContext();

// Component for the sidebar
export function Sidebar({ children }) {
  // State for controlling the expanded state of the sidebar
  const [expanded, setExpanded] = React.useState(true);

  // Create a context for the sidebar

  // Render the sidebar
  return (
    <aside className="h-screen   w-[15vw]">
      <nav className="h-full inline-flex flex-col bg-[#F4F4F4] shadow-lg ">
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
        {/* Provide the sidebar context */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          {/* Profile image */}
          <img
            src="https://i.pravatar.cc/150?img=56"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            } `}
          >
            <div className="leading-4">
              {/* User name and email */}
              <h4 className="font-semibold">Achraf Ch</h4>
              <span className="text-xs text-gray-500">achraf@gmail.comn</span>
            </div>
            {/* Settings button */}
            <BsThreeDotsVertical
              size={20}
              className="opacity-50 hover:opacity-100 cursor-pointer transform hover:scale-125 duration-300"
            />
          </div>
        </div>
      </nav>
    </aside>
  );
}

// Component for an item in the sidebar
export function SideBarItem({ icon, text, active }) {
  // Get the expanded state from the sidebar context
  const { expanded } = useContext(SidebarContext);
  // Render the sidebar item
  return (
    <li
      className={`relative flex items-center py-3 px-1 my-1 font font-medium rounded-md cursor-pointer transition-colors text-[#4C4C4C] group
   ${
     active
       ? "bg-portica-300  text-main   "
       : "hover:bg-portica-200 text-gray-500 text-gray-500"
   }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {!expanded && (
        <div
          className={` absolute left-full rounded-md px-2 py-2 ml-6 bg-portica-900 text-main invisible opacity-25 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
