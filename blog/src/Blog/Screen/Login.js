import React, { useEffect, useState } from 'react'
import {Nav,Navbar,FormControl,Form,Button,Carousel,Card,Spinner,Toast,Alert} from 'react-bootstrap'
import { FaBlog, FaDatabase, FaHeart, FaHeartbeat, FaReadme, FaRegistered, FaUser, FaUserSecret, FaVoicemail } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Loginuser, Refresherror} from '../Action/Loginaction'
import { ToastContainer, toast } from 'react-toastify';
import { Todo } from '../Action/Todoaction'




 const Login = ({history})=>{
const [login,setlogin]=useState({})
const dispatch = useDispatch()



const Blog = useSelector(state=>state)
const {loginerror,loading}=Blog

useEffect(()=>{
  dispatch(Refresherror())
},[dispatch])
 
const handlechange=(evt)=>{
    setlogin({...login,[evt.target.name]:evt.target.value})
}
const handleclick=(evt) =>{
    evt.preventDefault()
    dispatch(Loginuser(login,history))
    dispatch(Todo())
}
    return (<div>
        <Navbar  bg="dark" variant="dark">
     <FaBlog style={{color:'white',fontSize:'2.9rem'}}/><Navbar.Brand style={{color:'white',fontSize:'2.9rem',marginLeft:'35px',fontFamily:'cursive',fontWeight:'bolder'}} href="#home">Blogs</Navbar.Brand>
     <Navbar.Brand style={{color:'white',fontSize:'1.5rem',marginLeft:'305px',fontFamily:'cursive',fontWeight:'bolder'}} href='/register'><FaRegistered style={{color:'white',fontSize:'1.9rem'}}/>Registration</Navbar.Brand>
  </Navbar>
  {loading && <>
      <div style={{textAlign:'center',fontSize:'1.5rem'}}>
      <Spinner animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" />
  </div>
</>}
  <Form style={{textAlign:'center',width:'30%',marginLeft:'480px',marginTop:'40px',boxShadow:'0 2px 2px rgba(0,0,0,0.8)',paddingBottom:'20px',paddingLeft:'20px',paddingTop:'20px',paddingRight:'20px',borderRadius:'30px'}} onSubmit={handleclick}>
    {loginerror && <Alert  variant="danger">{loginerror}</Alert>}
  <Form.Group controlId="formBasicUsername">
    <FaUser/><Form.Label style={{fontFamily:'cursive',fontWeight:'bolder',fontSize:'20px'}}>Username</Form.Label>
    <Form.Control type="Username" style={{textAlign:'center',height:'50px',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}} value={login.username} required onChange={handlechange} name='username' placeholder="Enter username" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
   <FaVoicemail/><Form.Label style={{fontFamily:'cursive',fontWeight:'bolder',fontSize:'20px',marginTop:'30px'}}>Email address</Form.Label>
    <Form.Control type="email" style={{textAlign:'center',height:'50px',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}} value={login.email} required onChange={handlechange} name='email' placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <FaUserSecret/><Form.Label style={{fontFamily:'cursive',fontWeight:'bolder',fontSize:'20px',marginTop:'30px'}}>Password</Form.Label>
    <Form.Control type="password" style={{textAlign:'center',height:'50px',boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}} value={login.password} name='password' required onChange={handlechange} placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  </Form.Group>
  <ToastContainer style={{marginTop:'600px',marginRight:'1200px'}}/> 

  <Button style ={{boxShadow:'0 2px 2px rgba(0,0,0,0.8)'}}  bg="dark" variant="dark" type="submit">
    Submit
  </Button>
  <h6 style={{marginTop:'20px',marginRight:'200px',fontWeight:'bolder'}}>New user ? <Link to = '/register'>Register</Link></h6>
</Form>
<h4 style = {{marginTop:'60px',float:'right',marginRight:'100px'}}><FaReadme/>Made the blogs here <FaHeart style={{color:'red'}}/></h4>
    </div>)
}

export default Login