import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//component imports
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <h1> Welcome to my Website! </h1>
      <Header />

      <div className='Bio'> {/* this will be all about the */}
        <h1> Bio / About me </h1>
        <ul>
          <li> worked on a farm </li>
          <li> degree in MechE </li>
          <li> looking to be a fullStack Dev for the REST OF TIME</li>
        </ul>
      </div>

      <div className='Projects'>
        
      </div>


      <Routes>
        {/* <Route path='/' element={ <Home /> }/> */}
        <Route path='/expertise' element={ < Projects /> }/>
      </Routes>

       
      <div>
        this should produce an error 
      </div>
  
    </div>
);
}

export default App;
