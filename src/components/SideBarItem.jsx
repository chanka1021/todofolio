import React, { useContext } from "react";
import { ComponentsList, SidebarContext } from "../pages/Home/Home";

function SideBarItem({ active, icon, text, TodosCount,status,list}) {
  let { expanded } = useContext(SidebarContext);
  const { setSelectedComponent } = useContext(SidebarContext);

  const handleItemClick = (item) => {
    const selectedItem = ComponentsList.find(
      (component) => component.id === item
    );
    const Props = {
      status: status,
      list: list,
    };
    setSelectedComponent(React.cloneElement(selectedItem.component, Props));

  };

  return (
    <li
      onClick={() => handleItemClick(0,'active','5')}
      className={`relative flex  items-center py-3 px-3 my-1 font font-medium rounded-md cursor-pointer transition-colors text-MyGray group
       ${
         active
           ? "bg-portica-300  text-main   "
           : "hover:bg-portica-200 text-gray-500 text-gray-500"
       }`}
    >
      <span className="text-gray-i h-5 w-5">{icon}</span>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      <div
        className={`  text-xs text-main text-center ${
          TodosCount > 0 ? " " : "hidden"
        } ${expanded ? "bg-gray-ii px-3 py-1 rounded-md" : ""} `}
      >
        {TodosCount}
      </div>
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

export default SideBarItem;
