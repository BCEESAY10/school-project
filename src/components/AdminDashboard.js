import React from "react";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function AdminDashboard () {
  
  const genderData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Students by Gender",
        data: [60, 40], 
        backgroundColor: ["#4F46E5", "#F59E0B"],
        borderWidth: 1,
      },
    ],
  };

  const performanceData = {
    labels: ["Term 1", "Term 2", "Term 3"],
    datasets: [
      {
        label: "Average Performance (%)",
        data: [75, 85, 80], 
        backgroundColor: "#4F46E5",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-violet-600">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <Link className="text-gray-700 hover:text-violet-600" to="/classes">
              Classes
            </Link>
            <Link className="text-gray-700 hover:text-violet-600" to="/students">
              Students
            </Link>
            <Link className="text-gray-700 hover:text-violet-600" to="/teachers">
              Teachers
            </Link>
            <Link className="text-gray-700 hover:text-violet-600" to="/attendance">
              Attendance
            </Link>
            <Link className="text-gray-700 hover:text-violet-600" to="/reports">
              Reports
            </Link>
            <Link className="text-gray-700 hover:text-violet-600" to="/transcripts">
              Transcripts
            </Link>
            <Link className="text-gray-700 hover:text-violet-600" to="/settings">
              Settings
            </Link>
            <Link to="/"><button className="text-red-500 hover:underline">Logout</button></Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-3xl font-bold text-violet-600">100</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Teachers</h3>
            <p className="text-3xl font-bold text-violet-600">25</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Attendance Rate</h3>
            <p className="text-3xl font-bold text-violet-600">92%</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Gender Distribution</h3>
            <Pie data={genderData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Performance</h3>
            <select
              className="mb-4 mt-2 p-2 border border-gray-300 rounded"
              onChange={(e) => console.log(e.target.value)} 
            >
              <option value="term">Term</option>
              <option value="year">Year</option>
            </select>
            <Bar data={performanceData} />
          </div>
        </div>
      </div>
    </div>
  );
};

