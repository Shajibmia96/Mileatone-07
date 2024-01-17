// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'
const Cart = ({actor}) => {
    console.log(actor)
    return (
        <div>
            <div className="card">
                   <div >
                    <img className="photo" src="https://i.ibb.co/QnXmyzf/karen-gillan-1200.jpg" alt="" />
                   </div>
                   <h3>Name : Atonny disosa</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, tenetur. Et, optio!</p>
                   <div className="info">
                      <p>Salary : 200</p>
                      <p>Writer</p>
                   </div>
                   <button className='cart-btn'>Selected</button>
                </div>
        </div>
    );
};

export default Cart;