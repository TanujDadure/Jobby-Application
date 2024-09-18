import React from 'react'
import {BrowserRouter ,Routes,Route}  from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import Jobs from './Component/Jobs'
import NotFound from './Component/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Jobs' element={<Jobs/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

