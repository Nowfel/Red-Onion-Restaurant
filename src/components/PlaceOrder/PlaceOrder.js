import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Address from "../Address/Address";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [formComplete, setFormComplete] = useState(false);
  const [deliveryDetails, setDeliveryDetails] = useState({});

  const handleForm = (e) => {
    const details = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: e.target.address.value,
      city: e.target.city.value,
    };

    setDeliveryDetails(details);
    setFormComplete(true);

    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <Address
            handleForm={handleForm}
            formComplete={formComplete}
          ></Address>
        </div>
        <div className="col-md-5">
          <Cart
            formComplete={formComplete}
            deliveryDetails={deliveryDetails}
          ></Cart>
          <Link to="/tracking">
            <button className="btn btn-danger">Track Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
