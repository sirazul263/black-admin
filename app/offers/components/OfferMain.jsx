"use client";
import { useState } from "react";
import OfferList from "./OfferList";
const data = require("../../api/data/dummy.json");

const OfferMain = () => {
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
    </div>
  );
};
export default OfferMain;
