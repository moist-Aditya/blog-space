const BlogList = ({ blogs, title, handleDelete }) => {

    return (
        <div className="blog-list">
            <h1 className="list-title">{title}</h1>
            { blogs.map(blog => (
                <div className="blog-container" key={blog.id}>
                    <h2 className="blog-title">{blog.title}</h2>
                    <p className="blog-author">Written by: {blog.author}</p>
                    <p className="blog-body partial">{blog.body.substring(0, 200) + "..."}</p>
                </div>
            )) }
        </div>
    );
}
 
export default BlogList;