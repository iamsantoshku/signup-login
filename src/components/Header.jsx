// import React from 'react'

// const Header = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Header
// import{Link, useNavigate,NavLink} from 'react-router-dom'
// const Header = ()=>{

    // const nevigate = useNavigate();
    // const logout = ()=>{
        
    //     localStorage.clear();
    //     nevigate('./signup')       

    // }
    // const auth = localStorage.getItem('user');
//     return(
//         <div>
//             <ul className="nav-ul">
//                 <li><NavLink to="/">Welcome</NavLink></li>                              
//                 {/* <li><NavLink to="/signup">Logout</NavLink></li>                    */}
//                 <li><NavLink to="/signup">Signup</NavLink></li>
//                 <li><NavLink to="/login">Login</NavLink></li>               
//             </ul>
//         </div>
//     )
// }
// export default Header;
import{NavLink, useNavigate} from 'react-router-dom'
const Header = ()=>{

    const nevigate = useNavigate();
    const logout = ()=>{
        // console.warn("hii santosh");
        localStorage.clear();
        nevigate('./signup')       

    }
    const auth = localStorage.getItem('user');
    return(
        <div>
            <ul className="nav-ul">
                <li><NavLink to="/">home</NavLink></li>               
                {
                    auth ? <NavLink onClick={logout} to="/signup">Logout</NavLink>:
                    <>
                <li><NavLink to="/signup">signup</NavLink></li>
                <li><NavLink to="/login">login</NavLink></li> 
                    </>
                }
                
            </ul>
        </div>
    )
}
export default Header;
