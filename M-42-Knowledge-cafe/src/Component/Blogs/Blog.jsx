import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    // const [cover_img , tittle] = blog;
    const {cover_img , title, author_img, author_name ,reading_time ,post_date ,hash_tag} = blog
    return (
        <div>
             <img className='w-[800px]' src={cover_img} alt={`this is images of ${title}`} />
              
              {/* div for author / bookMarks */}
              <div className='flex justify-between'>
                    {/* div for author */}
                    <div className="flex items-center">
                            {/* div for author img */}
                            <div>
                                  <img className="w-[60px] rounded-full" src={author_img} alt="" />
                                  
                            </div>

                            {/* div for author name */}
                            <div className="ml-6">
                            <h1 className="text-3xl font-bold">{author_name}</h1>
                            <p>{post_date}</p>
                            </div>

                    </div>

                    {/* div for bookMarks */}
                    <div>
                         <span>{reading_time}</span>
                    </div>
              </div>
             <h1 className="text-[2.5rem] font-bold">{title}</h1>
             <p>
                {
                    hash_tag.map((hash , idx )=> <span key={idx}>#{hash}</span>)
                }
             </p>
        </div>
    );
};

Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;