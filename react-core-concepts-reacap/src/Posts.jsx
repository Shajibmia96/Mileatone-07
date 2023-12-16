import { useEffect, useState } from "react"
import Post from "./Post"

 export default function Posts(){

    //   create a state to store data
      const [posts , setPosts] = useState([])

    //   create a use effect with no dependencies
      useEffect(()=>{
        // Use fetch to load data
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then( res => res.json())
        .then(data =>setPosts(data))
      } , [])
      return(
        <div>
            <h3>Posts : {posts.length}</h3>
            {
                posts.map(post => <Post post ={post}></Post> )
            }
        </div>
      )
  }