import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './components/signup';
import Signin from './components/signin';
import Places from './components/places';
import About from './components/about';
import Bookingform from './components/bookingform';
import Top from './components/top';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Top/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/places" element={<Places/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/bookingform" element={<Bookingform/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
