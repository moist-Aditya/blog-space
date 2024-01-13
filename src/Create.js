import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <div className="create">
            <h1 className="title">Compose a Stellar Blog Entry</h1>

            <form className="flex">
                
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
                
                <button>Post blog</button>

            </form>
        </div>
    );
}
 
export default Create;