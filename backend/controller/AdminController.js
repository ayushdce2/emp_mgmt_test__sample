const UserModel = require("../models/User.js");
const AttandanceModel = require("../models/Attandance.js");
const LeaveModel = require("../models/Leave.js");

const manageattendancefunction = async (req, res) => {
    try {
        console.log(req.params,"req.body",req.body);
        const { id } = req.params;
    const { newValue } = req.body;
        // console.log(req.body,"req.body")
        // const { email,_id, userRole } = req.user;
        // const { newID, } = req.body;
   
        // const currentDate = new Date().toLocaleDateString("en-CA");
        // console.log(currentDate,"currentDate")
     if (!newValue) {
      return res.status(400).json({
        success: false,
        message: "data is required"
      });
    }
        const attendanceupdation = await AttandanceModel.findByIdAndUpdate(
      id,
      { markattendaceStatus: newValue },
      { new: true,runValidators: true}
    );

    if (!attendanceupdation) {
      return res.status(404).json({
        success: false,
        message: "Attendance record not found"
      });
    }

     return res.status(200).json({
      success: true,
      message: "Attendance updated successfully",
    
    });
        // if (!existingAttendance && AttendanceStatus) {
         
        //     const markattendance = new AttandanceModel({ email, todaysDate:currentDate,markattendaceStatus:"Present" });
        //       await markattendance.save();
        //       res.status(201).json({ success: true, message: "Marked Present Today" });
        // }
        // if(existingAttendance){
        //     // console.log("Already exists");
        //     res.status(409).json({ success: false, message: "Already Marked for Today" });
        // }
        
       
      
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}



const allattendancehistoryfunction = async (req, res) => {
    

    try{
       
        const AllUserDetails = await AttandanceModel.find().sort({ createdAt: -1 });
        // console.log(AllUserDetails)
        res.status(200).json(AllUserDetails);

        }catch(error){
            res.status(500).json({message:error});
        }

}

const manageleavefunction = async (req, res) => {
    try {
        console.log(req.params,"req.body",req.body);
        const { id } = req.params;
    const { newValue } = req.body;

 

        // console.log(req.body,"req.body")
        // const { email,_id, userRole } = req.user;
        // const { newID, } = req.body;
   
        // const currentDate = new Date().toLocaleDateString("en-CA");
        // console.log(currentDate,"currentDate")
     if (!newValue) {
      return res.status(400).json({
        success: false,
        message: "data is required"
      });
    }
        const attendanceupdation = await LeaveModel.findByIdAndUpdate(
      id,
      { leave_status: newValue },
      { new: true,runValidators: true}
    );

    if (!attendanceupdation) {
      return res.status(404).json({
        success: false,
        message: "Leave record not found"
      });
    }





const total_leave_days = attendanceupdation.total_leave_days;

const currentEmpEmail = attendanceupdation.email;
// console.log(currentEmpEmail,"currentEmpEmail")
const currentLeaveBalance = await UserModel.find({email:currentEmpEmail});
const currentEmpID = currentLeaveBalance[0]._id;
// console.log(currentLeaveBalance,"currentLeaveBalance")




if(newValue=="approve"){


let UpdatedLeaveBalance = currentLeaveBalance[0].leaveBalance - total_leave_days;

    const RemainingLeaveupdation = await UserModel.findByIdAndUpdate(
      currentEmpID,
      { leaveBalance: UpdatedLeaveBalance },
      { new: true,runValidators: true}
    );

    if (!RemainingLeaveupdation) {
      return res.status(404).json({
        success: false,
        message: "Leave record not found"
      });
    }
}


if(newValue=="reject"){

let UpdatedLeaveBalance = Number(currentLeaveBalance[0].leaveBalance) + Number(total_leave_days);

    const RemainingLeaveupdation = await UserModel.findByIdAndUpdate(
      currentEmpID,
      { leaveBalance: UpdatedLeaveBalance },
      { new: true,runValidators: true}
    );

    if (!RemainingLeaveupdation) {
      return res.status(404).json({
        success: false,
        message: "Leave record not found"
      });
    }
}

    

   

     return res.status(200).json({
      success: true,
      message: "Leave updated successfully",
    
    });
       
        
       
      
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}



const allleavehistoryfunction = async (req, res) => {
    

    try{
       
        const AllUserDetails = await LeaveModel.find().sort({ createdAt: -1 });
        // console.log(AllUserDetails)
        res.status(200).json(AllUserDetails);

        }catch(error){
            res.status(500).json({message:error});
        }

}


module.exports = {manageattendancefunction,allattendancehistoryfunction,manageleavefunction,allleavehistoryfunction};