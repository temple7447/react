import React from 'react';
import './Style.css'; // Import your CSS for styling
import { Link } from 'react-router-dom';
import axios from 'axios';




const EcommerceCard = ({ storedData }) => {

const HandleDelete = (storedData)=>{
  try {
    axios.post("https://charming-cod-gaiters.cyclic.app/upload_Categories/delete",{id: storedData?._id})
    .then(()=> console.log("it was a success"))
  } catch (error) {
    console.log(error)
  }

  // console.log(storedData._id)

}

  return (
    <div className="cardcontainer">
      <Link to={`/SingleProduct`} className="product-link">
        <img src={storedData?.Images[0]} alt="Product" className="modelimage" />
      </Link>
      <div className="card-details">
        <div className="card-title">{storedData?.Title}</div>
        <p className="card-description">{storedData?.Description?.split(' ').slice(0, 25).join(' ')}...</p>
        <div className="card-category">
          <span className="category-label">Category:</span>
          <span className="category-value">{storedData?.Categories}</span>
        </div>
        <div className="card-category">
          <span className="category-label">Subcategory:</span>
          <span className="category-value">{storedData?.SubCategories}</span>
        </div>
        <p className="card-price">&#x20A6;{storedData?.Price}</p>
        <button onClick={()=>HandleDelete(storedData)} className="card-button">Delete</button>
      </div>
    </div>
  );
};

export default EcommerceCard;
