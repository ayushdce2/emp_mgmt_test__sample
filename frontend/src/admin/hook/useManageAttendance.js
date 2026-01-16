import React, { useState } from 'react'
import API from '../../utility/axios.jsx';
import { handleSuccess, handleError } from '../../utility/ToastCustom.jsx';

const useManageAttendance = ({refetch}) => {
    
    

    const handleAttendanceChanges=async(id,value)=>{

       



       
const datatobeupdated = {"newValue": value}

        const headers = {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    }



            try {
                const response = await API.put(`/admin/attendance/${id}` ,datatobeupdated, headers);
                const data = response.data;
                handleSuccess(data.message);
                await refetch();
              
              

   
                console.log(response,"response");
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

  return {handleAttendanceChanges}
}

export default useManageAttendance;