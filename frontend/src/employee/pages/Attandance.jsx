import useMarkAttendance from "../hook/useMarkAttendance";
import useGetAttendanceHistory from "../hook/useGetAttendanceHistory";

const Attandance = () => {
 
    const {attendanceSummary,refetch,loading} = useGetAttendanceHistory();   
    const {markTodaysAttendance,buttonText} = useMarkAttendance({refetch});
    
    if(loading){
        return "Loading";
    }

console.log(attendanceSummary,"attendanceSummary");
  return (
    <>
        <div className='p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400'>
        <p className=' px-2  font-bold tracking-wider text-2xl text-shadow-2xs headingfont'>Attendance</p>
    </div>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-3">
         <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                    Mark Today's Attendance
                  </h2>
        <button onClick={markTodaysAttendance} className='p-1 px-2 shadow text-lg rounded-lg bg-blue-400 text-gray-100 hover:bg-indigo-400 cursor-pointer font-semibold'>{buttonText}</button>
    </div>

    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-3 h-[calc(60vh-1rem)] overflow-auto">
         <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                    Attendance History
                  </h2>
                  <div className='shadow'>
                    <div className='flex text-blue-400'>
                        <div className='p-2 font-semibold w-16'>S.No.</div>
                        <div className='p-2 font-semibold w-35'>Date</div>
                        <div className='p-2 font-semibold w-40'>Status</div>

                    </div>

                  </div>
                  {
                    attendanceSummary && attendanceSummary.map((data,index)=>{
                        return(
                            
                                <div className='flex text-blue-300 hover:bg-blue-50 dark:hover:bg-indigo-500' key={data._id}>
                        <div className='p-2  w-16 text-center'>{index+1}</div>
                        <div className='p-2 w-35'>{data.todaysDate}</div>
                        <div className='p-2 w-40 text-green-300'>{data.markattendaceStatus}</div>

                    </div>
                            
                        )
                    })
                    
                  }
                   
                    

                 
    </div>
    </>
  )
}

export default Attandance