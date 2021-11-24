import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <p> Hello World !</p>

      <Router>
        <Routes>
          <Route path='/' element={ <Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
