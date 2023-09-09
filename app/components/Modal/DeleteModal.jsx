import TextArea from "@/app/UI/TextArea";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import ReactModal from "react-modal";
import * as Yup from "yup";

const DeleteModal = ({ show, setShow, data, updated, setUpdated }) => {
  const [deletedResponse, setDeletedResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const validate = Yup.object({
    remarks: Yup.string().required("Remarks is required"),
  });

  const handleClose = () => {
    setShow(false);
    setDeletedResponse(null);
    if (deletedResponse && deletedResponse.status === 1) {
      setUpdated(!updated);
    }
  };

  return (
    <ReactModal
      isOpen={show}
      onRequestClose={() => setShow(false)}
      className="finance-modal"
      overlayClassName="finance-modal-overlay"
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={false}
    >
      <div className="modal-body p-0">
        <div>
          <div className="d-none d-md-block">
            <div className="d-flex justify-content-between align-items-center p-4">
              <p className="fw-bold text-clr-gray mb-0 fs-20">
                Delete Customer
              </p>
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
              <p className="fw-bold text-clr-gray mb-0"> Delete Customer</p>
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
          {deletedResponse ? (
            <>
              {deletedResponse.status === 1 ? (
                <div className="d-flex justify-content-center text-center">
                  <div>
                    <div className="d-flex justify-content-center">
                      <img
                        src="../../assets/img/delete.gif"
                        alt="img"
                        className="img-fluid transition"
                        style={{ height: 150 }}
                      />
                    </div>
                    <h3 className="fw-bold text-clr-red mb-3">Successful !</h3>{" "}
                    <p className="fs-14 text-danger fw-bold">
                      Customer has been deleted successfully!
                    </p>
                    <button
                      type="button"
                      className="primary-btn transition bg-clr-red fs-14  px-4 py-2  mt-4"
                      onClick={handleClose}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-center text-center">
                  <div>
                    <div className="d-flex justify-content-center">
                      <img
                        src="../../assets/img/failure.gif"
                        alt="img"
                        className="img-fluid transition"
                        style={{ height: 150 }}
                      />
                    </div>
                    <h3 className="fw-bold text-clr-red mb-3">Failed !</h3>{" "}
                    <p className="fs-14 text-danger fw-bold">
                      {typeof deletedResponse.message === "object"
                        ? Object.values(deletedResponse.message)[0][0]
                        : deletedResponse.message}
                    </p>
                    <button
                      type="button"
                      className="primary-btn transition bg-clr-red fs-14  px-4 py-2  mt-4"
                      onClick={handleClose}
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="row px-4 mt-xl-2 text-center pb-5">
                <div>
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="35" fill="#EB1933" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M29.5168 13.2257C28.6229 13.5021 27.9791 14.0561 27.5774 14.8944C27.3713 15.3246 27.3474 15.485 27.3202 16.6261L27.2901 17.8837L23.5603 17.9085L19.8306 17.9333L19.3392 18.1586C18.6484 18.4753 18.1741 18.9277 17.8424 19.586L17.5574 20.1516L17.5287 21.7569L17.5 23.3621H35H52.5L52.4713 21.7569L52.4426 20.1516L52.1576 19.586C51.8259 18.9277 51.3516 18.4753 50.6608 18.1586L50.1694 17.9333L46.4397 17.9085L42.7099 17.8837L42.6798 16.6261C42.6524 15.4805 42.6292 15.3257 42.4196 14.8881C42.0961 14.2125 41.6335 13.7488 40.9598 13.4245L40.381 13.1458L35.1331 13.1288C30.9662 13.1153 29.8093 13.1352 29.5168 13.2257ZM39.8525 16.8647V17.8478H35H30.1475L30.1224 16.956C30.1086 16.4654 30.1174 16.013 30.1419 15.9507C30.1782 15.858 31.0699 15.8413 35.0194 15.8594L39.8525 15.8815V16.8647ZM21.1428 26.7176C21.1712 27.0586 21.6047 33.3967 22.1062 40.8025C22.6077 48.2082 23.0603 54.4368 23.112 54.6437C23.2375 55.1469 23.405 55.4482 23.7913 55.8663C24.2015 56.3102 24.6212 56.5686 25.2101 56.7396C25.623 56.8594 26.7471 56.875 35.0066 56.875C44.1058 56.875 44.3508 56.8707 44.9058 56.7032C45.8236 56.426 46.639 55.5967 46.8806 54.695C46.931 54.5069 47.3854 48.2553 47.8903 40.8025C48.3953 33.3497 48.8318 26.9923 48.8604 26.6749L48.9122 26.0978H35.0017H21.0911L21.1428 26.7176ZM28.8417 33.2348C29.017 33.3656 29.2111 33.5927 29.2727 33.7393C29.4142 34.0762 30.8375 50.0303 30.7577 50.3858C30.7259 50.5274 30.5556 50.7916 30.3792 50.9729C30.0264 51.3356 29.6151 51.4612 29.0935 51.3655C28.7162 51.2963 28.1328 50.756 28.0591 50.4077C27.9466 49.8753 26.5991 34.246 26.6456 34.013C26.7139 33.6712 27.0972 33.2012 27.4266 33.0553C27.8399 32.8722 28.4612 32.951 28.8417 33.2348ZM35.7662 33.1656C35.8918 33.2574 36.0758 33.4387 36.1749 33.5686C36.3541 33.8032 36.3552 33.8544 36.3552 42.1703C36.3552 50.4863 36.3541 50.5375 36.1749 50.7721C35.8323 51.2207 35.5529 51.3608 35 51.3608C34.4471 51.3608 34.1676 51.2208 33.8251 50.7721C33.6464 50.5381 33.6445 50.4647 33.6195 42.3992C33.6056 37.924 33.617 34.1384 33.6449 33.987C33.7075 33.6464 34.073 33.2099 34.4273 33.0527C34.7812 32.8957 35.4768 32.9544 35.7662 33.1656ZM42.5541 33.0564C42.8964 33.1962 43.2837 33.6592 43.3544 34.013C43.4006 34.2447 42.0537 49.8734 41.9417 50.4036C41.9139 50.5354 41.7468 50.7916 41.5705 50.9729C41.2151 51.3382 40.8061 51.4611 40.2721 51.3632C39.853 51.2863 39.3183 50.7721 39.2428 50.3734C39.1928 50.1092 40.5258 34.5182 40.6478 33.9397C40.8063 33.1885 41.7768 32.7388 42.5541 33.0564Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h4 className="fw-bold text-dark my-4">
                  This action can't be undone!
                </h4>
                <p className="text-clr-gray fs-16 fw-semi-bold ">
                  Are you sure you want to delete this customer?
                </p>
                <div className="primary-input">
                  <Formik
                    validationSchema={validate}
                    initialValues={{
                      remarks: "",
                    }}
                    onSubmit={async (values) => {
                      const formData = {
                        id: data.id,

                        type: isAdmin ? "admin" : "agency",
                        remark: values.remarks,
                      };
                      if (isAdmin) {
                        formData.agency_id = data.agency_id;
                      }
                      const res = await deleteCustomer(formData, setLoading);
                      setDeletedResponse(res);
                    }}
                  >
                    {(formik) => (
                      <Form>
                        <div style={{ textAlign: "start" }}>
                          <label
                            htmlFor="remarks"
                            className="form-label fs-14  fw-semi-bold mt-2 "
                          >
                            Remarks
                            <span className="text-danger">*</span>
                          </label>
                          <div>
                            <TextArea
                              name="remarks"
                              rows="3"
                              className="w-100 py-1 is-radius-8 px-2 border bg-clr-ash border-0"
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-around align-items-center mt-3">
                          <button
                            className="secondary-btn py-2 is-radius-8 fs-13 fw-semi-bold text-center px-5  me-4"
                            type="button"
                            onClick={() => setShow(false)}
                          >
                            Cancel
                          </button>
                          {loading ? (
                            <div className="d-flex justify-content-center align-items-center ">
                              <Button
                                disabled
                                className="loading-button d-flex align-items-center justify-content-center   mb-3"
                              >
                                <Spinner
                                  as="span"
                                  animation="grow"
                                  size="md"
                                  role="status"
                                  aria-hidden="true"
                                />
                                <span className="ms-3"> Loading...</span>
                              </Button>
                            </div>
                          ) : (
                            <button
                              className="primary-btn py-2 is-radius-8 fs-13 fw-semi-bold text-center px-5 "
                              type="submit"
                            >
                              Confirm
                            </button>
                          )}
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </ReactModal>
  );
};

export default DeleteModal;
