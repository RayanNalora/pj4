import React from 'react';
import './Header.css'; // تأكد من إنشاء هذا الملف
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/Mainpage');
  }
  const goToSignin = () => {
    navigate('/Login');
  }
  const goToSignup = () => {
    navigate('/Signup');
  }


  return (
    <header className="header">
      <div className="logo">
        <img src="../public/lands/landbook.jpg" alt="LandBook" />
      </div>
      <nav className="nav-links">
        <a  onClick={goToHome} href="">Home</a>
        {/* <a href="/details">Details</a> */}
        <a href="#Post">Post</a>
        <a href="#Footer">Footer</a>
        <button className="btn signup" onClick={goToSignup}>Sign up</button>
        <button className="btn signin" onClick={goToSignin}>Sign in</button>
      </nav>
    </header>
  );
};

export default Header;