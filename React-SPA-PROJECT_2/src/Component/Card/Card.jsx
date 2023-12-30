import './Card.css'

const Card = ({card , handleClick}) => {
    console.log(card)
    const {name,image,salary,country ,role
    } = card
    return (
        <div>
            <div className="card-container">
                    <div className="img-container">
                         <img src={image} alt="" />
                    </div>
                    <h3>{name}</h3>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reiciendis </small></p>
                    <div className="info">
                        <p>Salary : {salary}</p>
                        <p>{role}</p>
                    </div>
                    
                    <button onClick={()=>handleClick(card)} className="card-btn">Selected</button>
                    
              </div>
        </div>
    );
};

export default Card;