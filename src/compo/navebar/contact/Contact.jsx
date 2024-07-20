import React, { useState } from 'react'
import '../contact/conatct.css'

const Contact = () => {
  const [input, setinputdata] = useState({
    email: "",
    password: '',
  })
  const inputonchange = (e) => {
    const { name, value } = e.target
    setinputdata((preve) => {
      return {
        ...preve,
        [name]:value
      }
    })
   
  }
  return (
    <div className='container'>
      <form className=' mt-5 mx-auto'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name='email' value={input.email} onChange={inputonchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" value={input.password} name='password' onChange={inputonchange} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" onClick={((btn) => {
          if(!input.email||input.password){
            alert('U must Write Something Dude 🔴' )
          }
          btn.preventDefault()
          setinputdata({
            email:'',
            password:'',
          })
        })} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact