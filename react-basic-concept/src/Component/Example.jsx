// import React from 'react';
import PropTypes from "prop-types"
const Example = ({children}) => {
    return (
        <div>
             <h1>This is my Example pet</h1>
              {children}
        </div>
    );
};

Example.propTypes ={
    children:PropTypes.array
}
export default Example;