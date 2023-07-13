import React, { useState } from "react";
import { auth, db, storage } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

export default function UseAddProduct () {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState("");

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);

    };
    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setLocation(e.target.value);
        ;
    };
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setDescription(e.target.value);
    };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }

    };
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };
    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTime(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title !== "" && location !== "" && description !== "" && image) {
            const storageRef = ref(storage, `images/${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);

            // Get the download URL for the uploaded image
            const downloadURL = await getDownloadURL(snapshot.ref);

            const userId = auth.currentUser?.uid;

            // Save the product data to Firestore
            const docRef = await addDoc(collection(db, "product"), {
                title,
                location,
                description,
                date,
                userId,
                time,
                imageUrl: downloadURL,
                completed: false,
            });
            setTitle("");
            setLocation("");
            setDescription("");
            setImage(null);
            setImageUrl("");
            setDate("");
            setTime("");
        }
    };

    return {
        title,
        location, 
        description, 
        date,
        time,
        image,
        imageUrl,
         handleTitleChange, 
         handleDescriptionChange, 
         handleLocationChange, 
         handleImageChange,
         handleDateChange,
         handleTimeChange,
         handleSubmit,
        
    };
};

// export default useAddProduct;
