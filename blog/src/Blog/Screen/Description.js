import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Edituser } from './Editblog'
import {Card} from 'react-bootstrap'
import {Nav,Navbar} from 'react-bootstrap'
import { FaBlog, FaHeart, FaReadme } from 'react-icons/fa'
import PersonPin from '@material-ui/icons/PersonPin';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Logout } from '../Action/Logoutaction'
export const Description = ({match,history})=>{
    const [click,setclick]=useState(false)

    const State = useSelector(state=>state)
    const {blogs,userdetail}=State
    const {id} = match.params
    const dispatch = useDispatch()

    const handleclick=()=>{
        dispatch(Logout(history))
    } 
   const ids = blogs.find(item=>item.id==id)
    return (
        <div>
            <Navbar  bg="dark" variant="dark">   
     <Navbar.Brand style={{color:'white',fontSize:'2.9rem',marginLeft:'35px',fontFamily:'cursive',fontWeight:'bolder'}} ><FaBlog style={{color:'white',fontSize:'2.9rem'}}/>Blogs</Navbar.Brand>
    <Navbar.Brand style={{color:'white',fontSize:'1.9rem',marginLeft:'450px',fontFamily:'cursive',fontWeight:'bolder'}} href="/blogs"><FaBlog style={{color:'white',fontSize:'1.9rem'}}/>All-Blogs</Navbar.Brand>
     <Navbar.Brand  style={{color:'white',fontSize:'2.9rem',marginLeft:'35px',fontFamily:'cursive',fontWeight:'bolder'}} ><PersonPin style={{color:'white',fontSize:'2.9rem',marginLeft:'405px',fontFamily:'cursive',fontWeight:'bolder',cursor:"pointer"}} onClick={()=>setclick(!click)}/>Profile</Navbar.Brand>
  </Navbar>
  {click &&   <Card style={{ width: '19rem',float:'left',boxShadow:'0 2px 2px rgba(0,0,0,0.8)',borderRadius:'10px',marginTop:'10px',zIndex:'1',position:'absolute',right:'0' }}>
  <Card.Img variant="top" src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg" />
  <Card.Body>
    <h5>Name : {userdetail && userdetail?.first_name}</h5>
    <h5>Email :{userdetail && userdetail?.email}</h5>
    <ExitToAppIcon style ={{backgroundColor:'black',color:'white',cursor:"pointer",fontSize:'1.4rem'}} onClick={()=>handleclick()}/>
  </Card.Body>
</Card>}
            <Card  className='hey' style = {{boxShadow:'0 4px 4px rgba(0,0,0,0.4)',width:'90%',textAlign:'center',marginLeft:'80px',marginTop:'50px'}}>
  <Card.Header style = {{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',fontSize:'2.0em'}} as="h5">{ids?.title}</Card.Header>
  <Card.Body>

    <Card.Text style = {{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',fontSize:'1.4rem'}}>
      {ids?.content}
    </Card.Text>
  </Card.Body>
</Card>
<div style={{textAlign:'center'}}>
        <h4 style = {{marginTop:'100px'}}><FaReadme/>Made the blogs here <FaHeart style={{color:'red'}}/></h4>
    </div></div>
    )
}