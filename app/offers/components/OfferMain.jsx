"use client";
import { useEffect, useState } from "react";
import OfferList from "./OfferList";
import Loader from "@/app/components/Loader";
import { getOffers } from "@/services/offerServices";

const OfferMain = ({ token }) => {
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
    const fetchOffers = async () => {
      const offers = await getOffers(token, setLoading);
      setResult(offers);
    };
    fetchOffers();
  }, [updated]);

  return (
    <div className="px-4 py-3">
      {loading ? (
        <Loader />
      ) : (
        <OfferList
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
      )}
    </div>
  );
};
export default OfferMain;
