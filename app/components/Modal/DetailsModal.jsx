import { capitalizeFirstLetter } from "@/helpers/Functions";
import { deleteNews } from "@/services/newsServices";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import ReactModal from "react-modal";
import { toast } from "react-toastify";

const DetailsModal = ({
  show,
  setShow,
  data,
  updated,
  setUpdated,
  token,
  type,
}) => {
  const handleClose = () => {
    setShow(false);
  };

  const [items, setItems] = useState(data.order_items);

  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => setShow(false)}
      className="delete-modal"
      overlayClassName="delete-modal-overlay"
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={false}
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
            {items.map((item, i) => (
              <div className="radius-8 bg-clr-ash  mb-2 p-2" key={i}>
                <div className="row fw-semi-bold   ">
                  <div className="col-4 d-flex align-items-center">
                    <p className="mb-0  ms-3 fs-12  ">
                      {item.product_variation.product.name}
                    </p>
                  </div>
                  <div className="col-3 d-flex align-items-center justify-content-between product-header fs-14 ps-0 pe-3">
                    <div>
                      <p className="mb-0">
                        Size : {item.product_variation.size}
                      </p>
                    </div>

                    <div>৳ {item.price}</div>
                  </div>
                  <div className="col-3 d-flex align-items-center   px-0">
                    <div
                      className="radius-8  bg-white d-flex justify-content-between align-items-center"
                      style={{
                        border: "1px solid #ccc",
                        padding: "2px 3px",
                      }}
                    >
                      <div className="px-md-3 px-1 fs-13">{item.quantity}</div>
                    </div>
                  </div>
                  <div className="col-2 d-flex align-items-center justify-content-between ps-0">
                    <div className="product-header fs-14">
                      {" "}
                      ৳ {item.quantity * Number(item.price)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default DetailsModal;
