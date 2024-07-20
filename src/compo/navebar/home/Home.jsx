import React from 'react'
import '../home/home.css'
import logo from '../images/3d-man-casual-work-from-home-technology-communicat_1255023-21195.jpg'


const Home = () => {
  return (
    <div className='container-fluid'>
      <div className='row align-items-center row-cols-1 row-cols-sm-1 row-cols-md-2 justify-content-center gy-5'>  
      <div className='col-6 col-sm-6 col-md-6 col-lg-6'>
      <img className='img-fluid animated' alt='pictures' src={logo} />
      </div>
   
      <div className='col px-4 '>
        <h1>Good Things Take Time</h1>
        <p>Do you know that feeling drowning underwater
          All I need is you, but I can't even call you
          The dirt on my skin got me feeling like I'll never be clean
          Getting all too familiar with going under
          Blacking out every night just to feel numb, yeah
          The hurt in my life, always putting me back at my knees</p>

      </div>
      </div> 
    </div>
  )
}

export default Home