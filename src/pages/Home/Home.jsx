import React, {useState } from "react";
import "./Home.css";
import SideBarContent from "../../components/SideBarContent";
import Settings from "../../components/Settings";
import AddList from "../../components/AddList";
import TodoLists from "../../components/TodoLists";

export const SidebarContext = React.createContext("");

export const ComponentsList = [{id:0,name:"todolists",component :<TodoLists/>},{id:1,name:"add list",component:<AddList/>},{id:2,name:"settings",component:<Settings/>}];

function Home() {

  const [expanded, setExpanded] = useState(true);
  const [selectedComponent,setSelectedComponent] = useState(null);

  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarContext.Provider value={{ expanded, setExpanded,selectedComponent,setSelectedComponent }}>
        <SideBarContent  expanded={expanded}/>
      </SidebarContext.Provider>
      <main className=" flex-grow h-full">
        <header className="text-4xl text-main font-bold h-fit pl-5 pt-5 ">Settings</header>
        <div className="flex-grow   p-10 mt-5 h-[90vh]">
          <div className="h-full p-5 border-2 border-gray-ii">
          <section className="h-full">
            {selectedComponent}
          </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
