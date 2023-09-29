"use client";

import { useState } from "react";
import OrderList from "./OrderList";
import Loader from "@/app/components/Loader";
import { useEffect } from "react";
import { getOrders } from "@/services/orderServices";
import { getAnalytics } from "@/services/productServices";

const OrderMain = ({ token }) => {
  //Fetching Data
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  //Common states
  const [status, setStatus] = useState("");
  const [inputText, setInputText] = useState("");
  //Pagination
  const handleSearch = (text) => {
    setInputText(text);
    setPageNumber(0);
    setUpdated(!updated);
  };

  const handleStatus = (value) => {
    setStatus(value);
    setPageNumber(0);
    setUpdated(!updated);
  };

  useEffect(() => {
    const data = {
      token: token,
      pageNumber: pageNumber,
      status: status,
      search: inputText,
    };
    const fetchOrders = async () => {
      const orders = await getOrders(data, setLoading);
      setResult(orders);
    };
    fetchOrders();
  }, [updated]);

  //Fetching Data
  const [analytics, setAnalytics] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const res = await getAnalytics(token, "order", setIsLoading);
      setAnalytics(res);
    };
    fetchAnalytics();
  }, []);
  return (
    <div className="px-4 py-3">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="row ">
          {analytics && (
            <>
              <div className="col-md-3 col-6 mb-3">
                <div className="radius-16 is-shadow px-3 py-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="fw-bold">{analytics.total_delivered} </h5>
                      <p className="text-clr-gray fw-bold mb-0 mt-3 fs-13">
                        DELIVERED
                      </p>
                    </div>
                    <div>
                      <img
                        src="../img/car.svg"
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
                      <h5 className="fw-bold">{analytics.total_confirmed} </h5>
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
                      <h5 className="fw-bold">{analytics.total_pending} </h5>
                      <p className="text-clr-gray fw-bold mb-0 mt-3 fs-13">
                        PENDING
                      </p>
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
                      <h5 className="fw-bold">{analytics.total_cancelled} </h5>
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
            </>
          )}
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <>
          {result && result.hasOwnProperty("data") ? (
            <OrderList
              status={status}
              handleSearch={handleSearch}
              handleStatus={handleStatus}
              inputText={inputText}
              setInputText={setInputText}
              //Result Section
              result={result.data}
              total={result.total}
              updated={updated}
              setUpdated={setUpdated}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          ) : (
            <>
              <p className="mt-5 text-center fw-bold fs-24">
                No results found !
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default OrderMain;
