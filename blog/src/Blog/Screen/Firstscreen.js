import Reeact from 'react'
import {Nav,Navbar,FormControl,Form,Button,Carousel,Card} from 'react-bootstrap'
import { FaBlog, FaHeart, FaHeartbeat, FaReadme } from 'react-icons/fa'

const Firstscreen = (props) =>{
    const handleclick = () =>{
        props.history.push('/login')
    }
    return(
        <div>
     <Navbar  bg="dark" variant="dark">
     <FaBlog style={{color:'white',fontSize:'2.9rem'}}/><Navbar.Brand style={{color:'white',fontSize:'2.9rem',marginLeft:'35px',fontFamily:'cursive',fontWeight:'bolder'}}>Blogs</Navbar.Brand>

  </Navbar>
  <h1 className='hey' style={{textAlign:'center',fontFamily:'cursive',fontWeight:'bolder',color:'black',fontSize:'3rem'}}>Welcome to Blog-Tech,click to start</h1>
  <img onClick = {()=>handleclick()} style={{marginTop:'5px',marginLeft:'400px',width:'45rem',cursor:'pointer'}} src = 'https://cdn.dribbble.com/users/23375/screenshots/907827/_hutanim_lg.gif'/>
        </div>
    )
}
export default Firstscreen