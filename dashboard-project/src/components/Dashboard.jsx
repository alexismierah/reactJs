import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    const updates = [
      { title: 'School Event', description: 'Join us for the annual sports day on May 15th.', date: '2024-05-10' },
      { title: 'Exam Schedule', description: 'Final exam schedule has been posted. Check your email for details.', date: '2024-05-09' },
      { title: 'Holiday Notice', description: 'School will remain closed on May 20th for Memorial Day.', date: '2024-05-08' }
    ];

    return (
      <main className="flex-1 bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-4">School Updates</h2>
        <div className="container mx-auto">
          {updates.map((update, index) => (
            <div key={index} className="border border-gray-300 rounded-md p-4 mb-4">
              <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
              <p className="text-gray-600 mb-2">{update.description}</p>
              <p className="text-sm text-gray-400">{new Date(update.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default Dashboard;
