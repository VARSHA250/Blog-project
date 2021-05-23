export const Logout = (history)=>async(dispatch)=>{
    localStorage.clear()
    dispatch({
        type:"CLEAR_ALL"
    })
    history.push('/')
}