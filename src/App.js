import './App.css';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Book from './components/pages/Book';
import Menu from './components/pages/Menu';
import Footer from './components/pages/Footer';
import SignIn from './components/pages/Signin';
import SignUp from './components/pages/Signup';
import ThankYou from './components/pages/Thankyou';
import BookingConfirmation from './components/pages/BookingConfirmation';
import Cart from './components/pages/Cart.jsx';
import AboutNextbite from './components/pages/AboutNextBite';
import Checkout from './components/pages/Checkout.jsx';
import PlaceOrder from './components/pages/Placeorder.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/aboutnextbite" element={<AboutNextbite/>} />
        <Route path='/checkout' element={<Checkout/>}></Route> 
        <Route path='/place-order' element={<PlaceOrder/>}></Route>
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
