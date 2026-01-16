import useLeaveApply from "../hook/useLeaveApply"
import useGetLeaveHistory from "../hook/useGetLeaveHistory";
import {useUserDetails} from "../../utility/UserDetailsContext" ;

const Leave = () => {
    
    const {leaveSummary,loading,refetch} = useGetLeaveHistory();
    const {handleSubmit, handleChange,formData} = useLeaveApply({refetch});
       const { userProfileDetails } = useUserDetails();
    //    console.log(userProfileDetails[0].leaveBalance,"userProfileDetails")
  return (
    <>
    <div className='flex items-center justify-between p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400'>
        <p className=' px-2  font-bold tracking-wider text-2xl text-shadow-2xs headingfont'>Leave</p>
        <p>Leave Balance: <span className="text-gray-900 font-bold px-2">0{userProfileDetails[0].leaveBalance}</span></p>
    </div>
<div className="bg-white dark:bg-gray-800 rounded-xl flex flex-wrap justify-between items-start">
    <div className="   p-3 md:w-[38%]">
        
                  
         <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                    Leave Request Form
                  </h2>
                  <div>
                     <form onSubmit={handleSubmit} className="space-y-4">

          {/* From Date */}
          <div>
            <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
              From Date
            </label>
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border 
                         bg-white dark:bg-gray-800
                         border-gray-300 dark:border-gray-700
                         text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* To Date */}
          <div>
            <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
              To Date
            </label>
            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border 
                         bg-white dark:bg-gray-800
                         border-gray-300 dark:border-gray-700
                         text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Leave Type */}
          <div>
            <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
              Leave Type
            </label>
            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border 
                         bg-white dark:bg-gray-800
                         border-gray-300 dark:border-gray-700
                         text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Casual</option>
              <option>Sick</option>
              <option>Paid</option>
            </select>
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm mb-1 text-gray-600 dark:text-gray-400">
              Reason
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="3"
              required
              className="w-full px-3 py-2 rounded-lg border 
                         bg-white dark:bg-gray-800
                         border-gray-300 dark:border-gray-700
                         text-gray-900 dark:text-gray-100
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg font-medium 
                       bg-indigo-600 hover:bg-indigo-700
                       text-white transition"
          >
            Submit Leave Request
          </button>

        </form>
                  </div>
        {/* <button onClick={markTodaysAttendance} className='p-1 px-2 shadow text-lg rounded-lg bg-blue-400 text-gray-100 hover:bg-indigo-400 cursor-pointer font-semibold'>{buttonText}</button> */}
    </div>

    <div className="  p-3 h-[calc(77vh-1rem)] md:w-[60%] overflow-auto">
         <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                    Leave History
                  </h2>
                  <div className='shadow'>
                    <div className='flex text-blue-400'>
                        <div className='p-2 font-semibold w-16'>S.No.</div>
                        <div className='p-2 font-semibold w-35'>Leave Status</div>
                        <div className='p-2 font-semibold w-40'>Leave Type</div>
                        <div className='p-2 font-semibold w-40'>Total Days</div>
                        <div className='p-2 font-semibold w-40'>From</div>
                        <div className='p-2 font-semibold w-40'>To</div>

                    </div>

                  </div>
                  {
                    leaveSummary && leaveSummary.map((data,index)=>{
                        return(
                            
                    <div className='flex text-blue-300 hover:bg-blue-50 dark:hover:bg-indigo-500' key={data._id}>
                        <div className='p-2  w-16 text-center'>{index+1}</div>
                        <div className='p-2 w-35'>{data.leave_status}</div>
                        <div className='p-2 w-40'>{data.leave_type}</div>
                        <div className='p-2 w-40 text-green-300'>{data.total_leave_days}</div>
                        <div className='p-2 w-40'>{new Date(data.date_from).toLocaleDateString()}</div>
                        <div className='p-2 w-40'>{new Date(data.date_to).toLocaleDateString()}</div>

                    </div>
                            
                        )
                    })
                    
                  }
                   
                    

                 
    </div>
    </div>
    </>
  )
}

export default Leave