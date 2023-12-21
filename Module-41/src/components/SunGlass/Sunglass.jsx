import React from 'react';
import Watch from '../Watch/Watch';
import { add, multiply , divitedTwoNumbersIntoTWeentyFiveAndIsToMuchHigtNumbers as divited } from '../calculation';


const Sunglass = () => {

     const fisrt  =32;
     const second = 44;
     const sum = add(fisrt , second)
    //   console.log(sum)
      const multi  = multiply ()
       const vags = divited()

    return (
        <div>
            <Watch></Watch>
            <p>{sum}</p>
             
        </div>
    );
};

export default Sunglass;