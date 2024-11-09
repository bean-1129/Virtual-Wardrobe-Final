import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../imgs/logo.png';

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Simulate authentication check
  useEffect(() => {
    const token = localStorage.getItem('token'); 
    // console.log(token);
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <header className='parentNavbar'>
      <nav
        style={{ display: 'flex', flexDirection: 'row' }}
        className='items-center justify-center flex font-bold shadow-md flex-row navbar no-underline'
      >
      <div className='logo-container'>
      <img src={logo} className='logo' />
      </div>
        <NavLink to="/" className="text-justify flex no-underline text-black">
          <p className='blue-gradient_text'>Home</p>
        </NavLink>
        <NavLink to="/wardrobe" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          <p>Wardrobe</p>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          <p>About Us</p>
        </NavLink>
        
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout">
            <p>Log Out</p>
          </button>
        ) : (
          <>
            <NavLink to="/login" className="login">
              <p>Login</p>
            </NavLink>
            <NavLink to="/signup" className="signup">
              <p>SignUp</p>
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
