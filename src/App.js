import { Route, Routes } from 'react-router-dom';
import './App.css';
import  Header from './components/header/header';
import HomePage from './pages/homepage';
import ShopPage from './pages/shoppage';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop/hats' element={<ShopPage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
