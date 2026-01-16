const UserModel = require("../models/User.js");
const AttandanceModel = require("../models/Attandance.js")

const applyattendancefunction = async (req, res) => {
    try {
        console.log(req.user,"req.body");
        const { email,_id, userRole,name } = req.user;
        const { AttendanceStatus } = req.body;
   
        const currentDate = new Date().toLocaleDateString("en-CA");
        console.log(currentDate,"currentDate")
     
        const existingAttendance = await AttandanceModel.findOne({ email,todaysDate:currentDate });
        if (!existingAttendance && AttendanceStatus) {
         
            const markattendance = new AttandanceModel({ email, todaysDate:currentDate,markattendaceStatus:"Present",userRole,name });
              await markattendance.save();
              res.status(201).json({ success: true, message: "Marked Present Today" });
        }
        if(existingAttendance){
            // console.log("Already exists");
            res.status(409).json({ success: false, message: "Already Marked for Today" });
        }
        
       
      
        
    } catch (error) {
        // console.error(error);
        res.status(500).json({ message: 'Internal Server Error', success: false });
    }
}



const attendancehistoryfunction = async (req, res) => {
    
// console.log(req.query.email,"req.body");

const {email,_id}= req.user;
    try{
       
        const AllUserDetails = await AttandanceModel.find({email}).sort({ createdAt: -1 });
        // console.log(AllUserDetails)
        res.status(200).json(AllUserDetails);

        }catch(error){
            res.status(500).json({message:error});
        }

}


module.exports = {applyattendancefunction,attendancehistoryfunction};