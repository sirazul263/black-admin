"use client";
import { useState } from "react";
import AddProduct from "./AddProduct";
import ProductTable from "./ProductTable";

const ProductList = ({
  status,
  handleStatus,
  inputText,
  setInputText,
  result,
  updated,
  setUpdated,
  pageNumber,
  setPageNumber,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="my-md-4 my-3 is-shadow py-4 px-2 radius-16">
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="">
            <div className="search-box d-flex align-items-center mt-1">
              {/* <AiOutlineSearch /> */}
              <input
                type="text"
                name="search"
                className="form-control px-md-4"
                placeholder="Search..."
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
              />
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="custom-select">
            <div>
              <select
                className="form-select form-control text-clr-gray "
                onChange={(e) => handleStatus(e.target.value)}
                value={status}
              >
                <option value="">Category</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="custom-select">
            <div>
              <select
                className="form-select form-control text-clr-gray "
                onChange={(e) => handleStatus(e.target.value)}
                value={status}
              >
                <option value="">Sub Category</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-2 mb-3">
          <button
            className="primary-btn bg-clr-primary text-dark py-md fs-14 is-radius-5 border-0  w-100  "
            type="button"
            onClick={() => setShowModal(true)}
          >
            <span className="pe-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="me-2"
              >
                <path
                  d="M16.25 0.0234375L24.5 4.14844V13.3477L23 12.5977V5.82422L17 8.82422V11.8477L15.5 12.5977V8.82422L9.5 5.82422V8.48438L8 7.73438V4.14844L16.25 0.0234375ZM16.25 7.52344L18.3242 6.48047L12.8984 3.375L10.4258 4.61719L16.25 7.52344ZM19.9414 5.68359L22.0742 4.61719L16.25 1.69922L14.5039 2.57812L19.9414 5.68359ZM14 13.3477L12.5 14.0977V14.0859L8 16.3359V21.668L12.5 19.4062V21.0938L7.25 23.7188L0.5 20.332V12.4102L7.25 9.03516L14 12.4102V13.3477ZM6.5 21.668V16.3359L2 14.0859V19.4062L6.5 21.668ZM7.25 15.0352L11.5742 12.8789L7.25 10.7109L2.92578 12.8789L7.25 15.0352ZM14 15.0234L19.25 12.3984L24.5 15.0234V21.1992L19.25 23.8242L14 21.1992V15.0234ZM18.5 21.7734V18.1992L15.5 16.6992V20.2734L18.5 21.7734ZM23 20.2734V16.6992L20 18.1992V21.7734L23 20.2734ZM19.25 16.8984L22.0742 15.4805L19.25 14.0742L16.4258 15.4805L19.25 16.8984Z"
                  fill="black"
                />
              </svg>
              Add Product
            </span>
          </button>
        </div>
      </div>

      <div className="mt-2">
        <ProductTable
          data={result}
          updated={updated}
          setUpdated={setUpdated}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          total={result.length}
        />
      </div>

      <AddProduct show={showModal} setShow={setShowModal} type={"Add"} />
    </div>
  );
};
export default ProductList;
