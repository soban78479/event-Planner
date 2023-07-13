import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CartProps {
  items: Array<{
    id: number;
    title: string;
    price: string;
    description: string;
    imageUrl: string;
    quantity: number;
  }>;
  removeItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, removeItem }) => {
  const totalPrice = items.reduce(
    (total, item) => total + parseInt(item.price) * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart</h1>
      {items.length > 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>
                    <div className="d-flex">
                      <img
                        src={item.imageUrl}
                        alt="Product"
                        style={{ maxWidth: "100px" }}
                      />
                      <div className="ml-3">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>
                    <Button variant="danger" onClick={() => removeItem(item.id)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={3}></td>
                <td>
                  <strong>Total Price:</strong>
                </td>
                <td>
                  <strong>{totalPrice} USD</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <Link to="/checkout">
            <Button variant="primary">Proceed to Checkout</Button>
          </Link>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
