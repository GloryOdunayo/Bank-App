import React, { useState } from 'react'
import img1 from '../assets/images/cbn.svg'
import img2 from '../assets/images/cbn.svg'
import img3 from '../assets/images/cbn.svg'

const Card1 = () => {
  return (
    <>
        <div className="row justify-content-center">
            <div className="card col-3 m-3 shadow-sm bg-white">
                <img src={img1} alt="" />
                <p>We’ll give you a free debit card. Order it right in the app.</p>
            </div>
            <div className="card col-3 m-3 shadow-sm bg-white">
                <img src={img2} alt="" />
                <p>Create smart budgets to help you take control of your spending.</p>
            </div>
            <div className="card col-3 m-3 shadow-sm bg-white">
                <img src={img3} alt="" />
                <p>See where your money goes without solving equations.</p>
            </div>
            <div className="card col-3 m-3 shadow-sm bg-white">
                <img src={img3} alt="" />
                <p>See where your money goes without solving equations.</p>
            </div>
            <div className="card col-3 m-3 shadow-sm bg-white">
                <img src={img3} alt="" />
                <p>See where your money goes without solving equations.</p>
            </div>
            
        </div>
    </>
  )
}

export default Card1