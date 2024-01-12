import './App.css';
import Home from './home';
import Navbar from './navBar';

function App() {
  return (
    <div className="App">
      
      <header className="primary-header flex">
        <div>
          <img className="logo" src={require("./logo.svg").default} alt="logo" />
        </div>
        <Navbar />
      </header>

      <main>
        <div className="content">
          <Home />
        </div>
      </main>

    </div>
  );
}

export default App;
