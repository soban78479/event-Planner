import { auth } from "config/firebase";
import { useAuth } from "context/authContext";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  location: string;
  time: string;
  date: string;
  description: string;
  imageUrl: string;
  userId: string;
}



const ProductCard = ({id, title,date,time, location, description, imageUrl }: Product) => {
 
  return (
    <div className="card">
      <img src={imageUrl} alt="Product Image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{location}</p>
        
       <Link to={`/productDetail/${id}`}>
        <button>detail</button>
        
        </Link> <br />
       
      </div>
    </div>
  );
};

export default ProductCard;
// import React from "react";
// import { Link } from "react-router-dom";

// interface Product {
//   id: number;
//   title: string;
//   price: string;
//   description: string;
//   imageUrl: string;
// }



// const ProductCard = ({id, title, price, description, imageUrl, onAddToCart }: ProductCardProps) => {
  
//   return (
//     <div className="card">
//       <img src={imageUrl} alt="Product Image" />
//       <div className="card-body">
//       <Link to={`/product/${product.id}`}>
//           <h5 className="card-title">{product.title}</h5>
//         </Link>
//         <p className="card-text">{description}</p>
//         <p className="card-text">{price}</p>
        
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
