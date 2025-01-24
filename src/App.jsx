import { useState } from 'react'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Sidebar } from './components/Sidebar'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import { Result } from './components/result'

function App() {
 
  const [sidebarToggle, setSidebarToggle] = useState(false)

  return (
    <> 
       <BrowserRouter >
            <div className='flex '>
                  <Sidebar sidebarToggle={sidebarToggle}/>
            </div>
        
            <Routes>
          {/* Route for the Dashboard page  */}
          <Route path="/" element={<Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />} />
          
          {/* Route for the Result page */}
          <Route path="/result" element={<Result sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>} />
        </Routes>
        </BrowserRouter>

   
    </>
  
 
  )
}

export default App
