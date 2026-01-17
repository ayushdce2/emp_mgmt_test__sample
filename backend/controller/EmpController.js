const UserModel = require("../models/User.js");
const AttandanceModel = require("../models/Attandance.js");
const LeaveModel = require("../models/Leave.js");

const applyattendancefunction = async (req, res) => {
  try {
    console.log(req.user, "req.body");
    const { email, _id, userRole, name } = req.user;
    const { AttendanceStatus } = req.body;

    const currentDate = new Date().toLocaleDateString("en-CA");
    console.log(currentDate, "currentDate");

    const existingAttendance = await AttandanceModel.findOne({
      email,
      todaysDate: currentDate,
    });
    if (!existingAttendance && AttendanceStatus) {
      const markattendance = new AttandanceModel({
        email,
        todaysDate: currentDate,
        markattendaceStatus: "Present",
        userRole,
        name,
      });
      await markattendance.save();
      res.status(201).json({ success: true, message: "Marked Present Today" });
    }
    if (existingAttendance) {
      // console.log("Already exists");
      res
        .status(409)
        .json({ success: false, message: "Already Marked for Today" });
    }
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

const attendancehistoryfunction = async (req, res) => {
  // console.log(req.query.email,"req.body");

  const { email, _id } = req.user;
  try {
    const AllUserDetails = await AttandanceModel.find({ email }).sort({
      createdAt: -1,
    });
    // console.log(AllUserDetails)
    res.status(200).json(AllUserDetails);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const applyleavefunction = async (req, res) => {
  try {
    // console.log(req.user,"req.user");
    // console.log(req.body,"req.body");

    const { email, _id, userRole, name } = req.user;
    const { fromDate, toDate, leaveType, reason } = req.body;

    const currentDate = new Date().toLocaleDateString("en-CA");

    const toDate_applied = new Date(toDate);
    const fromDate_applied = new Date(fromDate);

    fromDate_applied.setHours(0, 0, 0, 0);
    toDate_applied.setHours(0, 0, 0, 0);

    //  console.log(toDate , fromDate_applied,"toDate - fromDate")

    const total_leave_days = toDate_applied - fromDate_applied;
    const difference_leaveDays = total_leave_days / (1000 * 60 * 60 * 24);

    const leavesRemaining = await UserModel.find({ email });

    const leaves_in_stock = leavesRemaining[0].leaveBalance;

    // console.log(leaves_in_stock,"--e-=",difference_leaveDays+1);

    if (
      fromDate < currentDate ||
      toDate < currentDate ||
      toDate < fromDate ||
      difference_leaveDays + 1 < 0
    ) {
      // console.log("Dates are mismatch, check again")
      res
        .status(409)
        .json({ success: false, message: "Dates are mismatch, check again" });
    } else if (difference_leaveDays + 1 - leaves_in_stock > 0) {
      //    console.log("insufefircient");
      res
        .status(409)
        .json({ success: false, message: "Insufficient Leave Balance" });
    } else {
      // console.log("good to go");
      const existingLeave = await LeaveModel.findOne({
        email,
        date_from: { $lte: toDate },
        date_to: { $gte: fromDate },
      });
      //   console.log(existingLeave,"existingLeave")

      if (existingLeave) {
        // console.log("Already exists");
        res
          .status(409)
          .json({ success: false, message: "This time period already exists" });
      }

      if (!existingLeave) {
        //  console.log(leaveType,"<=============leaveType")
        const submitLeave = new LeaveModel({
          total_leave_days: difference_leaveDays + 1,
          email,
          name,
          date_from: fromDate,
          date_to: toDate,
          leave_type: leaveType,
          leave_reason: reason,
        });
        await submitLeave.save();

        res.status(201).json({ success: true, message: "Leave Applied" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

const getLeaveSummary = async (req, res) => {
  // console.log(req.query.email,"req.body");

  const { email, _id } = req.user;
  try {
    const AllLeavesDetails = await LeaveModel.find({ email }).sort({
      createdAt: -1,
    });
    // console.log(AllUserDetails)
    res.status(200).json(AllLeavesDetails);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = {
  applyattendancefunction,
  attendancehistoryfunction,
  applyleavefunction,
  getLeaveSummary,
};
