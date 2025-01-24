import { useState } from 'react'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Sidebar } from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import { Result } from './components/result'

function App() {
 
  const [sidebarToggle, setSidebarToggle] = useState(false)

  return (
    <div> 
      {/* <div className='flex '>
            <Sidebar sidebarToggle={sidebarToggle}/>
            <h1>Name</h1>
      </div> */}
      <Routes>
        {/* Route for the Dashboard page  */}
        <Route path="/Task/" element={<Dashboard sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />} />
        
        {/* Route for the Result page */}
        <Route path="/Task/result" element={<Result sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>} />
      </Routes>
    </div>
  
 
  )
}

export default App
