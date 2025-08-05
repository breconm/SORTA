import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Guest from './components/Guest.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import './App.css';

function App() {
  const [isLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <main className="pt-20 px-4 max-w-4xl mx-auto font-mono">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/add-items" element={isLoggedIn ? <p>➕ Add a new item form here.</p> : <Login />} />
          <Route path="/category" element={isLoggedIn ? <p>📂 Organize or view by category.</p> : <Login />} />
          <Route path="/store" element={isLoggedIn ? <p>🏬 View items by store.</p> : <Login />} />
          <Route path="/settings" element={isLoggedIn ? <p>⚙️ User settings and preferences.</p> : <Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} /> {/* Render About component */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;