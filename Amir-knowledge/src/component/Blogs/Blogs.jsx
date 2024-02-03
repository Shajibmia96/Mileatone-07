// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    // State for blogs
    const [blogs ,setBlogs] = useState([])
    
    console.log(blogs)
    // UseEffect
    useEffect( () =>{
        fetch('blogs.json')
        .then (res => res.json())
        .then( data => setBlogs(data))
    } ,[])
   
    return (
        <div>
            
        </div>
    );
};

export default Blogs;