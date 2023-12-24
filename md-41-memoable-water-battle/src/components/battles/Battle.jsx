
// import './Battles/battle.css'
import './battle.css'
const Battle = ({bottle}) => {
   const {name , img ,price} = bottle
    console.log(bottle)
    return (
        <div className="bottle-bow">
             
             <h4>battle name : {name}</h4>
             <img src={img} alt="" />
             <p>price :${price}</p>
             
        </div>
    );
};

export default Battle;