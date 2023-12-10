export default function Singers({singer}) {
    console.log(singer)
       const   name = singer.name
       const age = singer.age
      return(
         <div>
            <h4>singerName : {name}</h4>
             <p>age : {age}</p>
         </div>
      )
}