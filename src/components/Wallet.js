import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Wallet = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  const dash = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <section id="main">
        <div className="border  border-2 p-2 d-flex justify-content-between align-items-center">
          <div className="d-flex col-lg-5">
            <p className="h5">BeeBank</p>
          </div>
          <div className="col-lg-3  d-flex">
            <button className="btn ms-2 btn-dark rounded-pill" onClick={home}>
              Home
            </button>
            <button className="btn me-2" onClick={dash}>
              {" "}
              Dashboard
            </button>
          </div>
        </div>

        <div className=" mt-4">
          <div className=" text-center  py-2">
            <div className="border shadow mx-auto col-lg-3 py-3">
              <h2> New Wallet</h2>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                create wallet
              </button>
            </div>
          </div>

          <div className="">
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
                      New Wallet
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
                      placeholder="Name of wallet"
                    />
                    <input
                      type="text"
                      className="form-control my-2"
                      placeholder="Description of name"
                    />
                    <input
                      type="text"
                      className="form-control my-2"
                      placeholder="Target Amount"
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
                      Save wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallet;
