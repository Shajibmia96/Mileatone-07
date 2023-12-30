// import React from 'react';
import image from "../../public/images/react.png";
// import Views from "./Views.JSX";
import "./title.css"
import PropTypes from 'prop-types';
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
        <p className="text-3xl text-blue-200">age: {age} </p>
      </div>
    </div>
  );
};

Cart.propTypes ={
  name:PropTypes.object,
  age:PropTypes.object
}

export default Cart;
