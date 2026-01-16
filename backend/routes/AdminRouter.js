// const {ProfileFunction, UpdatePersonalDetails,UpdatePassword, PunchInFunction,PunchOutFunction,getattandancedetails, applyleavefunction, getLeaveSummary} = require("../controllers/UserController.js");
// const {isUserAuthenticated} = require("../middlewares/isUserAuthenticated.js");
// const {isUpdatePersonalDataValid} = require("../middlewares/isUpdatePersonalDataValid.js");
// const {isUpdatePasswordDataValid} = require("../middlewares/isUpdatePasswordDataValid.js");
// const {isPunchInDataValid} = require("../middlewares/isPunchInDataValid.js");
// const {isPunchOutDataValid} = require("../middlewares/isPunchOutDataValid.js");
// const {isLeaveDataValid} = require("../middlewares/isLeaveDataValid.js")
const {isUserAuthorize} = require("../middleware/isUserAuthorize");
const {isUserAuthenticated} = require("../middleware/isUserAuthenticated");
const {manageattendancefunction,allattendancehistoryfunction,manageleavefunction,allleavehistoryfunction} = require("../controller/AdminController")


const router = require("express").Router();

// router.post("/leave/apply",isUserAuthenticated, isLeaveDataValid, applyleavefunction);
// router.get("/leave/summary",isUserAuthenticated, getLeaveSummary); 

// router.get("/attendance/viewattendance",isUserAuthenticated, getLeaveSummary); 

router.put("/attendance/:id",isUserAuthenticated, isUserAuthorize("admin"), manageattendancefunction);
router.get("/attendance/attendancehistory",isUserAuthenticated, isUserAuthorize("admin"), allattendancehistoryfunction);

router.put("/leave/:id",isUserAuthenticated, isUserAuthorize("admin"), manageleavefunction);
router.get("/leave/leavehistory",isUserAuthenticated, isUserAuthorize("admin"), allleavehistoryfunction);

// router.post("/attendance/applyattendance",isUserAuthenticated, isUserAuthorize(["employee"]),applyattendancefunction);


module.exports = router;