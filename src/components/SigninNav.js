import React, { useEffect, useState } from 'react'
import logo from "../assets/images/svgexport-1.svg"
import signinimg from "../assets/images/downloadsignin.svg"
import "../assets/css/SigninNav.css"
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SigninNav = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [errmessage, seterrmessage] = useState("")
    let url='/user/signin'
    const navigate = useNavigate();
    
    const signin = () => {
        if (email !=="" && password !=="") {
            let newuser = {email,password};
            axios.post(url,newuser).then((res)=>{
                console.log(res);
                let result = res.data.result
                seterrmessage(res.data.message)
    
                if(result.length>0){
                console.log(email);
                navigate('/dashboard')
                }
            }).catch((err)=>{
                console.log(err);
            })
        } else {
            let error = "Please fill in your details appropriately"
            seterrmessage(error)
        }
    }
  return (
    <>
        {/* NavBar */}
        <div className="sticky-top shadow-sm" id='sticky-top'>
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container-fluid">
                    <a className="navbar-brand ms-lg-5" href="#"><img src={logo} width={85} alt="" className='imglogo'/></a>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav' id='navbar-nav2'>
                            <li className="nav-item">
                                <Link className="nav-link rounded px-4 openaccount" to="/signup" >Open an Account</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        {/* Sign in page */}
        <div className="container-fluid mt-5">
            <div className="row mx-auto">
                <div className="col-lg-4 mx-auto col-sm-11 px-5">
                    <div className="border p-3 shadow-sm rounded mt-lg-3" id='browserAddress'>
                    Please, check your browser’s address bar to be sure you’re on
                    https://app.easy.com
                    </div>
                    <div className="alert text-danger">{errmessage}</div>
                   
                    <div className='border rounded mt-lg-4 p-5 shadow-sm'>
                        <h4>Sign in To Kuda</h4>
                        <p>To sign in, please type in the email address linked to your Kuda account and your Kuda password.</p>
                        <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Email Address:</label>
                        <input
                            type="email"
                            minLength={8}
                            placeholder="example@gmail.com"
                            className="my-2 form-control"
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Password:</label>
                        <input
                            type="password"
                            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                            className="my-2 form-control"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <p>Forgot Password? <span style={{color:"#40196D"}}>Reset it</span></p>
                        <button className="btn my-2 w-100 p-2 text-light" style={{backgroundColor:"#40196D"}} onClick={signin}>
                            Sign In
                        </button>
                   </div>
                </div>
                <div className="col-lg-7">
                    <img src={signinimg} id="signupimg" className="ms-lg-5" alt="" height={500} />
                </div>
            </div>
      </div>
    </>
  )
}

export default SigninNav