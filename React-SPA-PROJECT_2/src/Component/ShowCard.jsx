// import React from 'react';

const ShowCard = ({selectActors}) => {
    
    return (
        <div>
             <h1>Total actors: {selectActors.length}</h1>

             {
                selectActors.map((actor , idx) => <li key={idx}>{actor.name}</li>)
             }
        </div>
    );
};

export default ShowCard;