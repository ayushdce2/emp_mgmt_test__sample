import React, { useState } from 'react'
import API from '../../utility/axios.jsx';
import { handleSuccess, handleError } from '../../utility/ToastCustom.jsx';

const useMarkAttendance = ({refetch}) => {
    // console.log(refetch,"refetch")
const finalRefetch = refetch ? refetch : (() => {});
    const[buttonText,setbuttonText]=useState("Mark Todays Attendance");

    const markTodaysAttendance=async()=>{
       
        // setTodaysAttendance((prev)=>({todaysAttendance:new Date()}));
        
        // console.log(todaysAttendance,"todaysAttendance");

        const headers = {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    }

    const AttendanceStatus = {AttendanceStatus:true}

            try {
                const response = await API.post("/employee/attendance/applyattendance" ,AttendanceStatus, headers);
                const data = response.data;
                handleSuccess(data.message);
                
              
              

   
                console.log(response,"response");
                await finalRefetch();
                console.log(finalRefetch,"finalRefetch",refetch)
                console.log(data.status,"data.status")
       
            } catch (error) {
                console.log(error, "error", error.status);
                // error.status=="500" && handleError(error.response.data.error.codeName)
                error.status=="400" && handleError(error.response.data.message);
                error.status=="403" && handleError(error.response.data.error.details[0].message);
                error.status=="422" && handleError(error.response.data.message);
                error.status=="409" && handleError(error.response.data.message);
                
            }

    }

  return {markTodaysAttendance,buttonText}
}

export default useMarkAttendance;