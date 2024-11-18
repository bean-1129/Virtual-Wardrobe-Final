import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Wardrobe from './pages/Wardrobe.tsx'
import About from './pages/About'
import { Home } from './pages/Home'
import SummerCollectionPage from './pages/SummerCollection'
import WinterCollectionPage from './pages/WinterCollection'
import SpringCollectionPage from './pages/SpringCollection'
import FallCollectionPage from './pages/FallCollection'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import AR from './pages/AR.jsx'
import ChatBot from './pages/ChatBot.jsx'

function App() {
  const [count, setCount] = useState(0)
  document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.MuiButtonBase-root');
    if (button) {
      button.style.display = 'none';
    }
  });
  

  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/summer-collection' element={<SummerCollectionPage />} />
          <Route path="/winter-collection" element={<WinterCollectionPage />} />
          <Route path="/spring-collection" element={<SpringCollectionPage />} />
          <Route path="/fall-collection" element={<FallCollectionPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/wardrobe' element={<Wardrobe />} />
          <Route path='/ar' element={<AR/>} />
          <Route path='/chatbot' element={<ChatBot/>} />
          <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
