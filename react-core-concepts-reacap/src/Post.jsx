import './post.css'
export default function Post ({post}){
     console.log(post)
     const {id , body ,userId} = post
    return(
        <div className="box">
            <h4> id : {id} </h4>
            <p>userId :{userId}</p>
            <p>body : {body} </p>
        </div>
    )

} 