import { Navbar } from './Navbar'
import { Question } from './Question'




export const Dashboard = ({sidebarToggle, setSidebarToggle}) => {

  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} `}>
        <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>

        <Question /> 
        
     
    </div>
  )
}
