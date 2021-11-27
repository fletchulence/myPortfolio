import './App.css';
import { Routes, Route } from 'react-router-dom';

//component imports
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <p> Hello World !</p>
      <Header />

        <Routes>
          <Route path='/' element={ <Home />}/>
          {/* <Route path='expertise' element={Home}/> */}
        </Routes>
    </div>
  );
}

export default App;
