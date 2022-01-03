import './App.css';
import { Routes, Route } from 'react-router-dom';

//component imports
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <p> Hello World !</p>
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/expertise' element={ < Projects /> }/>
      </Routes>
  
    </div>
);
}

export default App;
