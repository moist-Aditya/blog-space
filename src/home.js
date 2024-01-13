import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://192.168.242.240:8000/blogs');



    return (
        <div className="home">
            {error && <div>Error: {error}...</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Orbiting All Blogs..."/>}
        </div>
    );
}
 
export default Home;