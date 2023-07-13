import React, { useEffect, useState } from "react";
// import { collection, getDocs, where, query } from "firebase/firestore";
// import { db } from "../config/firebase";
// import ProductCard from "../src/pages/myEvent";
// import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";
// import { useAuth } from "../context/authContext";

// interface Product {
//   id: string;
//   title: string;
//   location: string;
//   description: string;
//   imageUrl: string;
//   userId: string;
//   time: string;
//   date: string;
// }

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const { currentUser } = useAuth();
//   useEffect(() => {
//     console.log('currentUser:', currentUser);
//     const fetchProducts = async () => {
//       if (currentUser) {
//         const q = query(
//           collection(db, "product"),
//           where("userId", "==", currentUser?.uid)
//         );
//         const data = await getDocs(q);
//         const productsList = data.docs.map(
//           (doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }) as Product
//         );
//         setProducts(productsList);
//       }
//     };

//     fetchProducts();
//   }, [currentUser]);

//   if (!products || products.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="row">
//       {products.map((product) => (
//         <div className="col-sm-4" key={product.id}>
//           <Link to={`/product/${product.id}`}>
//             <ProductCard {...product} />
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
