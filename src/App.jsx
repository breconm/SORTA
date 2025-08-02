import { useState } from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
// import Hero from './components/Hero/Hero.jsx'
import './App.css'

function App() {
  const [currentTab, setCurrentTab] = useState('All Items');

  return (
    <>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="pt-20 px-4 max-w-4xl mx-auto font-mono">
        {currentTab === 'All Items' && <p>🛒 Show all items here.</p>}
        {currentTab === 'Category' && <p>📂 Organize or view by category.</p>}
        {currentTab === 'Store' && <p>🏬 View items by store.</p>}
        {currentTab === 'Add Item' && <p>➕ Add a new item form here.</p>}
      </main>
    </>
  );
}

export default App
