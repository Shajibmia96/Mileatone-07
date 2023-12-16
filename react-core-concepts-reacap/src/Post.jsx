import './post.css'
export default function Post ({post}){
     console.log(post)
     const {id , body} = post
    return(
        <div className="box">
            <h4> id : {id} </h4>
            <p>body : {body} </p>
        </div>
    )

} 