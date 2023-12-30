// import React from 'react';
import PropTypes from "prop-types"
import Baby from "./Baby";

const Children = ({value , setValue}) => {

    const handleAdd=() =>{
        setValue(value+1)
    }
    return (
        <div>
            <h1>Children</h1>
            <div className="text-3xl text-center">
                <h1>Count :{value} </h1>
                <button onClick={handleAdd} className="btn btn-info">Add</button>
            </div>
            <Baby value={value}></Baby>
        </div>
    );
};
Children.propTypes={
   value:PropTypes.number,
   setValue:PropTypes.number
}
export default Children;