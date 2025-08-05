import React from 'react';

function UserSettings() {
  return (
    <section className="min-h-screen bg-white pt-24 px-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h1>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Dark Mode</span>
          <input type="checkbox" className="toggle toggle-md" />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700">Enable Notifications</span>
          <input type="checkbox" className="toggle toggle-md" />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700">Auto-Sync</span>
          <input type="checkbox" className="toggle toggle-md" />
        </div>
      </div>
    </section>
  );
}

export default UserSettings;
