import React from "react";
import "./Home.css";
import { Sidebar, SideBarItem } from "../../components/sidebar";
import { FaSearch } from "react-icons/fa";
import {
  TbProgress,
  TbProgressAlert,
  TbProgressHelp,
  TbProgressCheck,
} from "react-icons/tb";
import ListIcon from "../../components/ListIcon";
import { FaPlus } from "react-icons/fa6";

function Home() {
  return (
    <div className="App-Container">
      <Sidebar>
        <div className="mt-3">
          <p className="text-MySubGray ">TASKS</p>
          <aside className="mt-3">
            <SideBarItem icon={<TbProgressAlert />} text="Acitve" />
            <SideBarItem icon={<TbProgressHelp />} text="Postponed" />
            <SideBarItem icon={<TbProgressCheck />} text="Completed" />
            <SideBarItem icon={<TbProgress />} text="All" />
          </aside>
        </div>
        <div className="mt-5">
          <p className="text-MySubGray ">Lists</p>
          <aside className="mt-3">
            <SideBarItem icon={<ListIcon color="#e9b609" />} text="Life" />
            <SideBarItem icon={<ListIcon color="#D04848" />} text="Study" />
            <SideBarItem icon={<ListIcon color="#6895D2" />} text="Work" />
            <li
              className={`relative flex items-center py-3 px-3 my-1 font font-medium rounded-md cursor-pointer transition-colors text-MyGray group
                         ${
                           active
                             ? "bg-portica-300  text-main   "
                         : "hover:bg-portica-200 text-gray-500 text-gray-500"
                                     }`}
            >
              <FaPlus />
              add new
            </li>
          </aside>
        </div>
      </Sidebar>
    </div>
  );
}

export default Home;
