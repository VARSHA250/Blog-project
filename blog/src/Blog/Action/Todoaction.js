import axios from "axios"
export const Todo = () => async(dispatch)=>{
    try{
    const todo = await axios.get("http://127.0.0.1:8000/blogs/allblog").then(res=>res.data)

    dispatch({
        type:"ALL_TODO",
        payload:todo
    })
    localStorage.setItem("allblog",JSON.stringify(todo))

}
catch(error){
    console.log(error.message)
}

}

export const UserTodo = (userdetail,history)=>async(dispatch)=>{
    try{
        const config = {
            headers:{
                "Authorization":`Bearer ${userdetail.token}`,
                "Content-Type":"application/json"
            }
            
        }
        const gettodo = await axios.get("http://127.0.0.1:8000/blogs/userblog",config).then(res=>res.data)

        dispatch({
            type:"USER_TODO",
            payload:gettodo
        })
        history.push('/myblog')
        localStorage.setItem("usertodo",JSON.stringify(gettodo))
    }
    catch(error){
        console.log(error.message)
    }
}

export const Addblog = (blog)=> async(dispatch,getState)=>{
    const State = getState()
    const {userblog,blogs}=State
    try{
    const Blog = await axios.post("http://127.0.0.1:8000/blogs/createblog",blog).then(res=>res.data)
    dispatch({
        type:"CREATE_BLOG",
        payload:Blog
    })
    localStorage.setItem("usertodo",JSON.stringify([...userblog,Blog]))
    localStorage.setItem("allblog",JSON.stringify([...blogs,Blog]))


}
catch(error){
    console.log(error.message)
}
}

export const Deletelog = (index,id,userdetail)=>async(dispatch,getState)=>{
    const State = getState()
    const {userblog,blogs}=State
    try{
        const config = {
            headers:{
                "Authorization":`Bearer ${userdetail.token}`,
                "Content-Type":"application/json"
            }
            
        }
        await axios.delete(`http://127.0.0.1:8000/blogs/blog/${id}`,config)
        dispatch({
            type:'DELETE_BLOG',
            payload:index
        })
        localStorage.setItem("usertodo",JSON.stringify([...userblog.slice(0,index),...userblog.slice(index +1)]))
        localStorage.setItem("allblog",JSON.stringify([...blogs.slice(0,index),...blogs.slice(index +1)]))


    }
    catch(error){
        console.log(error.message)
    }
}


export const Updateblog = (index,id,blog,userdetail,history)=>async(dispatch,getState)=>{
    const State = getState()
    const {userblog,blogs}=State
    try{
        const config = {
            headers:{
                "Authorization":`Bearer ${userdetail.token}`,
                "Content-Type":"application/json"
            }
            
        }
       const Update= await axios.put(`http://127.0.0.1:8000/blogs/blog/${id}`,blog,config).then(res=>res.data)
        dispatch({
            type:'UPDATE_BLOG',
            payload:Update,
            payload2:index

        })
        localStorage.setItem("usertodo",JSON.stringify([...userblog.slice(0,index),Update,...userblog.slice(index+1)]))
        localStorage.setItem("allblog",JSON.stringify([...blogs.slice(0,index),Update,...blogs.slice(index+1)]))

        history.push('/myblog')
    }
    catch(error){
        console.log(error.message)
    }
}


