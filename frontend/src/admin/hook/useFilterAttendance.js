import React,{useState} from 'react'

const useFilterAttendance = ({attendanceSummary,setTempSummary}) => {
// console.log(attendanceSummary,"attendanceSummary")
    
// console.log(tempSummary,"tempSummary");

    const SearchFunction=(searchValue)=>{
       

    return setTempSummary((prev)=>(attendanceSummary?.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )))

    }
  return {SearchFunction}
}

export default useFilterAttendance