import React, { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useAuth } from "context/authContext";

interface Product {
  id: string;
  title: string;
  location: string;
  date: string;
  time: string;
  description: string;
  imageUrl: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [attendees, setAttendees] = useState<string[]>([]);
  const [showAttendees, setShowAttendees] = useState<boolean>(false);
  const { currentUser } = useAuth();
  const { user } = useAuth();
  useEffect(() => {
    const getProduct = async () => {
      if (!id) {
        return; // or handle the case where id is undefined
      }
      const docRef = doc(db, "product", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct(docSnap.data() as Product);
      }
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleJoinClick = () => {
    const userId = user.uid; // replace with actual user ID
    setAttendees([...attendees, userId!]);
    console.log(attendees);
    console.log(userId);
    alert("You have joined!");
  };
  const handleAttendeesClick = () => {
    setShowAttendees(!showAttendees);
  };
  return (
    <div id="detail-div">
      <div id="detail-image" style={{ display: "inline-block" }}>
        <img src={product.imageUrl} alt="Product Image" />
      </div>
      <div id="detailcard-des" style={{ display: "inline-block" }}>
        <h1>{product.title}</h1>
        <p>{product.location}</p>
        <p>{product.time}</p>
        <p>{product.date}</p>
        <p>{product.description}</p> <br /> <br />
        {!currentUser ? (
          <button onClick={handleJoinClick}>Join</button>
        ) : (
          <p>Please login to join.</p>
        )}{" "}
        <br /> <br />
        <button onClick={handleAttendeesClick}>Attendees</button>
        {showAttendees && (
          <div>
            <h3>Attendees:</h3>
            {attendees.map((attendee) => (
              <p key={attendee}>{attendee}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
