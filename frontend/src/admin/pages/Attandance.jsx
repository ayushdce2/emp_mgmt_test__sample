import useManageAttendance from "../hook/useManageAttendance";
import useGetAttendanceHistory from "../hook/useGetAttendanceHistory";
import useFilterAttendance from "../hook/useFilterAttendance";

const Attandance = () => {

  const { attendanceSummary, setAttendanceSummary, loading, refetch, tempSummary, setTempSummary } = useGetAttendanceHistory();
  const { handleAttendanceChanges } = useManageAttendance({ refetch });
  const { SearchFunction } = useFilterAttendance({ attendanceSummary, setTempSummary })

  if (loading) {
    return <p className="text-3xl text-gray-100">Loading</p>;
  }

  console.log(tempSummary, "attendanceSummary");
  return (
    <>
      <div className='p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400'>
        <p className=' px-2  font-bold tracking-wider text-2xl text-shadow-2xs headingfont'>Attendance</p>
      </div>


      <div className="bg-white dark:bg-gray-800 rounded-xl w-[21rem] shadow p-3 h-[calc(77vh-1rem)] overflow-auto">
        <div className="flex justify-between ">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200 ">
            All Attendance History
          </h2>

          <div>
            <input type="search" className="bg-gray-100 text-sm p-1" placeholder="Search Employee" onChange={(e) => { SearchFunction(e.target.value) }} />
          </div>
        </div>
        <div className='shadow'>
          <div className='flex text-blue-400'>
            <div className='p-2 font-semibold w-15 shrink-0'>S.No.</div>
            <div className='p-2 font-semibold w-25 shrink-0'>Name</div>
            <div className='p-2 font-semibold w-35 shrink-0'>Email</div>
            <div className='p-2 font-semibold w-35 shrink-0'>Date</div>
            <div className='p-2 font-semibold w-40 shrink-0'>Status</div>

          </div>

        </div>
        <form>
          {console.log(tempSummary, "tempSummary")}
          {
            tempSummary.length != 0 ? tempSummary.map((data, index) => {
              return (

                <div className='flex text-blue-300 hover:bg-blue-50 dark:hover:bg-indigo-500' key={data._id}>
                  <div className='p-2 w-15 shrink-0 text-center'>{index + 1}</div>
                  <div className='p-2 w-25 shrink-0 text-green-300'>{data.name}</div>
                  <div className='p-2 w-35 shrink-0 text-green-300'>{data.email}</div>
                  <div className='p-2 w-35 shrink-0'>{data.todaysDate}</div>
                  <div className='p-2 w-40 shrink-0 '>

                    <select onChange={(e) => { handleAttendanceChanges(data._id, e.target.value) }} value={data.markattendaceStatus} className={`${data.markattendaceStatus == "Present" ? "text-green-300" : "text-red-300"}`}>
                      <option value="Present" className="text-green-300">Present</option>
                      <option value="Absent" className="text-red-300">Absent</option>
                    </select>
                  </div>

                </div>

              )
            }) : <p className="text-gray-400 text-center p-8">No Record Found</p>

          }

        </form>


      </div>
    </>
  )
}

export default Attandance