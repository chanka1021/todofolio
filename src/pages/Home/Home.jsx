import React, {useState } from "react";
import "./Home.css";
import SideBarContent from "../../components/SideBarContent";
import Settings from "../../components/Settings";
import AddList from "../../components/AddList";

export const SidebarContext = React.createContext("");

function Home() {

  const [expanded, setExpanded] = useState(true);
  
  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarContext.Provider value={{ expanded, setExpanded }}>
        <SideBarContent  expanded={expanded}/>
      </SidebarContext.Provider>
      <main className=" flex-grow h-full">
        <header className="text-4xl text-main font-bold h-fit pl-5 pt-5 ">Settings</header>
        <div className="flex-grow   p-10 mt-5 h-[90vh]">
          <div className="h-full p-5 border-2 border-gray-ii">
          <section className="h-full">
            <Settings/>
          </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
