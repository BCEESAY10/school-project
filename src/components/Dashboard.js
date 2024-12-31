import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  BarChart, Bar,
  ResponsiveContainer 
} from 'recharts';
import { 
  Users, GraduationCap, School, Calendar,
  TrendingUp, Clock, Award, DollarSign
} from 'lucide-react';

export default function Dashboard() {

    const [timeFilter, setTimeFilter] = useState('term1');
  
    const performanceData = {
      term1: [
        { month: 'Sep', average: 75 },
        { month: 'Oct', average: 78 },
        { month: 'Nov', average: 82 },
        { month: 'Dec', average: 80 }
      ],
      term2: [
        { month: 'Jan', average: 77 },
        { month: 'Feb', average: 79 },
        { month: 'Mar', average: 81 },
        { month: 'Apr', average: 83 }
      ],
      term3: [
        { month: 'Apr', average: 76 },
        { month: 'May', average: 79 },
        { month: 'Jun', average: 82 },
        { month: 'Jul', average: 85 }
      ],
      yearly: [
        { month: 'Term 1', average: 78.75 },
        { month: 'Term 2', average: 80 },
        { month: 'Term 3', average: 80.5 }
      ]
    };

    const genderData = [
        { name: 'Male', value: 450 },
        { name: 'Female', value: 550 }
      ];

    const COLORS = ['#0088FE', '#FF8042'];


  return (
    <div className='container bg-gray-100'>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Student Performance</h2>
            <select 
              className="border rounded-md px-3 py-1"
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
            >
              <option value="term1">Term 1</option>
              <option value="term2">Term 2</option>
              <option value="term3">Term 3</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData[timeFilter]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="average" stroke="#0088FE" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gender Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Gender Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
