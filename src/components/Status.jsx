import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const Status = () =>{

    const {user} = useContext(AuthContext);
    return(
        <h3>{user? `User is logged in with token ${user}`:"User is not loged in"}</h3>
    )
}