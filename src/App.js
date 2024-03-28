import './App.css';
import BlogDetails from './BlogDetails';
import Create from './Create';
import LoginForm from './Login';
import NotFound from './NotFound';
import Home from './home';
import Navbar from './navBar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      
      <header className="primary-header flex">
        <div>
          <Link to="/">
            <img className="logo" src={require("./logo.svg").default} alt="logo" />
          </Link>
        </div>
        <Navbar />
      </header>

      <main>
        <div className="content">
          <Routes>

            {/* Homepage */}
            <Route path='/' element={<Home />} />

            {/* Create Blog */}
            <Route path='/create' element={<Create />} />
            
            {/* Blog details */}
            <Route path='/blogs/:id' element={<BlogDetails />} />

            {/* Login */}
            <Route path='/login' element={<LoginForm />} />

            {/* 404 Not Found */}
            <Route path='/*' element={<NotFound />} />

          </Routes>
        </div>
      </main>

    </div>
    </Router>
  );
}

export default App;
