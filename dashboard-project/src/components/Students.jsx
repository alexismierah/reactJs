import React, { Component } from 'react';

export class Dashboard extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Courses</h1>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Mathematics</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Active</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Science</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">Active</td>
              </tr>
              {/* Add more courses here */}
            </tbody>
          </table>
          <h1 className="text-3xl font-bold mt-8 mb-4">Upcoming Assignments</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
                <h3 className="text-lg font-semibold">Mathematics Assignment</h3>
                <p className="text-sm text-gray-500">Due Date: May 15th, 2024</p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
                <h3 className="text-lg font-semibold">Science Project</h3>
                <p className="text-sm text-gray-500">Due Date: May 20th, 2024</p>
              </div>
            </div>
            {/* Add more assignments here */}
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;