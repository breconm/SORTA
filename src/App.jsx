import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Guest from './components/Guest.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20 px-4 max-w-4xl mx-auto font-mono">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/add-item" element={<p>➕ Add a new item form here.</p>} />
          <Route path="/category" element={<p>📂 Organize or view by category.</p>} />
          <Route path="/store" element={<p>🏬 View items by store.</p>} />
          <Route path="/settings" element={<p>⚙️ User settings and preferences.</p>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<p>ℹ️ Information about the app.</p>} />
          <Route path="/contact" element={<p>📞 Contact information or form.</p>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;