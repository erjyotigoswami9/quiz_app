import { useState } from 'react'
import './App.css'
import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'
import { Quiz } from './components/Quiz'
import { PrivateRoute } from './PrivateRoute'
import { Result } from './components/Result'

function App() {

  return (
   <div>
       <Navbar/>
       <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/quiz' element={<PrivateRoute><Quiz/></PrivateRoute>} />
            <Route path='/result' element={<PrivateRoute><Result/></PrivateRoute>} />
            <Route path='*' element={<NotFound/>} />
       </Routes>
   </div>
  )
}

export default App
