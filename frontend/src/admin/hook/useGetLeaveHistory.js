import React, { useEffect, useState } from 'react';
import API from '../../utility/axios.jsx';

const useGetLeaveHistory = () => {

    const [leaveSummary,setLeaveSummary]=useState(null);
    const [loading,setLoading] = useState(true);

    const headers ={
      headers:{
        "Authorization":localStorage.getItem("token"),
      }
    }

    const fetchLeaveHistory = async ()=>{
        try{
            const response =  await API.get("/admin/leave/leavehistory",headers);
            const data = await response.data;
            console.log(data,"data");
            setLeaveSummary(data)
            setLoading(false)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchLeaveHistory();
    },[])
  return {leaveSummary,loading,refetch:fetchLeaveHistory}
}

export default useGetLeaveHistory