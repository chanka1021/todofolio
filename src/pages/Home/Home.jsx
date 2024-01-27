import React, {useState } from "react";
import "./Home.css";
import SideBarContent from "../../components/SideBarContent";

export const SidebarContext = React.createContext("");

function Home() {

  const [expanded, setExpanded] = useState(true);
  
  return (
    <div className="flex h-screen">
      <SidebarContext.Provider value={{ expanded, setExpanded }}>
        <SideBarContent  expanded={expanded}/>
      </SidebarContext.Provider>
      <main className=" flex-grow h-full">
        <header className="text-3xl text-main font-bold h-fit ">Settings</header>
        <div className="flex-grow bg-portica-300 overflow-auto">
          s
        </div>
      </main>
    </div>
  );
}

export default Home;
