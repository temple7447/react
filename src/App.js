
import './App.css'

import Unique from './Unique'
import { MyContextProvider } from './AppProvider'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './Main/DashBoard'
import Store from './Main/Store'
import StoreData from './Main/StoreData'
import Order from './Main/Order'
import User from './Main/User'


function App() {


  return (
    <MyContextProvider>
      <Routes>

        <Route path='/' element={<Unique />} >
          <Route index element={<DashBoard />} />
        <Route path='Upload' element={<Store />} />
          <Route path='Store' element={<StoreData />} />
          <Route path='Order' element={<Order />} />
          <Route path='User' element={<User />} /> 
        </Route>
      </Routes>


  </MyContextProvider>
  )
}

export default App
