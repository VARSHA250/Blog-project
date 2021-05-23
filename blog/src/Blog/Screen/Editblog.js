import React, { useEffect, useState } from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {TextField} from '@material-ui/core'
import {Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Updateblog } from '../Action/Todoaction';
import {Nav,Navbar} from 'react-bootstrap'
import { FaBlog } from 'react-icons/fa'
import PersonPin from '@material-ui/icons/PersonPin';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Logout } from '../Action/Logoutaction'


export const Edituser = ({history,match})=>{
    const [click,setclick]=useState(false)

    const Blog = useSelector(state=>state)
    const {userblog,userdetail}=Blog
    const [blog,setblog] = useState({
        users:userdetail.id
    })
    const {id}=match.params
    console.log(id)
    const dispatch = useDispatch()
    const handlechange=(evt)=>{
        setblog({...blog,[evt.target.name]:evt.target.value})
    }

    useEffect(()=>{
        const ids = userblog.find(item=>item.id==id)
        setblog(ids)

    },[])
    const handleclick=()=>{
        dispatch(Logout(history))
    } 
    const handleupdate = ()=>{
        let index = -1
        userblog.find((item,ind)=>{
            if(item.id==id){
                index=ind
                return true
            }
        })
     dispatch(Updateblog(index,id,blog,userdetail,history))
    }
   
    return (<div>
         <Navbar  bg="dark" variant="dark">   
     <Navbar.Brand style={{color:'white',fontSize:'2.9rem',marginLeft:'35px',fontFamily:'cursive',fontWeight:'bolder'}} ><FaBlog style={{color:'white',fontSize:'2.9rem'}}/>Blogs</Navbar.Brand>
    <Navbar.Brand style={{color:'white',fontSize:'1.9rem',marginLeft:'450px',fontFamily:'cursive',fontWeight:'bolder'}} href="/blogs"><FaBlog style={{color:'white',fontSize:'1.9rem'}}/>All-Blogs</Navbar.Brand>
     <Navbar.Brand  style={{color:'white',fontSize:'2.9rem',marginLeft:'35px',fontFamily:'cursive',fontWeight:'bolder'}} ><PersonPin style={{color:'white',fontSize:'2.9rem',marginLeft:'405px',fontFamily:'cursive',fontWeight:'bolder',cursor:"pointer"}} onClick={()=>setclick(!click)}/>Profile</Navbar.Brand>
  </Navbar>
  {userdetail && <h1  className='hey' style={{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',color:'grey'}}>{`Hey ${userdetail?.first_name}! update your blogs here...`}</h1>}

  {click &&   <Card style={{ width: '19rem',float:'left',boxShadow:'0 2px 2px rgba(0,0,0,0.8)',borderRadius:'10px',marginTop:'10px',zIndex:'1',position:'absolute',right:'0' }}>
  <Card.Img variant="top" src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg" />
  <Card.Body>
    <h5>Name : {userdetail && userdetail?.first_name}</h5>
    <h5>Email :{userdetail && userdetail?.email}</h5>
    <ExitToAppIcon style ={{backgroundColor:'black',color:'white',cursor:"pointer",fontSize:'1.4rem'}} onClick={()=>handleclick()}/>
  </Card.Body>
</Card>}
    <Card  className='hey' style = {{float:'left',boxShadow:'0 2px 2px rgba(0,0,0,0.8)',position:'relative',zIndex:'1',marginLeft:'350px',textAlign:'center',width:'50%',borderRadius:'30px',lineHeight:'5rem',marginTop:'80px'}}>
  <Card.Header className='hey'  style = {{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',fontSize:'2.0em'}} as="h5">Update your Blog</Card.Header>
  <Card.Body>
  <TextField style={{width:'95%'}} id="filled-basic" label="Title" name='title'onChange={handlechange} value={blog?.title}  /><br></br>
  <TextField style={{width:'95%'}} id="filled-basic" name='content' label="Content" onChange={handlechange} value={blog?.content} /><br></br>
  <AddCircleIcon style={{fontSize:'2.7rem',marginLeft:'20px',cursor:"pointer"}} onClick = {()=>handleupdate()}/> 
  </Card.Body>
  </Card>
    </div>)
}