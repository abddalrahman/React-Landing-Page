import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopLinks from './components/TopLinks';
import NewProds from './components/NewProds';
import AdvertSection from './components/AdvertSection';
import TodayDeal from './components/TodayDeal';
import MidLinks from './components/MidLinks';
import Reviews from './components/Reviews';
import NewsArticles from './components/NewsArticles';
import Footer from './components/Footer';
import SwipSection from './components/SwipSection';
import NavBar from './components/NavBar';
import Home from './Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
