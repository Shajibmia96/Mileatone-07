import { useState } from "react";

 export default function Team (){
      const [teamCount , setTeam] = useState(11)
    //   console.log(useState)

      const handlesAdd =() =>{
          const newCount = teamCount + 1;
          setTeam(newCount)
      };

      const handlesRemove =() =>{
        
        setTeam(teamCount - 1)
      }
    const teamStyles ={
        border : "3px solid purple",
        padding: "20px",
        marginTop: "20px",
        borderRadius : "20px"
    }

    return (
        <div style={teamStyles}>

            <h3>Player : {teamCount}</h3>
            <button onClick={handlesAdd}>Add</button>
            <button onClick={handlesRemove}>Remove</button>

        </div>
    )
 }