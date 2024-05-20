import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import AccountSummary from './components/AccountSummary'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import SendMoneyToIndia from './components/SendMoneyToIndia'



function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/sendmoneytoindia' element={<SendMoneyToIndia/>}/>
     </Routes>
     </BrowserRouter>
     {/* <Router>
      <Navbar  links={["Home", "Login", "AccountSummary"]}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/accountsummary' element={<AccountSummary/>} />
      </Routes>
    </Router> */}
    
    <Header/>
    <Footer/>
    </>
  )
}

export default App
