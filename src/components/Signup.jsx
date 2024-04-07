// import React from 'react'

// const Signup = () => {
//   return (
//     <div>
//         <h1>this is sign</h1>
      
//     </div>
//   )
// }

// export default Signup
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = ()=>{
    // const[item,setitem] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [num, setnum] = useState("")
    const [mes, setmes] = useState(" ");
    const [mesp, setmesp] = useState(" ");
    const[comp, setcomp] = useState(" ");
    const navigate = useNavigate();  
   const handleemail = (e)=>{
    let inputv = e.target.value;
    setemail(inputv);
    let emailReg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(!emailReg.test(inputv)){
        setmes("Error! please enter valid email.");
        // alert("enter coreect detail")         
    }else{
        setmes(" ");

    }
   }
   const handlepass = (e)=>{
    let new_pass = e.target.value;
    setpass(new_pass);
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!new_pass.match(lowerCase)) {
       setmesp("Password should contains lowercase letters!");
    } else if (!new_pass.match(upperCase)) {
       setmesp("Password should contain uppercase letters!");
    } else if (!new_pass.match(numbers)) {
       setmesp("Password should contains numbers also!");
    } else if (new_pass.length < 10) {
       setmesp("Password length should be more than 10.");
    } else {
       setmesp(" "); 
    }
    
   }
//    const submithandle = ()=>{
//     if(handleemail && handleemail){
//         alert("Account CREATED")
//     }
//     else{
//         alert("not created");
//     }

//    }
  
   useEffect(()=>{
    // handleemail()
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/')
    }
    
   })

    // const clickhand = async ()=>{
    //     console.warn(name,email,pass);
    //     let result = await fetch('http://localhost:4000/register', {
    //         method:'post',
    //         body: JSON.stringify({name, email, pass}),
    //         headers: {
    //             'Content-Type':'application/json'
    //         },

    //     });
    //     result = await result.json();
    //     console.warn(result);
    //     localStorage.setItem("user",JSON.stringify(result)) ; 
    //     // if(result){
    //     navigate('/')

    //     // }
    // }


    return(
        <>
        {/* <div className="container1"> */}
        <div className="text-box">
            <h1>Create An Account</h1>
            <button className="butt1">Goggle</button>           
            
            <input className="text" type="email"  value={email} onChange={handleemail} placeholder="Email" />
            <div style = {{ color: "red" }}> {mes} </div>
            <input className="text" type="text"
             value={name} onChange={(e)=>setname(e.target.value)}  placeholder="Full Name"  />
            <input className="text" type="password" value={pass} onChange={handlepass} placeholder="Password"  />
            <div style = {{ color: "red" }}> {mesp} </div>
            {/* <div style = {{ color: "red" }}> {pass} </div> */}
            {/* <select  id="">
                <option>----Highest Level of Education----</option>
                <option>6-9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>Graduate Degree/Deplomo</option>
                <option>Post Graduate Degree</option>
                <option>Working </option>
            </select><br /> */}
            <input className="text" type="number"  value={comp} onChange={(e)=>setcomp(e.target.value)} placeholder="Company name" />   
            <input className="text" type="number"  value={num} onChange={(e)=>setnum(e.target.value)} placeholder="Mob No" />
            <NavLink to="/profile"><button  className="butt">Create New Account</button></NavLink>
            <Link className="log1"to="/login">Back to login</Link>
        </div>

        {/* </div> */}
        </>       
    )

}
export default Signup;
