"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Greetings', progress: 80 },
  { name: 'Phrases', progress: 65 },
  { name: 'Numbers', progress: 95 },
  { name: 'Family', progress: 40 },
];

export default function ProgressPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Progress</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Lesson Completion</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="progress" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Badges Earned</h2>
          <div className="flex space-x-4">
            <div className="p-4 bg-yellow-400 rounded-full">🌟</div>
            <div className="p-4 bg-blue-400 rounded-full">📘</div>
            <div className="p-4 bg-green-400 rounded-full">💬</div>
          </div>
        </div>
      </div>
    </div>
  );
}
