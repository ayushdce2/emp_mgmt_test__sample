# Employee Leave & Attendance Management System (Mini HRMS)

A full-stack HR management system that allows employees to mark attendance, apply for leave, and track history while enabling admins to manage employee attendance and approve/reject leave requests.

This project was developed as part of a Full-Stack Developer technical assignment to demonstrate backend business logic, authentication, role-based access control, and frontend integration.

---

## 🚀 Live Demo

Frontend URL: [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
Backend API URL: [https://your-backend-url.render.com](https://your-backend-url.render.com)

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
* Profile Management

### Admin Features

* View All Employee Records
* View Attendance of All Employees
* Update Attendance Status (Present / Absent)
* Approve / Reject Leave Requests
* Role-based Protected Dashboard

---

## 🔐 Authentication & Authorization

* JWT based authentication
* Password hashing using bcrypt
* Role based access control (Employee / Admin)
* Protected routes using middleware
* Unauthorized access returns proper HTTP status codes

---

## 📂 Project Structure

```
root
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.js
│
└── README.md
```

---

## 📦 Installation & Setup

### Clone Repository

```
git clone https://github.com/yourusername/hrms-project.git
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

## 🔑 Environment Variables

Create `.env` file in backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📡 API Endpoints

### Auth Routes

* POST `/api/auth/register` → Register user
* POST `/api/auth/login` → Login user

### Attendance Routes

* POST `/api/attendance/mark` → Mark attendance
* GET `/api/attendance/my` → Get logged-in user's attendance
* GET `/api/attendance/all` → Admin: Get all attendance

### Leave Routes

* POST `/api/leave/apply` → Apply leave
* GET `/api/leave/my` → View own leave history
* PUT `/api/leave/status/:id` → Admin approve/reject leave

---

## 🗃 Database Models

### User Model

* name
* email
* password
* role
* joiningDate
* leaveBalance

---

### Attendance Model

* userId
* date
* status

---

### Leave Model

* userId
* leaveType
* startDate
* endDate
* totalDays
* status
* appliedDate
* reason

---

## 👑 Admin Credentials (Seeded)

```
Email: admin@hrms.com  
Password: Admin@123  
```

---

## ⚠ Known Limitations

* Email notification system not implemented
* No biometric or geo-location based attendance
* Basic UI animations only
* Unit testing not added

---

## ⏱ Time Spent

Approximate development time:

* Backend: 8 hours
* Frontend: 10 hours
* Testing & Deployment: 4 hours

Total: ~22 hours

---

## 🤖 AI Tools Usage Declaration

Details provided below in the AI Declaration section.

---

## 📌 Future Improvements

* Monthly attendance reports
* Export attendance to Excel/PDF
* Email notifications
* Leave calendar view
* Pagination and filters
* Unit testing
* Docker support

---

## ✅ Submission Notes

* Fully functional deployed application
* Role-based access implemented
* Clean folder structure
* Proper authentication & authorization
* Business logic implemented manually

---
## AI Usage Declaration

AI tools were used responsibly as assistance during development.

### Tools Used:

* ChatGPT
* GitHub Copilot

### Usage Details:

AI assistance was used for:

* Boilerplate code generation
* API structure suggestions
* Error debugging and optimization tips
* UI layout inspiration
* Documentation formatting

### Manually Implemented Logic:

The following parts were designed and implemented manually:

* Authentication flow and JWT integration
* Role-based authorization logic
* Attendance marking rules (one record per day, no future date)
* Leave approval workflow
* Leave balance deduction logic
* Database schema relationships
* Frontend API integration
* UI business flow

All generated code was reviewed, modified, and optimized manually to match project requirements and business rules.

No blind copy-paste was performed.

---
## Deployment Details

### Frontend

* Hosted on: Vercel
* Build Command: npm run build
* Output Directory: build

### Backend

* Hosted on: Render
* Environment Variables configured securely
* Auto redeploy on GitHub push enabled

CORS and API base URLs are properly configured for production environment.

---
