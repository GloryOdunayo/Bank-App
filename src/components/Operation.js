import {useState, useEffect} from 'react'
import axios from 'axios';
import {Link,  useNavigate } from 'react-router-dom'

const Operation = () => {
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
    </>
  );
};

export default Operation;
