import { Circle } from "@uiw/react-color";
import React, { useState } from "react";
import { FaListCheck } from "react-icons/fa6";
import { MdSwitchAccessShortcutAdd, MdDelete } from "react-icons/md";
import ListIcon from "./ListIcon";
import swal from "sweetalert";

const initialLists = [
  { color: "#6895D2", name: "Work" },
  { color: "#ca8d04", name: "Life" },
];

function AddList() {
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [myLists, setMyLists] = useState(initialLists);

  function submitList() {
    if(color === "" || name === ""){
      swal("Warning !", "Please choose Color and name!", "error");

    }else{
      setMyLists((prevLists) => [...prevLists, { color, name }]);
      setColor("");
      setName("");
      swal("Done !", "List 📎 added successfully!", "success");

    }

  }

  function DeleteList(Index) {
    swal(
      {
      title: "Are you sure?",
      text: "Once deleted, you will lose are your todo's on this list",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete ) => {
      if (willDelete) {      
          // Remove the list item when the delete button is clicked
          setMyLists((prevLists) =>
            prevLists.filter((_, i) => i !== Index)
          );
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } 
    })
  }
  return (
    <div className="flex flex-col w-full text-lg p-10">
      <p>My Lists:</p>
      {myLists.map((list, index) => (
        <span
          key={index}
          className="h-fit w-[50%] border-b border-gray-i rounded-md flex items-center py-1 px-6 bg-gray-ii shadow-sm"
        >
          <div className="h-5 w-5 mr-2">
            <ListIcon color={list.color} />
          </div>
          <div className="relative flex-grow text-MyGray flex items-center">
            <p>{list.name}</p>
            <button
              className="absolute right-1 text-main cursor-pointer transition-all duration-300 hover:text-[#991b1b]"
              onClick={()=> DeleteList(index) }
            >
              <MdDelete />
            </button>
          </div>
        </span>
      ))}

      <main className="mt-5">
        <div className="flex">
          <p>List Color :</p>
          <Circle
            colors={[
              "#D04848",
              "#F3B95F",
              "#FDE767",
              "#6895D2",
              "#FF55BB",
              "#184D47",
              "#D92027",
              "#581B98",
            ]}
            style={{ marginLeft: 20 }}
            color={color}
            onChange={(color) => {
              setColor(color.hex);
            }}
          />
        </div>

        <div
          style={{ backgroundColor: color, opacity: 0.7 }}
          className="mt-5 flex items-center w-full h-12 rounded-lg border border-[#EBEBEB] focus-within:shadow-sm overflow-hidden"
        >
          <div className="grid place-items-center h-full w-12 text-gray-300 cursor-pointer">
            <FaListCheck />
          </div>
          <input
            className="bg-opacity-0 bg-portica-50 w-full text-[#000]"
            type="text"
            placeholder="Type List name ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button onClick={submitList}>
          <div className="px-6 py-2 rounded-md border border-main flex items-center text-main w-fit m-auto mt-5 shadow-xl transition-all duration-300 hover:bg-main hover:text-[#fff]">
            <MdSwitchAccessShortcutAdd className="mr-3" /> Add List
          </div>
        </button>
      </main>
    </div>
  );
}

export default AddList;
