import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

interface Product {
  id: string;
  title: string;
  location: string;
  time: string;
  date: string;
  description: string;
  imageUrl: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

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


  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="row">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {filteredProducts.map((product) => (
        <div className="col-sm-4" key={product.id}>

          <ProductCard userId={""} {...product} />

        </div>
      ))}
    </div>
  );
};

export default ProductList;
