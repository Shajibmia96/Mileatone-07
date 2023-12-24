import PropTypes from 'prop-types'; 

import './cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h4>Card here : {cart.length}</h4>

            <div className="cart-container">
            {
                cart.map(battle => <img key={battle.id} src={battle.img}></img>)
            }
            </div>
        </div>
    );
};

 Cart.propTypes ={
    cart:PropTypes.array.isRequired,
    
 }

export default Cart;