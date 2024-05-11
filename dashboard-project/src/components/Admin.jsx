import React, { Component } from 'react';

export class Dashboard extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Student Profiles</h1>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Courses Enrolled</th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">1</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">john.doe@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Mathematics, Science</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">70%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">2</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Jane Smith</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">jane.smith@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">English, History</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">85%</td>
              </tr>
              {/* Add more rows as needed */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">3</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Adam Johnson</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">adam.johnson@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Physics, Chemistry</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">78%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">4</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Emily Brown</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">emily.brown@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">Art, Music</td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-300">92%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default Dashboard;
