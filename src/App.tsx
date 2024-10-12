import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Users from './Pages/Users/Users'
import Products from './Pages/Products/Products'
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Login/Login'
import "./Style/Global.scss";
import SingleUser from './Pages/SingleUser/SingleUser'
import SingleProduct from './Pages/SingleProduct/SingleProduct'




function App() {


  // handel Nested Route :---------
  const ContentWrapper = () => {
    return (
        <div className="cotainer ">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
    );
  };
  


  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<ContentWrapper/>}>
            <Route  index   element={<Home/>}/>
            <Route  path='home'  element={<Home/>}/>
            <Route  path='users'  element={<Users/>}/>
            <Route  path='/user/:id'  element={<SingleUser/>}/>
            <Route  path='/products'  element={<Products/>}/>
            <Route  path='/product/:id'  element={<SingleProduct/>}/>
          </Route>
          <Route  path='login'  element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )

}

export default App
