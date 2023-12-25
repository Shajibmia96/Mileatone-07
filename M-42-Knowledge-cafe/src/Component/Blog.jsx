
import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {

      const [blogs , setBlogs]=useState([])

      useEffect( () =>{
           fetch("blogs.json")
           .then(res => res.json())
           .then(data => console.log(data))
      },[])
 
    return (
        <div>
              <h1>This is blog state</h1>
        </div>
    );
};

export default Blog;