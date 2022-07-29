import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import ShopPage from './pages/shoppage';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop/hats' element={<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
