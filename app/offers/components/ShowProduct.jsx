import { useState } from "react";
import { Table } from "react-bootstrap";
import ReactModal from "react-modal";
const ShowProduct = ({ show, setShow, data }) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => setShow(false)}
      className="delete-modal"
      overlayClassName="delete-modal-overlay"
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={false}
      ariaHideApp={false}
    >
      <div className="modal-body p-0">
        <div>
          <div className="d-none d-md-block">
            <div className="d-flex justify-content-between align-items-center p-4">
              <p className="fw-bold text-clr-gray mb-0 fs-20">Products</p>
              <button
                type="button"
                className="border-0 bg-transparent"
                onClick={handleClose}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16992 13.8299L13.8299 8.16992"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.8299 13.8299L8.16992 8.16992"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="d-block d-md-none">
            <div className="d-flex justify-content-between align-items-center p-4">
              <p className="fw-bold text-clr-gray mb-0"> Products</p>
              <button
                type="button"
                className="border-0 bg-transparent"
                onClick={handleClose}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16992 13.8299L13.8299 8.16992"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.8299 13.8299L8.16992 8.16992"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 21H14C19 21 21 19 21 14V8C21 3 19 1 14 1H8C3 1 1 3 1 8V14C1 19 3 21 8 21Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="fare-rules-body text-clr-gray">
          <div className="row px-4 mt-xl-2 text-center pb-5">
            {" "}
            <Table striped bordered hover>
              <thead>
                <tr className="fs-14">
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Sell Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i} className="fs-14">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img
                        src={item.image_urls[0]}
                        alt="logo"
                        style={{ height: 35, width: 40, borderRadius: 5 }}
                      />
                    </td>
                    <td>{item.sell_price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default ShowProduct;
