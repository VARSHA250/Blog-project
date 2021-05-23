function reducer(state={},action){
    switch(action.type){
        case "USER_LOGIN":
            return {...state,userdetail:action.payload,loading:false}

        case "LOGIN_ERR":
            return {...state,loginerror:action.payload,loading:false}

            case "REGISTER_USER":
                return {...state,userdetail:action.payload,loading:false}
        
                case "REGISTER_ERR":
                    return {...state,registererror:action.payload,loading:false}

                case "ERROR_REFRESH":
                    return {...state,loginerror:null,registererror:{}}
                    case "LOCAL_GET":
                        return {...state,userdetail:action.payload.localget,blogs:action.payload.allblog,userblog:action.payload.usertodoget}

                    case "CLEAR_ALL":
                        return {...state,userdetail:{},loginerror:null,registererror:{},blogs:[],userblog:[]}    
                        
                        case "ALL_TODO":
                            return {...state,blogs:action.payload}
                        case "LOADING":
                            return{...state,loading:true}

                            case "USER_TODO":
                                return {...state,userblog:action.payload}

                                case "CREATE_BLOG":
                                    return {...state,userblog:[...state.userblog,action.payload],blogs:[...state.blogs,action.payload]}

                                    case "DELETE_BLOG":
                                        return {...state,userblog:[...state.userblog.slice(0,action.payload),...state.userblog.slice(action.payload +1)],blogs:[...state.blogs.slice(0,action.payload),...state.blogs.slice(action.payload +1)]}

                                        case "UPDATE_BLOG":
                                            return {...state,userblog:[...state.userblog.slice(0,action.payload2),action.payload,...state.userblog.slice(action.payload2+1)],blogs:[...state.blogs.slice(0,action.payload2),action.payload,...state.blogs.slice(action.payload2+1)]}
        
        default:
            return state
        
    }
}
export default reducer