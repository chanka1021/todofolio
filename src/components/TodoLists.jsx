import React, { useState } from "react";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

function TodoLists({ status, list }) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className=" w-80 h-80 bg-portica-100  overflow-visible relative">
        <div className=" items-center flex">
          <h2 className="text-xl font-bold p-4 text-main">My Todo list 1</h2>
          <button
            onClick={toggleOptions}
          >
          <PiDotsThreeOutlineVerticalLight
            className="text-lg right-0 opacity-50 absolute  mr-5  hover:opacity-100 cursor-pointer transform hover:scale-125 duration-300"
          />
          </button>
        </div>
        <p className="p-4 text-MySubGray ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          cumque?
        </p>
        {showOptions && (
          <div className="absolute right-0  top-0 bg-portica-50 w-48  border divide-y rounded-md shadow-lg ">
            <div className="py-1">
            <IoMdClose onClick={()=>{setShowOptions(!showOptions)}} className=" mt-3 text-lg right-0 opacity-50 absolute  mr-5  hover:opacity-100 cursor-pointer transform hover:scale-125 duration-300" />
            <div className="py-1">
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:text-main hover:font-bold">
                Edit
              </button>
              </div>
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:text-main hover:font-bold">
                Delete
              </button>
            </div>
            <div className="py-1">
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:text-main hover:font-bold">
                Change Status --
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoLists;
