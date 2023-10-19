"use client";

import Loader from "@/app/components/Loader";
import { getProducts } from "@/services/productServices";
import { useEffect } from "react";
import { useState } from "react";
import ProductList from "./ProductList";
import AddOffer from "./AddOffer";
import ScrollButton from "@/app/components/ScrollButton";
import { useSearchParams } from "next/navigation";
import { getSingleOffer } from "@/services/offerServices";

const AddOfferMain = ({ token }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [selected, setSelected] = useState([]);

  //Fetching Data
  const [data, setData] = useState(null);
  useEffect(() => {
    if (id) {
      const fetchOffer = async () => {
        const res = await getSingleOffer(token, id);
        if (res.hasOwnProperty("data")) {
          setData(res);
          const productArray = [];
          for (let i = 0; i < res.data.products.length; i++) {
            productArray.push(res.data.products[i].id);
          }
          setSelected(productArray);
        }
      };
      fetchOffer();
    }
  }, []);
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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {result && result.hasOwnProperty("data") && result.data.length > 0 ? (
            <div>
              <ScrollButton />
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
                selected={selected}
                setSelected={setSelected}
              />
              {id ? (
                data !== null ? (
                  <AddOffer
                    selected={selected}
                    token={token}
                    data={data.data}
                  />
                ) : (
                  <p>Loading.....</p>
                )
              ) : (
                <AddOffer selected={selected} token={token} />
              )}
            </div>
          ) : (
            <>
              <p className="text-center">No results found</p>
            </>
          )}
        </>
      )}
    </>
  );
};

export default AddOfferMain;
