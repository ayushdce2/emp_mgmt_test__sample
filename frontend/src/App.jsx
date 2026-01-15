import { useState } from "react";
import {ToastContainer} from "react-toastify";
import Login from './auth/Login.jsx';
import Signup from './auth/Signup.jsx';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import RefreshHandler from './auth/RefreshHandler.jsx';
// import EmployeeHome from "./employee/EmployeeHome.jsx";
// import HrHome from "./hr/HrHome.jsx";
// import AdminHome from "./admin/AdminHome.jsx";
import {UserDetailsProvider} from "./utility/UserDetailsContext.jsx";
import {AppThemeProvider} from "./utility/ThemeContext.jsx";
import EmployeeHome from './employee/pages/EmpHome.jsx';
// import Demo from "./Demo.jsx"
function App() {

    const [isAuthenticated,setisAuthenticated]=useState(false);
    const PrivateRoute=({element})=>{
      return isAuthenticated ? element : <Navigate to="/" />
    }
 
  return (
    <>

      
      <BrowserRouter>
      <RefreshHandler setisAuthenticated={setisAuthenticated}/>
        <Routes>


          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          
          {/* <Route path='/demo' element={<Demo/>}></Route> */}

          
          <Route path={"/employee/*"} element={<PrivateRoute element={<UserDetailsProvider><AppThemeProvider><EmployeeHome/></AppThemeProvider></UserDetailsProvider>}/>}></Route>
          {/* <Route path={"/hr/*"} element={<PrivateRoute element={<UserDetailsProvider><HrHome/></UserDetailsProvider>}/>}></Route> */}
          {/* <Route path={"/admin/*"} element={<PrivateRoute element={<UserDetailsProvider><AdminHome/></UserDetailsProvider>}/>}></Route> */}
    
  
        </Routes>
      </BrowserRouter>

      <ToastContainer/>
    </>
  )
}

export default App
