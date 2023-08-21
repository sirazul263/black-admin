"use client";
import { useState } from "react";
import CategoryList from "./CategoryList";
const data = require("../../api/data/dummy.json");

const CategoryMain = () => {
  //Fetching Data
  const [result, setResult] = useState(data);
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  //Common states
  const [inputText, setInputText] = useState("");
  //Pagination
  const handleSearch = () => {
    setPageNumber(0);
    setUpdated(!updated);
  };

  return (
    <div className="px-4 py-3">
      <CategoryList
        handleSearch={handleSearch}
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
export default CategoryMain;
