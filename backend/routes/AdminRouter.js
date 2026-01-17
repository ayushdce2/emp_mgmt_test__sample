const { isUserAuthorize } = require("../middleware/isUserAuthorize");
const { isUserAuthenticated } = require("../middleware/isUserAuthenticated");
const {
  manageattendancefunction,
  allattendancehistoryfunction,
  manageleavefunction,
  allleavehistoryfunction,
} = require("../controller/AdminController");

const router = require("express").Router();

router.put(
  "/attendance/:id",
  isUserAuthenticated,
  isUserAuthorize("admin"),
  manageattendancefunction
);
router.get(
  "/attendance/attendancehistory",
  isUserAuthenticated,
  isUserAuthorize("admin"),
  allattendancehistoryfunction
);

router.put(
  "/leave/:id",
  isUserAuthenticated,
  isUserAuthorize("admin"),
  manageleavefunction
);
router.get(
  "/leave/leavehistory",
  isUserAuthenticated,
  isUserAuthorize("admin"),
  allleavehistoryfunction
);

module.exports = router;
