import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Fragment } from "react";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch(`http://192.168.242.240:8000/blogs/${id}`);
    const navigate = useNavigate();

    const renderBodyWithLineBreaks = () => {
        return blog.body.split('\n').map((paragraph, index) => (
          <Fragment key={index}>
            {paragraph}
            <br />
          </Fragment>
        ));
    };

    const handleDeleteBlog = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("Blog deleted");
            navigate('/');
        });
    };
      

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <div className="blog">
                    <h1 className="title">Journeying Through...</h1>
                    <article>
                        <h2 className="blog-title">{blog.title}</h2>
                        <p className="blog-author">By <span>{blog.author}</span></p>
                        <div className="blog-body">{renderBodyWithLineBreaks()}</div>

                        <button className="btn-delete" onClick={handleDeleteBlog}>Delete Blog</button>
                    </article>
                </div>
            )}
        </div>
    );
}
 
export default BlogDetails;