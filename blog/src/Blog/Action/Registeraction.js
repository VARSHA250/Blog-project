import axios from "axios"

export const Registeraction = (register,history) => async (dispatch)=>{
    try{
        const data= await axios.post("http://127.0.0.1:8000/blogs/register",register)

        dispatch({
            type:"REGISTER_USER",
            payload:data.data
        })
        history.push('/blogs')
        localStorage.setItem("userdetail",JSON.stringify(data.data))
    }
    catch(error){
        dispatch({
            type:'REGISTER_ERR',
            payload:error.response.data
        })
    }
}