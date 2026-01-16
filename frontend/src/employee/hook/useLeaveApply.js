

import { useState } from "react";
import API from '../../utility/axios.jsx';
import { handleSuccess, handleError } from '../../utility/ToastCustom.jsx';

const useLeaveApply = ({refetch}) => {
  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    leaveType: "Casual",
    reason: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
submitLeaveData();
  };

const submitLeaveData =async()=>{
            const headers = {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    }


            try {
                const response = await API.post("/employee/leave/applyleave" ,formData, headers);
                const data = response.data;
                handleSuccess(data.message);
                
              
              

   
                console.log(response,"response");
                await refetch();
                // console.log(finalRefetch,"finalRefetch",refetch)
                console.log(data.status,"data.status")
       
            } catch (error) {
                console.log(error, "error", error.status);
                // error.status=="500" && handleError(error.response.data.error.codeName)
                error.status=="400" && handleError(error.response.data.message);
                error.status=="403" && handleError(error.response.data.error.details[0].message);
                error.status=="422" && handleError(error.response.data.message);
                error.status=="409" && handleError(error.response.data.message);
                error.status=="400" && handleError(error.response.data.error.details[0].message);
                
            }
}

  return {handleSubmit, handleChange,formData}


};

export default useLeaveApply;

