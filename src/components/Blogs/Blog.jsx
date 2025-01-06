import  PropTypes from 'prop-types';
import { BsBookmarks } from "react-icons/bs";

const Blog = ({blog,handleAddToBookmark}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8'src={cover} alt={`Cover picture of the title ${title}`} />
            <div className="flex justify-between mb-4">
                <div className="flex mb-4">
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={handleAddToBookmark}
                    className='ml-2 text-blue-950'><BsBookmarks /></button>
                </div>
            </div>
            <h2 className ="text-4xl mb-4">{title}</h2>
            <p>
                {hashtags.map((hash,idx)=><span key={idx}><a href="">{hash}</a></span>)}
            </p>
        </div>
    );
};

//need to install propTpes.  go to react proptypes in google
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;