// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Store from './Store'
import Home from './Home'



function App() {


  return (

      <Routes>

        <Route path='/' element={<Home/>} />
          <Route  path='/Store'element={<Store/>} />
         
 
      </Routes>


  )
}

export default App
