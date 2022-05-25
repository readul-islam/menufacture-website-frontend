import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";


const useHooks = (user) => {
 const email = user?.user.email;
 const [token,setToken] = useState('')
 
 
 useEffect(() => {
    const jwtToken = async()=>{
        if(email){
           
            const {data} = await axios.put(`http://localhost:5000/user/${email}`)
            // console.log(data);
           try{
            const acessToken=data.token
            if(acessToken){
                
                localStorage.setItem('access_token',acessToken)
            }
            setToken(acessToken)
        
           }catch(err){
               console.log(err);
        
           }
        }
    }
    jwtToken()
 },[email])

// console.log(token);
return {
    token,
    setToken
}
}


export default useHooks;