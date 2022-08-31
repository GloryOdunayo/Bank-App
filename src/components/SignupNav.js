import React, { useEffect, useState } from 'react'
import logo from "../assets/images/svgexport-1.svg"
import axios from "axios";
import signinimg from "../assets/images/downloadsignin.svg"
import { Link, useNavigate, useParams } from 'react-router-dom'

const SignupNav = () => {   
    const [phonenum, setphonenum] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [address, setaddress] = useState("");
    const [errmessage, seterrmessage] = useState("")
    const [Balance, setBalance] = useState(10000)
    let date = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    let currentDate =`${date}-${month}-${year}`
    const navigate = useNavigate();
    const url = "http://localhost:5000/user/signup";

    const signup =()=>{
        if(firstname!=="" && lastname!==""&& email!=="" &&password!==""&&phonenum!==""&&address!=""){
            let AccountNumber = '202' + Math.floor(Math.random()*10000000)
            let newuser = {firstname:firstname,lastname:lastname,email:email,phonenum:phonenum,address:address,password:password,accountNumber:AccountNumber,Balance:Balance,date:currentDate} 
            console.log(newuser);
            let user= localStorage.user=JSON.stringify(newuser)
            localStorage.setItem("email",newuser.email)
            axios.post(url,newuser).then((res)=>{
                console.log(res);
                seterrmessage(res.data.message)
                navigate('/signin')
                console.log(res)
            }).catch((err)=>{
                seterrmessage(err);
            })
            setfirstname("")
            setlastname("")

        }else{
            let message ="Please fill in your details appropriately"
            seterrmessage(message)
            console.log(errmessage);
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
                                <Link className="nav-link rounded px-4 openaccount" to="/signin" >Sign in</Link>
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
                    Please, check your browser’s address bar to be sure you’re on https://app.easy.com
                    </div>
                    <div className="alert text-danger text-center mt-2">{errmessage}</div>
                   
                    <div className='border rounded mt-lg-4 p-5 shadow-sm mb-3'>
                        <h4>Get a Kuda acccount now</h4>
                        <p>To sign up, please type in a valid email address</p>
                        <div>
                            <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>First Name:</label>
                            <input
                                type="text"
                                placeholder="firstname"
                                className="my-2 form-control"
                                onChange={(e) => setfirstname(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Last Name:</label>
                            <input
                                type="text"
                                placeholder="lastname"
                                className="my-2 form-control"
                                onChange={(e) => setlastname(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Phone Number</label>
                            <input
                                type="number"
                                placeholder="enter phone number"
                                className="my-2 form-control"
                                onChange={(e) => setphonenum(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Email Address:</label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="my-2 form-control"
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='fw-bold' style={{color:"#40196D"}}>Password:</label>
                            <input
                                type="password"
                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                                className="my-2 form-control"
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='h6'>Address</label>
                            <input type="text" placeholder='Address' className='form-control py-4' onChange={(e)=>setaddress(e.target.value)}/>
                        </div>
                        <p>Forgot Password? <span style={{color:"#40196D"}}>Reset it</span></p>
                        <button className="btn my-2 w-100 p-2 text-light" style={{backgroundColor:"#40196D"}} onClick={()=>signup()}>
                            Create Account
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

export default SignupNav