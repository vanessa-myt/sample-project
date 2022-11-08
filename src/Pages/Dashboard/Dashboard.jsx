import React, {useState} from 'react'

//Component
import Navbar from "../../Components/Navbar/Navbar";

function Dashboard() {

    const [inactive, setInactive] = useState(false);

  return (
    <div>
        <Navbar
              onCollapse={(inactive) => {
                setInactive(inactive)
              }}
              active={'MANAGE'} 
            />
        Dashboard</div>
  )
}

export default Dashboard