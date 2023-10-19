"use client";
import ProductTable from "./ProductTable";

const ProductList = ({
  status,
  handleStatus,
  inputText,
  setInputText,
  result,
  total,
  updated,
  setUpdated,
  pageNumber,
  setPageNumber,
  selected,
  setSelected,
}) => {
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
      </div>

      <div className="mt-2">
        <ProductTable
          selected={selected}
          setSelected={setSelected}
          data={result}
          total={total}
          updated={updated}
          setUpdated={setUpdated}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};
export default ProductList;
