import React, { useEffect, useState } from 'react';
import API from '../../utility/axios.jsx';

const useGetAttendanceHistory = () => {

    const [attendanceSummary,setAttendanceSummary]=useState(null);
    const [loading,setLoading] = useState(true);

    const headers ={
      headers:{
        "Authorization":localStorage.getItem("token"),
      }
    }

    const fetchAttendaceHistory = async ()=>{
        try{
            const response =  await API.get("/admin/attendance/attendancehistory",headers);
            const data = await response.data;
            console.log(data,"data");
            setAttendanceSummary(data)
            setLoading(false)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchAttendaceHistory();
    },[])
  return {attendanceSummary,setAttendanceSummary,loading,refetch:fetchAttendaceHistory}
}

export default useGetAttendanceHistory