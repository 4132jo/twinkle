import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './components/Home'

import Footer from './components/Footer'
import Header from './components/Header'
import SendMoneyToIndia from './components/SendMoneyToIndia'



function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/sendmoneytoindia' element={<SendMoneyToIndia/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     
    
    
    
    </>
  )
}

export default App
