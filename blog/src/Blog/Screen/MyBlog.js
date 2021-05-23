import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch, connect } from 'react-redux'
import {Navbar,Card} from 'react-bootstrap'
import { FaBlog } from 'react-icons/fa'
import PersonPin from '@material-ui/icons/PersonPin';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Logout } from '../Action/Logoutaction'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import {Addblog, Deletelog} from '../Action/Todoaction'
import {TextField} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import EditIcon from '@material-ui/icons/Edit';
import '../Screen/animate.css'
import { Link } from 'react-router-dom';


 const Myblog = ({history,userdetail,userblog})=>{
     const [click,setclick]=useState(false)
     const [onclick,setonclick]=useState(false)
     const [click1,setclick1]=useState(false)


     const dispatch = useDispatch()

        const handleClickone=()=>{
          setonclick(!onclick)
        }


        const handleclick=()=>{
            dispatch(Logout(history))
        }  
        const dispatch1 = useDispatch()

        const[blog,setblog]=useState({
            users: userdetail.id
        })
        
        useEffect(()=>{
          setblog({
            users: userdetail.id
        })
          },[userdetail])
        console.log(userdetail,"userdetail")

        const handleclickone = () =>{
          dispatch1(Addblog(blog))
        }
        const handlechange=(evt)=>{
            setblog({...blog,[evt.target.name]:evt.target.value})
        }
        const handledelete = (id)=>{
          const index = userblog.findIndex(item=>item.id == id)
          dispatch1(Deletelog(index,id,userdetail))
        }

        const handleroute = (id)=>{
          setclick1(!click1)
          history.push(`/edit/${id}`)
       }


        return(
        <div>
         <Navbar  bg="dark" variant="dark">   
     <Navbar.Brand style={{color:'white',fontSize:'2.9rem',marginLeft:'35px',fontFamily:'cursive',fontWeight:'bolder'}} ><FaBlog style={{color:'white',fontSize:'2.9rem'}}/>Blogs</Navbar.Brand>
    <Navbar.Brand style={{color:'white',fontSize:'1.9rem',marginLeft:'450px',fontFamily:'cursive',fontWeight:'bolder'}} href="/blogs"><FaBlog style={{color:'white',fontSize:'1.9rem'}}/>All-Blogs</Navbar.Brand>
     <Navbar.Brand  style={{color:'white',fontSize:'2.9rem',marginLeft:'35px',fontFamily:'cursive',fontWeight:'bolder'}} ><PersonPin style={{color:'white',fontSize:'2.9rem',marginLeft:'405px',fontFamily:'cursive',fontWeight:'bolder',cursor:"pointer"}} onClick={()=>setclick(!click)}/>Profile</Navbar.Brand>
  </Navbar>
  {userdetail && <h1 className='hey' style={{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',color:'grey'}}>{`Hey ${userdetail?.first_name}! your blogs are here...`}</h1>}
  <h4 style={{marginTop:'-40px',marginLeft:'50px'}}><LibraryAddIcon onClick={()=>handleClickone()} style={{fontSize:'3.5rem',boxShadow:'0 2px 2px rgba(0,0,0,0.8)',cursor:'pointer'}}/></h4>
  {onclick &&  <Card  style = {{float:'left',boxShadow:'0 2px 2px rgba(0,0,0,0.8)',position:'absolute',zIndex:'1',marginLeft:'30px',textAlign:'center',width:'50%',borderRadius:'30px',lineHeight:'5rem'}}>
  <Card.Header className='hey'  style = {{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',fontSize:'2.0em'}} as="h5">Add your Blog</Card.Header>
  <Card.Body>
  <TextField style={{width:'95%'}}  id="filled-basic" label="Title" name='title'onChange={handlechange} value={blog.title}  /><br></br>
  <TextField style={{width:'95%'}}  id="filled-basic" name='content' label="Content" onChange={handlechange} value={blog.content} /><br></br>
  </Card.Body>
   <AddCircleIcon onClick = {()=>handleclickone()} style={{fontSize:'2.9rem',marginLeft:'350px',cursor:"pointer"}}/> 
  </Card>}
  {click &&   <Card style={{ width: '19rem',float:'left',boxShadow:'0 2px 2px rgba(0,0,0,0.8)',borderRadius:'10px',marginTop:'10px',zIndex:'1',position:'absolute',right:'0' }}>
  <Card.Img variant="top" src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg" />
  <Card.Body>
    <h5>Name : {userdetail && userdetail?.first_name}</h5>
    <h5>Email :{userdetail && userdetail?.email}</h5>
    <ExitToAppIcon style ={{backgroundColor:'black',color:'white',cursor:"pointer",fontSize:'1.4rem'}} onClick={()=>handleclick()}/>
  </Card.Body>
</Card>}
        {userblog.map(item => <div className='hey' style = {{float:'left',marginLeft:'30px',boxShadow:'0 4px 4px rgba(0,0,0,0.4)',borderRadius:"10px",marginTop:"50px",maxWidth: '28rem',maxHeight:'28rem'}}>
    <Card>
  <Card.Header style = {{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',fontSize:'2.0em'}} as="h5">{item.title}</Card.Header>
  <Card.Body>
  <Card.Img variant="top" src="https://www.acsp.org/resource/resmgr/images/Blog.jpg" />

    <Card.Text style = {{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',fontSize:'1.3rem'}}>
      {item.content.slice(0,10)}...<Link style = {{fontWeight:'bolder'}} to ={`/des/${item.id}`}>Read more</Link>
    </Card.Text>
    <DeleteSweepIcon style = {{color:'white',backgroundColor:'black',fontSize:'1.9rem',cursor:'pointer'}} onClick = {()=>handledelete(item.id)}/>
  <EditIcon style = {{color:'white',backgroundColor:'black',fontSize:'1.9rem',float:'right',cursor:'pointer'}} onClick = {()=>handleroute(item.id)}/>
  </Card.Body>
</Card></div>)}
    </div>)
  
}
const mapstatetoprops = (state) => {
  return {
      userdetail:state.userdetail,
      userblog:state.userblog
  }
}
export default connect(mapstatetoprops)(Myblog)
