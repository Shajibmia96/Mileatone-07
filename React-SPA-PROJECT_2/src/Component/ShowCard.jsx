// import React from 'react';

const ShowCard = ({selected}) => {
    const {name, imge} = selected
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default ShowCard;