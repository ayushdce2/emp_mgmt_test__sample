import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Dashboard from "./Dashboard";






const EmpHome = () => {
    const[openSidebar,setOpenSidebar]=useState(false);
    
    
  return (
    <>
   
   
          <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 transition-colors">
    
            {/* Sidebar */}
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
    
            {/* Main Content */}
            <main className={`  flex-1 `}>
    
              {/* Navbar */}
             <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar}/>
    
              {/* Content */}
              <div className={`${openSidebar==true ? "opacity-30 pointer-events-none":"pointer-events-auto"} p-6 space-y-6  h-[calc(100vh-4.3rem)] overflow-auto `}>
    
                <Dashboard/>
    
              </div>
            </main>
          </div>

   
    </>
  );
};



export default EmpHome;
