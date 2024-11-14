import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
      <h1>Hello world!</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
      </Routes>
      <nav>
        <ul>
          <li className='text-blue-500'><Link to="/">Home</Link></li>
          <li className='text-blue-500'><Link to="/about-us">About us page</Link></li>
          <li className='text-blue-500'><Link to="/contact-us">Contact us page</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default App
