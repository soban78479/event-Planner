import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  title: string;
  location: string;
  time: string;
  date: string;
  description: string;
  imageUrl: string;
  userId: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  location,
  time,
  date,
  description,
  imageUrl,
  userId,
}) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "product", id));
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  return (
    <div className="card">
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            {location} | {date} | {time}
          </small>
        </p>
        {userId && (
          <div className="d-flex justify-content-between">
            <Link to={`/productDetail/${id}`} className="btn btn-primary">
              View
            </Link>
            <Link to={'/myEvent'}><button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button></Link>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
