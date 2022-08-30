import React from 'react'
import "../assets/css/GetKuda.css"
import cbn from "../assets/images/cbn.svg"
import ndic from "../assets/images/NDIC.svg"
import bank from "../assets/images/transfermoney.svg"

const GetKuda = () => {
  return (
    <>
    <section className="container-fluid" id='sectionKuda'>
        <div className="row">
            <div className="col-lg-4 col-sm-12 p-5" id='freebank1'>
                <h1 id='freebank' className='p-lg-2'>We’re the bank of the free</h1>
                <p id='freedom' className='p-2'>We’re here to help you get the best out of your money, no strings attached.<br />Welcome to your freedom!</p>
                <div className="cbn">
                    <img src={cbn} alt="" />&nbsp;
                    <img src={ndic} alt="" className='ms-lg-3' />
                </div>
                <a className="nav-link fs-5 text-center" href="#" id='getKudagetKuda'>Get Kuda</a>

            </div>
            <div className="col-lg-4 col-sm-12" id='imagebank'>
                <img src={bank} width={480} alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default GetKuda