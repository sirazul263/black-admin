"use client";
import { AiOutlineSearch } from "react-icons/ai";
import OrderTable from "./OrderTable";

const OrderList = ({
  status,
  handleStatus,
  inputText,
  handleSearch,
  result,
  total,
  updated,
  setUpdated,
  pageNumber,
  setPageNumber,
}) => {
  return (
    <div className="my-md-4 my-3">
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="custom-select">
            <div>
              <select
                className="form-select form-control text-clr-gray "
                onChange={(e) => handleStatus(e.target.value)}
                value={status}
              >
                <option value="">Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-9 mb-3">
          <div className="">
            <div className="search-box d-flex align-items-center">
              {/* <AiOutlineSearch /> */}
              <input
                type="text"
                name="search"
                className="form-control px-md-4"
                placeholder="Search..."
                onChange={(e) => handleSearch(e.target.value)}
                value={inputText}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" px-2">
        <div className="mt-2">
          <OrderTable
            data={result}
            updated={updated}
            setUpdated={setUpdated}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};
export default OrderList;
