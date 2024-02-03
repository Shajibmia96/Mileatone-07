// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handlesBooksMark}) => {
    // State for blogs
    const [blogs ,setBlogs] = useState([])
    
    // console.log(blogs)
    // UseEffect
    useEffect( () =>{
        fetch('blogs.json')
        .then (res => res.json())
        .then( data => setBlogs(data))
    } ,[])
   
    return (
        <div className='w-2/3'>
            <h2 className="text-4xl"> Blogs {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id}
                     blog={blog}
                     handlesBooksMark={handlesBooksMark}
                     ></Blog>)
            }
            
        </div>
    );
};

export default Blogs;