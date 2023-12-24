
// import './Battles/battle.css'
import './battle.css'
const Battle = ({bottle , handleBottle}) => {
   const {name , img ,price} = bottle
    // console.log(bottle)
    return (
        <div className="bottle-bow">
             
             <h4>battle name : {name}</h4>
             <img src={img} alt="" />
             <p>price :${price}</p>
             <button onClick={()=>handleBottle(bottle)}>Purchase</button>
             
        </div>
    );
};

export default Battle;