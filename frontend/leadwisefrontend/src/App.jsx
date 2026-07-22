import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LeadAdd from './pages/LeadAdd'
import LeadList from './pages/LeadList'
import LeadDetail from './pages/LeadDetail'


function App() {
  return (

  <BrowserRouter>
    <Routes>

        <Route path='/lead-add' element={<LeadAdd></LeadAdd>}></Route>
        <Route path='/lead-all' element={<LeadList></LeadList>}></Route>
        <Route path='/lead/:id' element={<LeadDetail></LeadDetail>}></Route>
    </Routes>
  
  </BrowserRouter>

  )
}

export default App
