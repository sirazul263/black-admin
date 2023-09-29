"use client";
import { useState } from "react";
import ProductList from "./ProductList";
import Loader from "@/app/components/Loader";
import { getAnalytics, getProducts } from "@/services/productServices";
import { useEffect } from "react";

const ProductMain = ({ token }) => {
  //Fetching Data
  const [result, setResult] = useState(null);
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

  useEffect(() => {
    const data = {
      token: token,
      pageNumber: pageNumber,
      status: status,
      search: inputText,
    };
    const fetchProducts = async () => {
      const products = await getProducts(data, setLoading);
      setResult(products);
    };
    fetchProducts();
  }, [updated]);
  //Fetching Data
  const [analytics, setAnalytics] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const res = await getAnalytics(token, "product", setIsLoading);
      setAnalytics(res);
    };
    fetchAnalytics();
  }, []);
  return (
    <div className="px-4 py-3">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="radius-16 is-shadow p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="fw-bold">{analytics?.total_products} </h5>
                      <p className="text-clr-gray fw-bold mb-0 mt-3 fs-13">
                        TOTAL PRODUCT
                      </p>
                    </div>
                    <div>
                      <img
                        src="../img/car.svg"
                        alt="logo"
                        className="img-fluid"
                        style={{ maxHeight: 100 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="radius-16 is-shadow p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="fw-bold">--- </h5>
                      <p className="text-clr-gray fw-bold mb-0 mt-3 fs-13">
                        PUBLISHED
                      </p>
                    </div>
                    <div>
                      <img
                        src="../img/pending.svg"
                        alt="logo"
                        className="img-fluid"
                        style={{ maxHeight: 100 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4  mb-3">
                <div className="radius-16 is-shadow p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="fw-bold">---- </h5>
                      <p className="text-clr-gray fw-bold mb-0 mt-3 fs-13">
                        UNPUBLISHED
                      </p>
                    </div>
                    <div>
                      <img
                        src="../img/cancelled.svg"
                        alt="logo"
                        className="img-fluid"
                        style={{ maxHeight: 100 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <>
          {result && result.hasOwnProperty("data") && result.data.length > 0 ? (
            <ProductList
              token={token}
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
              <p className="text-center">No results found</p>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default ProductMain;
