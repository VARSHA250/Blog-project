

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'


import Firstscreen from '../src/Blog/Screen/Firstscreen'
import Login from '../src/Blog/Screen/Login'


import { Register } from '../src/Blog/Screen/Register'
import {Description} from '../src/Blog/Screen/Description'
import { Blogscreen } from '../src/Blog/Screen/Blogscreen'
import { Localget } from '../src/Blog/Action/Loginaction'
import Myblog  from '../src/Blog/Screen/MyBlog'
import { Edituser } from './Blog/Screen/Editblog'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(Localget())

  },[])
  return (
    <div className="App">
       <BrowserRouter>
             <Route exact path='/' component={Firstscreen}/>
             <Route path='/login' component={Login}/>
             <Route path='/register' component={Register}/>
             <Route path = '/blogs' component = {Blogscreen}/>
             <Route path ='/myblog'component = {Myblog}/>
             <Route path = '/edit/:id' component = {Edituser}/>
             <Route path = '/des/:id' component={Description}/>
            </BrowserRouter>
    </div>
  );
}

export default App;
