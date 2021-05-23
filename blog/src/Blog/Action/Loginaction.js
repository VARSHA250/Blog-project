
import axios from 'axios'

export const Loginuser = (login,history) => async (dispatch)=>{
    try{
        dispatch({
            type:"LOADING"
        })
        const user = await axios.post("http://127.0.0.1:8000/blogs/login",login)
        dispatch({
            type:"USER_LOGIN",
            payload:user.data,
        })

     history.push('/blogs')
    localStorage.setItem("userdetail",JSON.stringify(user.data))

    }
    catch(error){
        dispatch({
            type:"LOGIN_ERR",
            payload:error.response.data.message
        })
    }
}


export const Refresherror = () => async (dispatch) =>{
    dispatch({
        type:"ERROR_REFRESH"
    })
}
 

export const Localget = () => async (dispatch) =>{
const localget = await localStorage.getItem("userdetail")?JSON.parse(localStorage.getItem("userdetail")):{}
const usertodoget = await localStorage.getItem("usertodo")?JSON.parse(localStorage.getItem("usertodo")):[]
const allblog = await localStorage.getItem("allblog")?JSON.parse(localStorage.getItem("allblog")):[]





    dispatch({
        type:"LOCAL_GET",
        payload:{localget,usertodoget,allblog}
    })
}
