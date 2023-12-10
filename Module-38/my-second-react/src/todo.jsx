// conditional rendering option 1
// export default function Todo({task , isDone}){
//    return( <h3>Task :{task} is done :{isDone}</h3>
//    )
// }

// conditional rendering option 2

// export default function Todo({task , isDone = true}){
//     if(isDone){
//         return(
//             <h3>Finished : {task}</h3>
//         )
//     }else{
//         return(
//             <h3>Work on : {task}</h3>
//         )
//     }

    
  
// }
 
// conditional rendering option 3

// export default function Todo({task , isDone}){
//        if(isDone){
//         return (<h3>Finished ,   that's great : {task}</h3>)
//        }
//        return(<h3>Work on your dream : {task}</h3>)
//     }
  // conditional rendering option 4

// export default function Todo({task , isDone}){
//        return( <h3>{isDone ? "Done " : "Do it"} :{task} is done :{isDone}</h3>
//        )
//     }
  // conditional rendering option 5
// export default function Todo({task , isDone}){
//        return( <h3>{task} : {isDone && "Done"}</h3>
//        )
//     }
// conditional rendering option 6
export default function Todo({task , isDone}){
       return( <h3>{task} : {isDone || "Do it"}</h3>
       )
    }

