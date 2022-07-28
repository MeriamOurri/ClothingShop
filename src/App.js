import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import About from './pages/about';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop/hats' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
