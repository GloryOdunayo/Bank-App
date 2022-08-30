import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const navigate =useNavigate()
    const [account, setaccount] = useState("")
    const [receiver, setreceiver] = useState("")
    const [amount, setamount] = useState("")
    let url='http://localhost:5008/user/signin'
    let date = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    let currentDate =`${date}-${month}-${year}`
    function transfer() {
        alert("transfer sucessful")
        let id=user._id
        let transfer ={account:account,amount:amount,receiver:receiver,id:id,currentDate:currentDate}
        console.log(transfer);
        axios.post((err,transfer)=>{
          console.log(transfer);
        })
    }
    const [user, setuser] = useState({})
    useEffect(()=>{
        axios.get(url).then((result)=>{
          console.log(result)
          setuser(result.data)
      
        })
    },[])
    const wallet=()=>{
    navigate("/wallet")
    }

  return (
    <>
      <div className="cardneed  mx-auto  col-lg-10 py-3 row">
        <div className="border col-lg-3 name">
          <div className="py-2  d-flex align-items-center">
            <div className="profileimg "><img src={user.image} alt="" /></div>
            <p className=""> Hello {user.firstname}</p>
          </div>
          <div>
            <input type="file" name="add profile" id="" className="b-none" />
          </div>

          <div className="mt-5">
            <div className="but">
              <button className="col-12 d-flex  border dash mt-3">
                transfer histry
              </button>
              <button className="col-12 d-flex  border dash mt-3">
                transfer histry
              </button>
              <button className="col-12 d-flex  border dash mt-3">
                transfer histry
              </button>
              <button className="col-12 d-flex  border dash mt-3">
                transfer histry
              </button>
            </div>
            <div className=" htm col-12 mt-2"></div>
          </div>
        </div>
        <div className=" py-3 col-lg-9 dashboardcard px-4">
          <div className="border">
            <div>
              <h6>
                Hay there, {user.firstname} {user.lastname}
              </h6>
              <p>have a great day! Good luck on your financial journey</p>
            </div>
            <div>
              <h6>Your cards</h6>
              <div className=" row d-lg-flex justify-content-between col-lg-12">
                <div className="border border-3 my-2 col-lg-5 cad1 px-3 ">
                  <div className="d-flex justify-content-between align-items-center ">
                    <p>Balance Details</p>
                    <h3>:</h3>
                  </div>
                  <h2 className=""> #{user.Balance}</h2>
                  <div className="card1a">
                    <p>Account Number</p>
                    <h3>{user.accountNumber}</h3>
                  </div>
                </div>

                <div className="border border-3 my-2 col-lg-5 cad1 px-3 ">
                  <div className="d-flex justify-content-between align-items-center ">
                    <p>Balance Details</p>
                    <h3>:</h3>
                  </div>
                  <h2 className="">#25,657.00</h2>
                  <div className="card1a">
                    <p>Account Number</p>
                    <h5>00225646575757</h5>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      <p>
                        cvc <br />
                        ....
                      </p>
                    </div>
                    <div>
                      <p>
                        Exp <br /> 22/10/24
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border row">
            <div className="border transfer col-lg-5 d-flex align-items-center">
              <div className="row">
                <div className="col-6  text-center my-2">
                  <div
                    className="app1 border mx-auto"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  ></div>
                  Transfer
                </div>
                <div className="col-6  text-center my-2">
                  <div
                    className="app2 border mx-auto "
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  ></div>
                  Withdraw
                </div>
                <div className="col-6 text-center my-2">
                  <div className="app3 border mx-auto"></div>
                  Request
                </div>
                <div className="col-6 text-center my-2">
                  <div className="app4 border mx-auto" onClick={wallet}></div>
                  Wallets
                </div>
              </div>
            </div>
            <div className="border  hist col-lg-7 py-2">
              <p>Recent Transections</p>
              <div>
                <div className="row d-flex justify-content-around head align-items-center ">
                  <p className="col-2">Name</p>
                  <p className="col-2">Amount</p>
                  <p className="col-2">Date</p>
                  <p className="col-2">Time</p>
                  <p>Actions</p>
                </div>
                <div className="row d-flex justify-content-around bod align-items-center">
                  <p className="col-2">Tola</p>
                  <p className="col-2 text-success">#3000</p>
                  <p className="col-2">22/70/90</p>
                  <p className="col-2">23:33PM</p>
                  <button className="col-2 btn border border-info my-1">
                    details
                  </button>
                </div>
                <div className="row d-flex justify-content-around bod align-items-center">
                  <p className="col-2">Gab</p>
                  <p className="col-2 text-danger">#3000</p>
                  <p className="col-2">22/70/90</p>
                  <p className="col-2">23:33PM</p>
                  <button className="col-2 btn border border-info my-1">
                    details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Transfer
              </h5>
              <h3
                type="button"
                class="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                X
              </h3>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control my-2"
                placeholder="Enter account number"
                onChange={(e) => setaccount(e.target.value)}
              />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Description of name"
                onChange={(e) => setreceiver(e.target.value)}
              />
              <input
                type="text"
                className="form-control my-2"
                placeholder=" Amount"
                onChange={(e) => setamount(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={transfer}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Withdraw
              </h5>
              <h3
                type="button"
                class="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                X
              </h3>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control my-2"
                placeholder="Enter account number"
              />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Description of name"
              />
              <input
                type="text"
                className="form-control my-2"
                placeholder=" Amount"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default UserDetails;
