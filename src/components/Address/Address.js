import React from "react";
import { useAuth } from "../useAuth/useAuth";
import "./Address.css";

const Address = (props) => {
  const auth = useAuth();
  const { name, email } = auth;

  return (
    <div className="address-form">
      <form onSubmit={props.handleForm}>
        <input
          className="address-header"
          type="text"
          name="title"
          value="Edit Delivery Detail"
        />
        <input type="text" name="name" value={name} placeholder="Name" />
        <input type="text" name="email" value={email} placeholder="Email" />
        <textarea
          className="address-field"
          rows="5"
          name="address"
          placeholder="Enter Your Address "
          required
        ></textarea>
        <br />
        <input type="text" name="city" placeholder="City" required />
        <input
          className="btn btn-danger address-btn"
          type="submit"
          value="Save and Continue"
          disabled={props.formComplete}
        />
      </form>
    </div>
  );
};

export default Address;
