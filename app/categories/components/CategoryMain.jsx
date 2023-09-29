"use client";
import { useState } from "react";
import CategoryList from "./CategoryList";
import { useEffect } from "react";
import { getCategories } from "@/services/categoryServices";
import Loader from "@/app/components/Loader";

const CategoryMain = ({ token }) => {
  //Fetching Data
  const [result, setResult] = useState(null);
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

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories(token, setLoading);
      setResult(categories);
    };
    fetchCategories();
  }, [updated]);

  return (
    <div className="px-4 py-3">
      {loading ? (
        <Loader />
      ) : (
        <>
          {result && result.hasOwnProperty("data") ? (
            <CategoryList
              handleSearch={handleSearch}
              inputText={inputText}
              setInputText={setInputText}
              //Result Section
              result={result.data}
              updated={updated}
              setUpdated={setUpdated}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              token={token}
            />
          ) : (
            <>
              <p>No Categories Found!</p>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default CategoryMain;
