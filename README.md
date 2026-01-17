# Employee Leave & Attendance Management System (Mini HR Tool)

A full-stack HR management system that allows employees to mark attendance, apply for leave, and track history while enabling admins to manage employee attendance and approve/reject leave requests.

This project was developed as part of a Full-Stack Developer technical assignment to demonstrate backend business logic, authentication, role-based access control, and frontend integration.

---

## 🚀 Live Demo

Frontend URL: https://empmgmttestsample.vercel.app/
Backend API URL: https://emp-mgmt-test-sample.onrender.com/api

---

## 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt (Password Hashing)
* Joi

### Database

* MongoDB (Mongoose ODM)

### Deployment

* Frontend: Vercel
* Backend: Render

---

## ✨ Features

### Employee Features

* User Registration & Login
* Mark Daily Attendance (One record per day)
* View Attendance History
* Apply for Leave (Casual, Sick, Paid)
* View Leave Status & History
* View Remaining Leave Balance
* Profile

### Admin Features

* View Attendance of All Employees
* Update Attendance Status (Present / Absent)
* Approve / Reject Leave Requests

---

## 🔐 Authentication & Authorization

* JWT based authentication
* Password hashing using bcrypt
* Role based access control (Employee / Admin)
* Protected routes using middleware
* Managed Unauthorized access

---

## 📂 Project Structure

```
root
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── admin
│   │   ├── employee
│   │   ├── assets
│   │   ├── auth
│   │   ├── utility
│   │   └── App.js
│
└── README.md
```

---

## 📦 Installation & Setup

### Clone Repository

```
git clone https://github.com/ayushdce2/emp_mgmt_test__sample
```

---

### Backend Setup

```
cd backend
npm install
npm start
```

---

### Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 📡 API Endpoints

### Auth Routes

* POST `/api/auth/register` → Register user
* POST `/api/auth/login` → Login user

### Attendance Routes

* POST `/api/employee/attendance/applyattendance` → Mark attendance
* GET `/api/employee/attendance/attendancehistory` → Get logged-in user's attendance
* GET `/api/admin/attendance/attendancehistory` → Admin: Get all attendance

### Leave Routes

* POST `/api/employee/leave/applyleave` → Apply leave
* GET `/api/employee/leave/leavesummary` → View own leave history
* PUT `/api/admin/leave/:id` → Admin approve/reject leave

---

---

## ⚠ Known Limitations

* Email notification system not implemented
* No biometric or geo-location based attendance
* Basic UI animations only
* Unit testing not added

---

## ⏱ Time Spent

Approximate development time:

* Backend: 10 hours
* Frontend: 10 hours
* Testing & Deployment: 4 hours

Total: ~24 hours

---


---
## AI Usage Declaration

AI tools were used responsibly as assistance during development.

### Tools Used:

* ChatGPT

### Usage Details:

AI assistance was used for:

* Boilerplate code generation
* API structure suggestions
* Error debugging and optimization tips
* UI layout inspiration
* Documentation formatting


## No blind copy-paste was performed.

