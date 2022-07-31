import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  Header from './components/header/header';
import HomePage from './pages/homepage';
import ShopPage from './pages/shoppage';
import { SignInUp } from './pages/sign-in-up-page';
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
 constructor(){
  super();
  this.state = {
    currentUser : null
  };
 }
  logOutUser = null;
 componentDidMount(){
  this.logOutUser = auth.onAuthStateChanged(user =>{
    this.setState({currentUser : user});
});
}

 componentWillUnmount(){
  console.log("UNMOUNT");
  this.logOutUser();
 }

 render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/shop/hats' element={<ShopPage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/signin' element={<SignInUp/>}/>
      </Routes>
    </div>
  );
 }
}

export default App;
