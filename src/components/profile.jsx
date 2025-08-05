import React from 'react';

function Profile() {
  return (
    <section className="min-h-screen bg-white pt-24 px-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Profile</h1>

      <div className="flex flex-col items-center space-y-2">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl text-gray-500">
          👤
        </div>
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p className="text-gray-500">k</p>
      </div>

      <div className="mt-8 flex justify-around text-center">
        <div>
          <p className="text-xl font-bold">24</p>
          <p className="text-sm text-gray-500">Total Items</p>
        </div>
        <div>
          <p className="text-xl font-bold">3</p>
          <p className="text-sm text-gray-500">Categories</p>
        </div>
        <div>
          <p className="text-xl font-bold">2</p>
          <p className="text-sm text-gray-500">Stores</p>
        </div>
      </div>

      <div className="mt-10 divide-y border-t border-gray-200">
        {[
          { icon: '✏️', label: 'Edit Profile' },
          { icon: '⚙️', label: 'Settings' },
          { icon: '❓', label: 'Help & Support' },
          { icon: 'ℹ️', label: 'About' },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <span className="text-gray-800">{item.label}</span>
            </div>
            <span className="text-gray-400 text-lg">›</span>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="text-red-600 font-medium hover:underline">Log Out</button>
      </div>
    </section>
  );
}

export default Profile;
