import React, { useState, useEffect } from 'react';
// import './ResultSearch.css';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";


const ReasultSearch = () => {
// بيانات الأراضي
const [lands, setLands] = useState([]);
const [filteredLands,setFilteredLands] = useState([]);
const [filtered, setFiltered] = useState([]);
const location = useLocation();

const { term } = useParams();
useEffect (() => {
  const fetchLands = async () => {
    try {
      console.log('aaaayybbbbbbbvv') ;
      const res = await axios.get("/api/v1/lands/")
      // console.log(res.data);
      setLands(res.data.data.lands) ; 
      setFiltered(res.data.data.lands) ; 
    }
    catch(error) {
      console.log("errorrrrrrrr") ; 
    }
  } ;

  fetchLands() ; 
},[]);
  
// useEffect (() => {
//   const filtered = lands.filter(
//     (land)=> 
//       land.city?.toUpperCase().includes(term.toUpperCase()) 
//   );
//     setFilteredLands(filtered);
// },[lands,term]);

  return(
  <>
      {filteredLands.map(property => (
          <div key={property.id} className="property-item">
            <div className="property-image">
              <img src="/lands/p1.jpg"  />
              lllll
            </div>
            
            <div className="property-details">
              <div className="property-header">

              <p style={{display:"flex"}}>
                <img src="/lands/dollers.png" style={{width: "20px",height: "20px"}} />
                <div className="property-price">{property.price}</div>
              </p>

              <p style={{display:"flex"}}>
                 <img src="/lands/house.jpg" style={{width: "20px",height: "20px",marginRight: "4px"}} />
                 <div className="property-size">{property.area} Dunmas</div>

             </p>
             <p style={{display:"flex"}}>
                 <img src="/lands/Land location.jpg" style={{width: "20px",height: "20px",marginRight: "4px"}} />
                 <div className="property-location">
                   {property.city}
                 </div>
             </p>
              </div>
              
              <p className="property-description">{property.description}</p>
              
              <div className="property-footer">
                <div className="owner-info">
                  <span className="owner-icon">
                  <img src="/lands/profile-circle.png" style={{width: "20px",height: "20px",marginRight: "4px"}} />
                  </span>
                  {/* {property.climate} */}
                </div>
                <button className="contact-button">Contact</button>
              </div>
            </div>
          </div>
        ))}
  </>
  );
};

export default ReasultSearch;
