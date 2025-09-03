// import React from 'react'
import Header from '../Header/Header';
import "./LandGallery.css"; // تأكد من ربط ملف CSS
import LandInfo from '../landdetailspage/LandInfo/LandInfo';
import Footer from '../Footer/Footer';
import LandBookingCard from '../landdetailspage/LandBookCard/LandBookCard';
import CommentSection from '../landdetailspage/CommentSection/CommentSection';
import CropTable from '../landdetailspage/CropTable/CropTable';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
const Landgallery = () => { 

  const { id } = useParams();
  const [lands,setLands]=  useState([]);
  useEffect (() => {
    const fetchLands = async () => {
      try {
        console.log('aaaayybbbbbbbvv44') ;
        const res = await axios.get(`/api/v1/lands/${id}`)
        console.log(res.data);
        console.log(res.data);
        setLands(res.data.data.lands) ; 
      }
      catch(error) {
        console.log("errorrrrrrrr66") ; 
      }
    } ;
  
    fetchLands() ; 
  },[id]);
  const landImages = [
    "/public/landdetailspage/p1.jpg",
    "/public/landdetailspage/p2.jpg",
    "/public/landdetailspage/p3.jpg",
    "/public/landdetailspage/p4.jpg",
    "/public/landdetailspage/p5.jpg",
    "/public/landdetailspage/p1.jpg",
    "/public/landdetailspage/p2.jpg",
    "/public/landdetailspage/p3.jpg",
    "/public/landdetailspage/p4.jpg",
    "/public/landdetailspage/p5.jpg",
  ];
 
  return (
    <>
    <Header/>
     {/* second_section  */}
    <div className="containerr">
      <img src='../public/lands/icon.png' style={{width: "20px"
                     , height: "20px" , margin: "auto 4px"}}/>
       <em style={{margin:"25px auto"}}>And now you can see the details and every thing about the land you chose</em>
       <img src='../public/lands/icon.png' style={{width: "20px"
                     , height: "20px" , margin: "auto  6px",marginBottom: "-4px"}}/>
      <div className="image-grid">
        {landImages.map((src, idx) => (
          <div className="image-card" key={idx}>
            <img src={src} alt={`Land ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
    {/* therd_section  */}
    <div className="details-box">
        {/* <p style={{color: "#B3B3B3"}}>Add your comment:</p> */}
    </div>
    <LandInfo/>
    <CropTable/>
    <LandBookingCard/>
    <CommentSection/>
    <Footer/>
    </>
  )
}

export default Landgallery;
