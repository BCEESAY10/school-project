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
import { LogOut } from 'lucide-react';

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
    <div className="min-h-screen w-[1500px] bg-gray-200">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl font-bold text-violet-600">GS Schools - Admin</h1>
          <div className="flex space-x-6">
            <Link className="text-gray-700 text-2xl font-semibold hover:text-violet-600" to="/classes">
              Classes
            </Link>
            <Link className="text-gray-700 text-2xl font-semibold hover:text-violet-600" to="/students">
              Students
            </Link>
            <Link className="text-gray-700 text-2xl font-semibold hover:text-violet-600" to="/teachers">
              Teachers
            </Link>
            <Link className="text-gray-700 text-2xl font-semibold hover:text-violet-600" to="/attendance">
              Attendance
            </Link> 
            <Link className="text-gray-700 text-2xl font-semibold hover:text-violet-600" to="/reports">
              Reports
            </Link>
            <Link className="text-gray-700 text-2xl font-semibold hover:text-violet-600" to="/transcripts">
              Transcripts
            </Link>
            <Link className="text-gray-700 text-2xl font-semibold hover:text-violet-600" to="/settings">
              Settings
            </Link>
            <Link to="/"><button className="text-red-500 px-4 font-semibold hover:underline"><LogOut /></button></Link>
          </div>
        </div>
      </nav>

      {/* Dashboard content */}
      <div className="p-6 space-y-6">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 flex flex-col justify-center items-center rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Total Students</h3>
            <p className="text-4xl font-bold text-orange-400">100</p>
          </div>
          <div className="bg-white p-6 flex flex-col justify-center items-center rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Total Teachers</h3>
            <p className="text-4xl font-bold text-orange-400">25</p>
          </div>
          <div className="bg-white p-6 flex flex-col justify-center items-center rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Attendance Rate</h3>
            <p className="text-4xl font-bold text-orange-400">92%</p>
          </div>
          <div className="bg-white p-6 flex flex-col justify-center items-center rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Teacher-Student Ratio</h3>
            <p className="text-4xl font-bold text-orange-400 ">1:20</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Gender Distribution</h3>
            <div className="w-72 h-72 mt-10 mx-auto"> 
              <Pie data={genderData} /> 
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold">Performance</h3>
            <select
              className="mb-4 mt-2 text-xl p-2 border border-gray-300 rounded"
              onChange={(e) => console.log(e.target.value)} 
            >
              <option value="term">Term 1</option>
              <option value="term">Term 2</option>
              <option value="term">Term 2</option>
              <option value="year">Year</option>
            </select>
            <Bar data={performanceData} />
          </div>
        </div>
      </div>
    </div>
  );
};

