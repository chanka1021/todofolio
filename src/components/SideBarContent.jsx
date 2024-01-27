import React from 'react'
import { Sidebar } from './sidebar'
import  SideBarItem  from './SideBarItem'
import {
  TbProgress,
  TbProgressAlert,
  TbProgressHelp,
  TbProgressCheck,
} from "react-icons/tb";
import ListIcon from "./ListIcon";
import { FaPlus } from "react-icons/fa6";

function SideBarContent({expanded}) {
  return (
    <Sidebar>
        <div className="mt-5">
          <p className="text-MySubGray  text-sm ">TASKS</p>
          <aside className="mt-3">
            <SideBarItem icon={<TbProgressAlert />} todos text="Acitve" TodosCount={2} />
            <SideBarItem icon={<TbProgressHelp />} todos text="Postponed" />
            <SideBarItem icon={<TbProgressCheck />} todos text="Completed" TodosCount={2} />
            <SideBarItem icon={<TbProgress />}  todos text="All" />
          </aside>
        </div>
        <div className="mt-5">
          <p className="text-MySubGray text-sm">LISTS</p>
          <aside className="mt-3">
            <SideBarItem icon={<ListIcon color="#e9b609" />} text="Life" />
            <SideBarItem icon={<ListIcon color="#D04848" />} text="Study" />
            <SideBarItem  icon={<ListIcon color="#6895D2" />} text="Work" />
            <li
              className={`px-4 relative flex items-center  my-1 font font-medium rounded-md cursor-pointer transition-colors text-MyGray group`}
            >
              <FaPlus onClick={()=>{console.log(expanded)}} />
              <p className={`overflow-hidden transition-all ${ expanded ? "w-52 ml-5" : "w-0" }`}   >
                Add New List
              </p>            
            </li>
          </aside>
        </div>
      </Sidebar>
  )
}

export default SideBarContent
