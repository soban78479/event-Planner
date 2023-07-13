import React, { useEffect, useState} from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import ProductCard from "../../component/myProductCard";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useAuth } from "context/authContext";
import Footer from "component/footer";

interface Product {
  id: string;
  title: string;
  location: string;
  time: string;
  date: string;
  description: string;
  imageUrl: string;
  userId:string;
}

const ProductList = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const { currentUser } = useAuth();
  const userid = currentUser?.uid; 
  const { user } = useAuth()
  
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getDocs(collection(db, "product"));
      const productsList = data.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as Product)
      );
      setProducts(productsList);
    };

    fetchProducts();
  }, []);


  const filteredProducts = products.filter((product) => product.userId === user.uid);


  return (
    <div className="row">
         <h1>Manage your Events</h1>
      {filteredProducts.map((product) => (
        <div className="col-sm-4" key={product.id}>
       
            <ProductCard {...product} />
         
        </div>
      ))}
    
    </div>
  );
};

export default ProductList;
