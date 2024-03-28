import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    const [search, setSearch] = useState('')

    const filteredBlogs = blogs && blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home">
            
            {/* Progress bar */}
            <div id="progress"></div>

            {/* Search bar */}
            <div className="search-bar-container flex">
                <div className="search-bar flex">
                    <label>Search</label>
                    <input
                        type="text"
                        placeholder="Enter the title.."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
                

            {/* Blogs start here */}
            {error && <div>Error: {error}...</div>}
            {isPending && <div>Loading...</div>}
            {/* {blogs && <BlogList blogs={blogs} title="Orbiting All Blogs..."/>} */}
            {filteredBlogs && <BlogList blogs={filteredBlogs} title="Orbiting All Blogs..." />}

        </div>
    );
}
 
export default Home;
