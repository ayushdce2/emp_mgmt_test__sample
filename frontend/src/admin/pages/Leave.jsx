import useLeaveManage from "../hook/useManageLeave"
import useGetLeaveHistory from "../hook/useGetLeaveHistory";

const Leave = () => {


    const { leaveSummary, loading, refetch } = useGetLeaveHistory();
    const { handleLeaveChanges } = useLeaveManage({ refetch });
    if (loading) {
        return "Loading";
    }

    return (
        <>
            <div className='p-1 rounded bg-gradient-to-r from-blue-400 to-indigo-200 text-white dark:from-blue-600 dark:to-indigo-400'>
                <p className=' px-2  font-bold tracking-wider text-2xl text-shadow-2xs headingfont'>Leave</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl ">


                <div className="  p-3 h-[calc(77vh-1rem)] w-[21rem] md:w-full overflow-auto">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                        Leave History
                    </h2>
                    <div className='shadow'>
                        <div className='flex text-blue-400'>
                            <div className='p-2 font-semibold w-16 shrink-0'>S.No.</div>
                            <div className='p-2 font-semibold w-20 shrink-0'>Name</div>
                            <div className='p-2 font-semibold w-35 shrink-0'>Email</div>

                            <div className='p-2 font-semibold w-25 shrink-0'>Leave Type</div>
                            <div className='p-2 font-semibold w-25 shrink-0'>Total Days</div>
                            <div className='p-2 font-semibold w-25 shrink-0'>From</div>
                            <div className='p-2 font-semibold w-25 shrink-0'>To</div>
                            <div className='p-2 font-semibold w-35 shrink-0'>Leave Status</div>

                        </div>

                    </div>
                    <form>
                        {
                            leaveSummary && leaveSummary.map((data, index) => {
                                return (

                                    <div className='flex text-blue-300 hover:bg-blue-50 dark:hover:bg-indigo-500' key={data._id}>
                                        <div className='p-2 w-16  shrink-0 text-center'>{index + 1}</div>
                                        <div className='p-2 w-20  shrink-0'>{data.name}</div>
                                        <div className='p-2 w-35  shrink-0'>{data.email}</div>

                                        <div className='p-2 w-25  shrink-0 text-center'>{data.leave_type}</div>
                                        <div className='p-2 w-25  shrink-0 text-green-300 text-center'>{data.total_leave_days}</div>
                                        <div className='p-2 w-25  shrink-0'>{new Date(data.date_from).toLocaleDateString()}</div>
                                        <div className='p-2 w-25  shrink-0'>{new Date(data.date_to).toLocaleDateString()}</div>
                                        <div className='p-2 w-35  shrink-0 text-center text-green-500'>
                                            <select onChange={(e) => { handleLeaveChanges(data._id, e.target.value) }} value={data.leave_status}>
                                                <option value="waiting">Waiting</option>
                                                <option value="approve">Approve</option>
                                                <option value="reject">Reject</option>

                                            </select>
                                        </div>

                                    </div>

                                )
                            })

                        }


                    </form>

                </div>
            </div>
        </>
    )
}

export default Leave