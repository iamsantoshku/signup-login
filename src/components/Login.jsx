import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
// import React from "react";
import { useState } from "react";
const Login = () =>{
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');
    const[mes, setmes] = useState(" ");
    const navigate = useNavigate();

    const handleemail = (e)=>{
        let inputv = e.target.value;
        setemail(inputv);
        let emailReg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if(!emailReg.test(inputv)){
            setmes("Error! please enter valid email");
            
        }else{
            setmes("");
        }
       }
    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/');
      }    
    },[]);
    // const handlelog = async() =>{
    //     console.warn(email, password);
    //     let result = await fetch('http://localhost:4000/login',{
    //         method : 'post',
    //         body: JSON.stringify({email, password}),
    //         headers: {
    //             'Content-Type':'application/json'
    //         }
    //     });
    //     result = await result.json();
    //     console.log(result);
    //     if(result.name){
    //         localStorage.getItem("user", JSON.stringify(result));
    //         navigate('/');
    //     }else{
    //         alert("please enter correct detail");
    //     }
      
    // }
    return(
        <>
        {/* <div className="container"> */}
        <div className="login">
            <h1>Sign-In!</h1>
            <button className="butt1">Goggle</button>
            <input type="text" className="text" placeholder="Enter Your email" onChange={handleemail} value={email}/>
            <input type="password" className="text" onChange={(e)=>setpassword(e.target.value)} value={password} placeholder="Enter Your password"/>
            <button   className="butt">Login</button>
        </div>
        {/* </div> */}
        

        </>
        
        
    )
}
export default Login;