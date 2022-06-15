
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home';
import Exercises from './pages/Exercises';
const App = () => {
  return (
    <>
    <NavBar/>
    <h1>BANK</h1>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercises' element={<Exercises/>}/>
    </Routes>
    <Footer/>
    </>
  )
} 

export default App;
