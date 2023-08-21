"use client";
import TextInput from "@/app/UI/TextInput";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectField from "@/app/UI/SelectField";
import TextArea from "@/app/UI/TextArea";
import PhotoUploader from "@/app/UI/PhotoUploader";

const AddCategory = ({ show, setShow, data, type }) => {
  const handleClose = () => setShow(false);

  //States
  const validate = Yup.object({
    category_name: Yup.string().required("Category is required"),
  });

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);
  const _imageUpload = async (imageList, addUpdateIndex) => {
    setImage(imageList);
  };

  return (
    <div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        backdrop-={false}
      >
        <Offcanvas.Header className="p-0 d-block">
          <Offcanvas.Title>
            <div className="bg-clr-ash w-100 px-4 py-3 d-flex justify-content-between">
              <div>
                <h5 className="fw-bold mb-1"> {type} Category</h5>
                <p className="fw-semi-bold fs-14 mb-0">
                  {type} your category and necessary information from here
                </p>
              </div>
              <div>
                <img
                  src="../img/close-btn.svg"
                  alt="logo"
                  className="img-fluid cursor-pointer"
                  style={{ height: 60 }}
                  onClick={handleClose}
                />
              </div>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div className="product-form fw-semi-bold  py-4 px-1 fs-14">
              <Formik
                initialValues={{
                  category_name: "",
                }}
                validationSchema={validate}
                onSubmit={async (values) => {
                  // const res = await commonLogin(values, setLoading);
                  // if (res.status === 1) {
                  //   router.reload(window.location.pathname);
                  // } else if (typeof res.msg === "object") {
                  //   setLoginError(Object.values(res.msg)[0][0]);
                  // } else {
                  //   setLoginError(res.msg);
                  // }
                }}
              >
                {(formik) => (
                  <Form>
                    <div className="row mb-4">
                      <div className="col-3">
                        <p className="">
                          Category Title/Name
                          <span className="text-danger">*</span>
                        </p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextInput
                          type="text"
                          className="form-control is-radius-5 fs-14"
                          id="category_name"
                          placeholder="Category name"
                          name="category_name"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">
                          Category Icon <span className="text-danger">*</span>
                        </p>
                      </div>
                      <div className="col-9 mb-3">
                        <PhotoUploader onChange={_imageUpload} images={image} />
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6 mb-3">
                        {loading ? (
                          <Button
                            disabled
                            className="loading-button d-flex align-items-center justify-content-center w-100  "
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
                        ) : (
                          <button
                            className="primary-btn py-md fs-14 text-danger bg-transparent is-radius-5 w-100"
                            type="button"
                          >
                            <span className="pe-1">Cancel</span>
                          </button>
                        )}
                      </div>
                      <div className="col-md-6">
                        {loading ? (
                          <Button
                            disabled
                            className="loading-button d-flex align-items-center justify-content-center w-100  "
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
                        ) : (
                          <button
                            className="primary-btn bg-clr-primary text-dark py-md fs-14 is-radius-5 border-0  w-100  "
                            type="submit"
                          >
                            <span className="pe-1">{type} Category</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default AddCategory;
