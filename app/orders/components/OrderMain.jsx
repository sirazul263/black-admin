"use client";

import { useState } from "react";
import OrderList from "./OrderList";
const data = require("../../api/data/dummy.json");

const OrderMain = () => {
  //Fetching Data
  const [result, setResult] = useState(data);
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  //Common states
  const [status, setStatus] = useState("");
  const [inputText, setInputText] = useState("");
  //Pagination
  const handleSearch = () => {
    setPageNumber(0);
    setUpdated(!updated);
  };

  const handleStatus = (value) => {
    setStatus(value);
    setPageNumber(0);
    setUpdated(!updated);
  };
  return (
    <div className="px-4 py-3">
      <div className="row ">
        <div className="col-md-3 col-6 mb-3">
          <div className="radius-16 is-shadow px-3 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold">8.2k </h5>
                <p className="text-clr-gray fw-bold mb-0 mt-3 fs-13">
                  DELIVERED
                </p>
              </div>
              <div>
                <img src="../img/car.svg" alt="logo" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="radius-16 is-shadow px-3 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold">311k </h5>
                <p className="text-clr-gray fw-bold mb-0 mt-3 fs-13">
                  CONFIRMED
                </p>
              </div>
              <div>
                <img
                  src="../img/confirmed.svg"
                  alt="logo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="radius-16 is-shadow px-3 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold">122k </h5>
                <p className="text-clr-gray fw-bold mb-0 mt-3 fs-13">PENDING</p>
              </div>
              <div>
                <img
                  src="../img/pending.svg"
                  alt="logo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="radius-16 is-shadow px-3 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold">1.2k </h5>
                <p className="text-clr-gray fw-bold mb-0 mt-3 fs-13">
                  CANCELLED
                </p>
              </div>
              <div>
                <img
                  src="../img/cancelled.svg"
                  alt="logo"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderList
        status={status}
        handleSearch={handleSearch}
        handleStatus={handleStatus}
        inputText={inputText}
        setInputText={setInputText}
        //Result Section
        result={result}
        updated={updated}
        setUpdated={setUpdated}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};
export default OrderMain;
