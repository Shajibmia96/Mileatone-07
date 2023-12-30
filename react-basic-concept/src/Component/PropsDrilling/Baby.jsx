// import React from 'react';
import PropTypes from "prop-types"
const Baby = ({value}) => {
    return (
        <div>
             <h1>My name is Shajiya Islam Hollon</h1>
             <h1>Counts : {value}</h1>
        </div>
    );
};

Baby.propTypes={
    value:PropTypes.number
}
export default Baby;