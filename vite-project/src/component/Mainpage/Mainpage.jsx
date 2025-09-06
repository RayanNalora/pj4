import React from 'react';
import Header from '../Header/Header';
import SearchSection from '../Header/SearchSection/SearchSection';
import LandList from '../Header/LandCard/LandList';
import ContactForm from '../Header/ContactForm/ContactForm';
import Advisors from '../Header/Advisors/Advisors';
import Footer from '../Footer/Footer';
// import Cover from '../Cover/Cover';
import { useNavigate } from "react-router-dom";
import ReasultSearch from "../Header/SearchSection/Filter/ReasultSearch/ReasultSearch";
import Login from '../login/login';
import Signup from '../Signup/Signup';
function Mainpage() {
  const navigate = useNavigate();
  const gotoContactForm = () => {
    navigate("/ContactForm"); // ينقلك لصفحة Main
  };
  return (
    <>

        <Header/>
        <SearchSection/>
        <LandList/>
        <Advisors/>
        <div className="imagetofram" style={{position: "relative"}}>
           <img src="/lands/Frame 89.png"></img>
           <div style={{display: "flex",justifyContent: "center",marginBottom: "-2px",position: "absolute",top: "150px",transform: "translateX(-50%)",left: "50%"}}>
              <button id="Post" style={{background:"#28a745", margin: "52px"}} onClick={gotoContactForm}>Post your land</button>
           </div>
        </div>
       
        {/* <ReasultSearch/> */}
        <Footer/>
    </>
  )
}

export default Mainpage;