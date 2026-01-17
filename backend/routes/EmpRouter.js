
const {isLeaveDataValid} = require("../middleware/isLeaveDataValid.js")
const {isUserAuthorize} = require("../middleware/isUserAuthorize");
const {isUserAuthenticated} = require("../middleware/isUserAuthenticated");
const {applyattendancefunction,attendancehistoryfunction, applyleavefunction,getLeaveSummary} = require("../controller/EmpController")


const router = require("express").Router();

router.post("/leave/applyleave",isUserAuthenticated, isUserAuthorize("employee"), isLeaveDataValid, applyleavefunction);
router.get("/leave/leavesummary",isUserAuthenticated, isUserAuthorize("employee"),getLeaveSummary); 



router.post("/attendance/applyattendance",isUserAuthenticated, isUserAuthorize("employee"), applyattendancefunction);
router.get("/attendance/attendancehistory",isUserAuthenticated, isUserAuthorize("employee"), attendancehistoryfunction);




module.exports = router;