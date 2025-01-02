import React from 'react';
import { LogOut } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
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
  )
}
