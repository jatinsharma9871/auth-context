import { createContext, useState } from "react";

export const AuthContext = createContext({user:null});

export const AuthContextProvider = ({children}) =>{

    const [user, setUser] = useState(null);


    const isAuth = (token) =>{
        
        if(token){
            return setUser(token)
        } 
        else{
            return null;
        }
       
    }

    const toggleAuth = () =>{
        setUser(null);
    }

    return(
        <AuthContext.Provider value={ {user, isAuth, toggleAuth} }>
            {children}
        </AuthContext.Provider>
    )
}