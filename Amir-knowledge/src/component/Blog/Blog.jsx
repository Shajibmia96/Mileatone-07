// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";


const Blog = ({blog , handlesBooksMark}) => {
    console.log(blog)
    const {cover_img , title , reading_time,post_date,hash_tag,author_name,author_img } = blog ;
    return (
        <div className='md:pt-5 mb-10'>
             <div className='space-y-3 mb-5'>
                  <img className='rounded-md' src={cover_img} alt="" />
                  <div className='flex justify-between items-center'>
                    {/* author-info */}
                     <div className='flex gap-6 items-center'>
                         {/* author-img */}
                         <div>
                         <img className='w-16 rounded-full' src={author_img} alt="" />
                         </div>
                         {/* publish date */}
                         <div>
                            <h1 className='text-4xl font-bold mb-2'>{author_name}</h1>
                            <p>{post_date}</p>
                         </div>
                     </div>
                     {/* reading time */}
                     <div className='pr-3 flex gap-3'>
                        <p>{reading_time} min read</p>
                        <button onClick={handlesBooksMark}><FaBookmark>
                            </FaBookmark></button>
                     </div>
                  </div>
                  {/* title */}
                  <h1 className='text-4xl font-bold'>{title}</h1>
                  {/* hashTag */}
                  <p className=' text-green-400'>
                    {
                        hash_tag.map((hash , idx) => <span className='mr-5'  key={idx}><a href="">#{hash}</a></span> )
                    }
                  </p>

                  <button className='text-2xl font-semibold text-blue-600'>Mark as read</button>
             </div>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;