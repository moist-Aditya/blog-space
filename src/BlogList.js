import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {

    return (
        <div className="blog-list">
            <h1 className="title">{title}</h1>
            { blogs.map(blog => (
                <div className="blog-container" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-author">By <span>{blog.author}</span></p>
                        <p className="blog-body">{blog.body.substring(0, 200) + "..."}</p>
                    </Link>
                </div>
            )) }
        </div>
    );
}
 
export default BlogList;