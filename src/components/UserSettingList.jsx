import React, { useContext } from "react";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { useClickAway } from "@uidotdev/usehooks";
import { ComponentsList, SidebarContext } from "../pages/Home/Home";


function UserSettingList({ isOpen, setIsOpen }) {
  // Create a reference for detecting clicks outside the settings list
  const ref = useClickAway(() => {
    setIsOpen(false);
  });


  const {setSelectedComponent } = useContext(SidebarContext);

  const handleItemClick = (item) =>{
    const selectedItem = ComponentsList.find((component) => component.id === item);
    setSelectedComponent(selectedItem.component );
  }
  

  // Render the user settings list
  return (
    <ul
      ref={ref}
      className={` ${ 
        isOpen ? "block" : "hidden"
      } bg-[#fff] text-MySubGray absolute right-0 bottom-10 p-1 bg-white w-15 h-15 rounded-md shadow-md 
  `}
    >
      <button>
        {/* Setting item */}
        <li 
        onClick={()=>{handleItemClick(2)}}
        className="flex items-center cursor-pointer px-4 py-2 hover:text-main">
          <IoMdSettings className=" text-lg mr-2" />
          Setting
        </li>
      </button>
      <hr className="border-gray-ii" />

      <button>
        {/* Sign out item */}
        <li className="flex items-center cursor-pointer  px-4 py-2 hover:text-main">
          <BiLogOut className=" text-lg mr-2" /> Sign out
        </li>
      </button>
    </ul>
  );
}

export default UserSettingList;