import React from "react";
import "./Home.css";
import {Sidebar, SideBarItem} from "../../components/Sidebar";
import { FaSearch } from "react-icons/fa";
function Home() {
  return (
    <div className="App-Container">
      <Sidebar>
        <div>
          <p>tasks</p>
          <aside>
            <SideBarItem icon={<FaSearch/>} text="Search"/>
            <SideBarItem icon={<FaSearch/>} text="Search" active/>
            <SideBarItem icon={<FaSearch/>} text="Search" />
            <SideBarItem icon={<FaSearch/>} text="Search"/>
            <SideBarItem icon={<FaSearch/>} text="Search"/>
          </aside>

        </div>

      </Sidebar>
    </div>
  );
}


export default Home;
