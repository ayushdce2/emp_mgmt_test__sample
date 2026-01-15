import React, { useState } from "react";
import {
  FaUsers,
  FaUserTie,
  FaMoneyCheckAlt,
  FaCalendarAlt,
  FaBell,
  FaSignOutAlt,
  FaTachometerAlt,
  FaClipboardList,
  FaCog,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 transition-colors">

        {/* Sidebar */}
        <aside className="w-64 shrink-0 bg-gradient-to-b from-blue-600 to-indigo-700 text-white hidden md:flex flex-col">
          <div className="p-6 text-2xl font-bold flex items-center gap-2">
            <FaUserTie />
            HRMS
          </div>

          <nav className="flex-1 px-4 space-y-2">
            <MenuItem icon={<FaTachometerAlt />} label="Dashboard" active />
            <MenuItem icon={<FaUsers />} label="Employees" />
            <MenuItem icon={<FaClipboardList />} label="Attendance" />
            <MenuItem icon={<FaMoneyCheckAlt />} label="Payroll" />
            <MenuItem icon={<FaCog />} label="Settings" />
          </nav>

          <div className="p-4">
            <button className="flex items-center gap-2 w-full bg-red-500 py-2 rounded-lg justify-center transition hover:bg-red-600 hover:shadow-lg">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">

          {/* Navbar */}
          <header className="bg-white dark:bg-gray-800 shadow flex justify-between items-center p-4">
            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Dashboard
            </h1>

            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-600 dark:text-gray-300 transition hover:scale-110"
              >
                {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </button>

              <FaBell className="text-gray-600 dark:text-gray-300 cursor-pointer transition hover:text-blue-600 hover:scale-110" />

              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold cursor-pointer hover:ring-2 hover:ring-blue-400">
                HR
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="p-6 space-y-6">

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard title="Employees" value="120" icon={<FaUsers />} color="from-blue-500 to-indigo-500" />
              <StatCard title="Departments" value="8" icon={<FaUserTie />} color="from-green-500 to-emerald-500" />
              <StatCard title="On Leave" value="5" icon={<FaCalendarAlt />} color="from-yellow-500 to-orange-500" />
              <StatCard title="Payroll Pending" value="3" icon={<FaMoneyCheckAlt />} color="from-red-500 to-pink-500" />
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
                Recent Activities
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <ActivityItem text="John Doe marked attendance" />
                <ActivityItem text="Payroll processed for IT department" />
                <ActivityItem text="New employee added – Sarah Smith" />
                <ActivityItem text="Leave approved for Mark" />
              </ul>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
