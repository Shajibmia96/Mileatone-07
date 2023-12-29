// import React from 'react';
import image from "../../public/images/react.png";
// import Views from "./Views.JSX";
import "./title.css"
const Cart = (props) => {
  const {name, age } = props;

  console.log(props);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title title">{name}</h2>
        </div>
        <figure>
          <img src={image} alt="" />
        </figure>
        <p>
          age: <span style={{ color: "red", font: "30px" }}>{age}</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
