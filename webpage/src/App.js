import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

//component imports
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <p> Hello World !</p>
      <Header />

      <Router>
        <Routes>
          <Route path='/' element={ <Home />}/>
          {/* <Route path='expertise' element={Home}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
