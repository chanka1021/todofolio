import React from "react";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

function TodoLists({ status, list }) {
  console.log(status, list);
  return (
    <div className="grid grid-cols-4 gap-5" >
      <div className=" w-80 h-80 bg-portica-100  overflow-visible relative">
        <div className=" items-center flex">
          <h2 className=" text-xl font-bold p-4 text-main">My Todo loist 1</h2>
          <PiDotsThreeOutlineVerticalLight className="text-lg right-0 absolute" />

        </div>
        <p className=" p-4 text-MySubGray ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          cumque?
        </p>
      </div>
      <div className=" w-80 h-80 bg-portica-100  overflow-visible relative">
        <div className=" items-center flex">
          <h2 className=" text-xl font-bold p-4 text-main">My Todo loist 1</h2>
          <PiDotsThreeOutlineVerticalLight className="text-lg right-0 absolute" />
          
        </div>
        <p className=" p-4 text-MySubGray ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          cumque?
        </p>
      </div>   <div className=" w-80 h-80 bg-portica-100  overflow-visible relative">
        <div className=" items-center flex">
          <h2 className=" text-xl font-bold p-4 text-main">My Todo loist 1</h2>
          <PiDotsThreeOutlineVerticalLight className="text-lg right-0 absolute" />
          
        </div>
        <p className=" p-4 text-MySubGray ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          cumque?
        </p>
      </div>   <div className=" w-80 h-80 bg-portica-100  overflow-visible relative">
        <div className=" items-center flex">
          <h2 className=" text-xl font-bold p-4 text-main">My Todo loist 1</h2>
          <PiDotsThreeOutlineVerticalLight className="text-lg right-0 absolute" />
          
        </div>
        <p className=" p-4 text-MySubGray ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          cumque?
        </p>
      </div>   <div className=" w-80 h-80 bg-portica-100  overflow-visible relative">
        <div className=" items-center flex">
          <h2 className=" text-xl font-bold p-4 text-main">My Todo loist 1</h2>
          <PiDotsThreeOutlineVerticalLight className="text-lg right-0 absolute" />
          
        </div>
        <p className=" p-4 text-MySubGray ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          cumque?
        </p>
      </div>
    </div>
  );
}

export default TodoLists;
