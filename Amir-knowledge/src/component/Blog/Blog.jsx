// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;