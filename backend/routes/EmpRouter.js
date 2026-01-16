// const {ProfileFunction, UpdatePersonalDetails,UpdatePassword, PunchInFunction,PunchOutFunction,getattandancedetails, applyleavefunction, getLeaveSummary} = require("../controllers/UserController.js");
// const {isUserAuthenticated} = require("../middlewares/isUserAuthenticated.js");
// const {isUpdatePersonalDataValid} = require("../middlewares/isUpdatePersonalDataValid.js");
// const {isUpdatePasswordDataValid} = require("../middlewares/isUpdatePasswordDataValid.js");
// const {isPunchInDataValid} = require("../middlewares/isPunchInDataValid.js");
// const {isPunchOutDataValid} = require("../middlewares/isPunchOutDataValid.js");
const {isLeaveDataValid} = require("../middleware/isLeaveDataValid.js")
const {isUserAuthorize} = require("../middleware/isUserAuthorize");
const {isUserAuthenticated} = require("../middleware/isUserAuthenticated");
const {applyattendancefunction,attendancehistoryfunction, applyleavefunction,getLeaveSummary} = require("../controller/EmpController")


const router = require("express").Router();

router.post("/leave/applyleave",isUserAuthenticated, isUserAuthorize("employee"), isLeaveDataValid, applyleavefunction);
router.get("/leave/leavesummary",isUserAuthenticated, isUserAuthorize("employee"),getLeaveSummary); 

// router.get("/attendance/viewattendance",isUserAuthenticated, getLeaveSummary); 

router.post("/attendance/applyattendance",isUserAuthenticated, isUserAuthorize("employee"), applyattendancefunction);
router.get("/attendance/attendancehistory",isUserAuthenticated, isUserAuthorize("employee"), attendancehistoryfunction);

// router.post("/attendance/applyattendance",isUserAuthenticated, isUserAuthorize(["employee"]),applyattendancefunction);


module.exports = router;