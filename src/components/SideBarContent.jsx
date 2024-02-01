import React, { useContext } from 'react'
import { Sidebar } from './sidebar'
import  SideBarItem  from './SideBarItem'
import { ComponentsList, SidebarContext } from "../pages/Home/Home";

import {
  TbProgress,
  TbProgressAlert,
  TbProgressHelp,
  TbProgressCheck,
} from "react-icons/tb";
import ListIcon from "./ListIcon";
import { FaPlus } from "react-icons/fa6";
import TodoLists from './TodoLists';
import AddList from './AddList';
import Settings from './Settings';

function SideBarContent({expanded}) {

  const {setSelectedComponent } = useContext(SidebarContext);

  const handleItemClick = (item) =>{
    const selectedItem = ComponentsList.find((component) => component.id === item);
    setSelectedComponent(selectedItem.component);
  }
  

  return (
    <Sidebar>
        <div className="mt-5">
          <p className="text-MySubGray  text-sm ">TASKS</p>
          <aside className="mt-3">
            <SideBarItem icon={<TbProgressAlert />} todos text="Acitve" TodosCount={2}  status='active'/>
            <SideBarItem icon={<TbProgressHelp />} todos text="Postponed" status='postponed'/>
            <SideBarItem icon={<TbProgressCheck />} todos text="Completed" TodosCount={2} status='completed' />
            <SideBarItem icon={<TbProgress />}  todos text="All" status='All'/>
          </aside>
        </div>
        <div className="mt-5">
          <p className="text-MySubGray text-sm">LISTS</p>
          <aside className="mt-3">
            <SideBarItem icon={<ListIcon color="#e9b609" />} text="Life" list='life' />
            <SideBarItem icon={<ListIcon color="#D04848" />} text="Study" />
            <SideBarItem  icon={<ListIcon color="#6895D2" />} text="Work" />
            <li
            onClick={()=>{handleItemClick(1)}}
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
