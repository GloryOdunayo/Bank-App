import React from 'react'
import logo from "../assets/images/svgexport-1.svg"

const SigninNav = () => {
  return (
    <>
        <div className="sticky-top shadow-sm" id='sticky-top'>
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container-fluid">
                    <a className="navbar-brand ms-lg-5" href="#"><img src={logo} width={85} alt="" className='imglogo'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className='navbar-nav' id='navbar-nav2'>
                            <li className="nav-item">
                                <a className="nav-link text-light rounded px-4" href="#" id='getKuda'>Get Kuda</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-dark">good</button>
                        <button className="btn btn-info" type="submit">
                        Open Account
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default SigninNav