import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'material-react-toastify';
import {Nav,Navbar,FormControl,Form,Button,Carousel,Card, Toast, InputGroup,Tab,Tabs,Sonnet} from 'react-bootstrap'
import { FaBlog,FaHeart } from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux'
import { Logout } from '../Action/Logoutaction';
import CollectionsIcon from '@material-ui/icons/Collections';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonPin from '@material-ui/icons/PersonPin';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { UserTodo } from '../Action/Todoaction';
import { Link } from 'react-router-dom';


export const Blogscreen = ({history}) =>{
    const [count1 ,setcount]=useState(0)
    const Blog=useSelector(state=>state)
    const [click,setclick]=useState(false)
    const [all,setall]=useState(true)
    const dispatch = useDispatch()
    const{userdetail,blogs}=Blog
    console.log(userdetail)

    const handleclick=()=>{
        dispatch(Logout(history))
    }
    const handleClickone =()=>{
      dispatch(UserTodo(userdetail,history))

    }
    
    return (
        <div>
            <Navbar  bg="dark" variant="dark">   
     <Navbar.Brand style={{color:'white',fontSize:'2.9rem',marginLeft:'35px',fontFamily:'cursive',fontWeight:'bolder'}} href="#home"><FaBlog style={{color:'white',fontSize:'2.9rem'}}/>Blogs</Navbar.Brand>  
     <Navbar.Brand  style={{color:'white',fontSize:'2.9rem',marginLeft:'35px',fontFamily:'cursive',fontWeight:'bolder'}} ><PersonPin style={{color:'white',fontSize:'2.9rem',marginLeft:'1005px',fontFamily:'cursive',fontWeight:'bolder',cursor:"pointer"}} onClick={()=>setclick(!click)}/>Profile</Navbar.Brand>
  </Navbar>
             <CollectionsIcon style={{position:'absolute',fontSize:'2.5rem',marginLeft:'300px',cursor:'pointer',boxShadow:'0 2px 2px rgba(0,0,0,0.5)'}} onClick = {()=>setall(!all)}/><h3 style={{marginLeft:'350px',fontFamily:'cursive',fontWeight:'bolder'}}>All-Blogs</h3>
           <AssignmentIndIcon style={{position:'absolute',fontSize:'2.5rem',marginLeft:'800px',marginTop:'-42px',cursor:'pointer',boxShadow:'0 2px 2px rgba(0,0,0,0.5)'}} onClick = {()=>handleClickone()}/><h3 style={{marginLeft:'850px',fontFamily:'cursive',fontWeight:'bolder',marginTop:'-42px'}}>My-Blogs</h3>
    {click &&   <Card style={{ width: '19rem',float:'left',boxShadow:'0 2px 2px rgba(0,0,0,0.8)',borderRadius:'10px',marginTop:'10px',zIndex:'1',position:'absolute',right:'0' }}>
  <Card.Img variant="top" src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg" />
  <Card.Body>
    <h5>Name : {userdetail && userdetail?.first_name}</h5>
    <h5>Email :{userdetail && userdetail?.email}</h5>
    <ExitToAppIcon style ={{backgroundColor:'black',color:'white',cursor:"pointer",fontSize:'1.4rem'}} onClick={()=>handleclick()}/>
  </Card.Body>
</Card>}
 {all && blogs.map(item => <div className='hey' style = {{float:'left',maxWidth: '28rem',maxHeight:'28rem',marginLeft:'30px',boxShadow:'0 4px 4px rgba(0,0,0,0.4)',borderRadius:"10px",marginTop:"50px"}}><Card>
  <Card.Header style = {{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',fontSize:'2.0em'}} as="h5">{item.title}</Card.Header>
  <Card.Body>
  <Card.Img variant="top" src="https://www.acsp.org/resource/resmgr/images/Blog.jpg" />

    <Card.Text   style = {{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',fontSize:'1.3rem'}}>
      {item.content.slice(0,10)}...<Link to={`/des/${item.id}`}>Read more</Link>
    </Card.Text>
    <FaHeart style={{cursor:'pointer',color:'red',fontSize:'1.2rem'}} onClick = {()=>setcount(count1+1)}/>
  </Card.Body>
</Card></div>)}
<ToastContainer/> 

        </div>

    )
}