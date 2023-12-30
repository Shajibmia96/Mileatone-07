// import React from 'react

import { useState } from "react";
import Children  from "./Children";

const GranParent = () => {
     const [value ,setValue] = useState(0)
      
     const handleAdd=() =>{
        setValue(value+1)
  }
    return (
        <div>
            <h1>value : {value}</h1>
             <Children value={value} setValue={setValue} handleAdd={handleAdd}></Children>
         
        </div>
    );
};

export default GranParent;