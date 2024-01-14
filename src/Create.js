import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added");
            setIsPending(false);
            navigate('/');
        });

    };

    return (
        <div className="create">
            <h1 className="title">Compose a Stellar Blog Entry</h1>

            <form className="flex" onSubmit={handleSubmit}>
                
                <div className="form-field flex">
                    <label>Title</label>
                    <input type="text" placeholder="Enter title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                
                <div className="form-field flex">
                    <label>Body</label>
                    <textarea required placeholder="Start typing.." value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                
                <div className="form-field flex">
                    <label>Author</label>
                    <input type="text" placeholder="Enter author" required value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </div>
                
                {!isPending && <button>Post blog</button>}
                {isPending && <button>Posting...</button>}

            </form>
        </div>
    );
}
 
export default Create;