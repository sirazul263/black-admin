import React, { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { usePagination, useSortBy, useTable } from "react-table";
import Form from "react-bootstrap/Form";

import { COLUMNS } from "./OrderColumns";
import UpdateOrder from "./UpdateOrder";

const OrderTable = ({
  data,
  updated,
  setUpdated,
  pageNumber,
  setPageNumber,
  total,
  token,
}) => {
  const columns = useMemo(() => COLUMNS, []);
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      initialState: { pageIndex: 0, hiddenColumns: [""] },
      data,
      setShowModal,
      setSelected,
      updated,
      setUpdated,
      token,
    },
    useSortBy,
    usePagination
  );

  const pageCount = Math.ceil(total / 10);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    setUpdated(!updated);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="order-table">
        <div style={{ minWidth: 350, overflowY: "auto" }}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, _index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={_index}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={index}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="ms-2"
                            >
                              <rect width="10" height="10" fill="#EB1933" />
                              <path
                                d="M5 8L1.5359 2.75L8.4641 2.75L5 8Z"
                                fill="white"
                              />
                            </svg>
                          ) : (
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 10 10"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="ms-2"
                            >
                              <rect width="10" height="10" fill="#EB1933" />
                              <path
                                d="M5 2L8.4641 7.25L1.5359 7.25L5 2Z"
                                fill="white"
                              />
                            </svg>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, _i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={_i}>
                    {row.cells.map((cell, i) => {
                      return (
                        <td {...cell.getCellProps()} key={i}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center text-clr-gray-deep mx-md-3   mt-3 mb-5">
          <div>
            <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Dense"
              />
            </Form>
          </div>
          <div>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <p className="mb-0 fs-14"> Rows per page</p>
                <div className="custom-select ms-3" style={{ minWidth: 60 }}>
                  <div>
                    <select
                      className="form-select form-control text-clr-gray fs-12 "
                      // onChange={(e) => handleStatus(e.target.value)}
                    >
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                </div>
              </div>
              <small className=" ms-5">
                {pageNumber * 10 + 1} -{" "}
                {(pageNumber + 1) * 10 < total ? (pageNumber + 1) * 10 : total}{" "}
                of {total}
              </small>
              <div className="mt-3">
                <ReactPaginate
                  previousLabel={
                    <span aria-hidden="true">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.04102 11.0833L4.95768 6.99996L9.04102 2.91663"
                          stroke="#9B98B4"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  }
                  nextLabel={
                    <span aria-hidden="true">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.95898 11.0833L9.04232 6.99996L4.95898 2.91663"
                          stroke="#79828D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  }
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={`paginationBtn`}
                  previousLinkClassName={"previousBtn"}
                  nextLinkClassName={"nextBtn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActiveBtn"}
                  forcePage={pageNumber}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateOrder
        show={showModal}
        setShow={setShowModal}
        data={selected}
        token={token}
      />
    </>
  );
};

export default OrderTable;
