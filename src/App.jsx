import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Signup from './components/Signup/Signup.jsx';
import Login from './components/Login/Login.jsx';
import Guest from './components/Guest/Guest.jsx';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('Home');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  return (
    <>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} isLoggedIn={isLoggedIn} />
      <main className="pt-20 px-4 max-w-4xl mx-auto font-mono">
        {currentTab === 'Home' && (
          <>
            <Hero />
            {!isLoggedIn && (
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setCurrentTab('Signup')}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Sign Up
                </button>
                <button
                  onClick={() => setCurrentTab('Login')}
                  className="border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-100"
                >
                  Login
                </button>
              </div>
            )}
          </>
        )}
        {currentTab === 'Guest' && <Guest />}
        {currentTab === 'Add Item' && isLoggedIn && <p>➕ Add a new item form here.</p>}
        {currentTab === 'Category' && isLoggedIn && <p>📂 Organize or view by category.</p>}
        {currentTab === 'Store' && isLoggedIn && <p>🏬 View items by store.</p>}
        {currentTab === 'Settings' && isLoggedIn && <p>⚙️ User settings and preferences.</p>}
        {currentTab === 'Signup' && <Signup />}
        {currentTab === 'Login' && <Login />}
        {currentTab === 'About' && <p>ℹ️ Information about the app.</p>}
        {currentTab === 'Contact' && <p>📞 Contact information or form.</p>}
        {currentTab === 'Logout' && (
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setCurrentTab('Home');
            }}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Sign Out
          </button>
        )}
      </main>
    </>
  );
}

export default App;