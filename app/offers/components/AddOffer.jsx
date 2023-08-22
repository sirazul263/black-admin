"use client";
import TextInput from "@/app/UI/TextInput";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectField from "@/app/UI/SelectField";
import TextArea from "@/app/UI/TextArea";
import PhotoUploader from "@/app/UI/PhotoUploader";

const AddOffer = ({ show, setShow, data, type }) => {
  const handleClose = () => setShow(false);

  //States
  const validate = Yup.object({
    product_title: Yup.string().required("Product title is required"),
    buy_price: Yup.number().required("Buy Price is required"),
    sell_price: Yup.string().required("Sell Price is required"),
    products: Yup.array().of(
      Yup.object().shape({
        product_size: Yup.string().required("Product Size is required"),
        quantity: Yup.number().required("Quantity is required"),
      })
    ),
    category: Yup.string().required("Category is required"),
  });

  const [loading, setLoading] = useState(false);

  const sizeOptions = [
    {
      name: "XXL",
      value: "XXL",
    },
    { name: "XL", value: "XL" },
    { name: "L", value: "L" },
    { name: "M", value: "M" },
    { name: "S", value: "S" },
    { name: "XS", value: "XS" },
  ];

  const category = [
    {
      name: "Bag",
      value: "bag",
    },
    {
      name: "Shoe",
      value: "Shoe",
    },
  ];

  const [image, setImage] = useState([]);
  const _imageUpload = async (imageList, addUpdateIndex) => {
    setImage(imageList);
  };

  const [productCount, setProductCount] = useState([1]);
  const productArray = [];
  for (let i = 0; i < productCount.length; i++) {
    productArray.push({
      product_size: "",
      quantity: "",
    });
  }
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
                <h5 className="fw-bold mb-1"> {type} Offer</h5>
                <p className="fw-semi-bold fs-14 mb-0">
                  {type} your offer and necessary information from here
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
            <div className="product-form fw-semi-bold  py-4 px-2 fs-14">
              <Formik
                initialValues={{
                  product_title: "",
                  buy_price: "",
                  sell_price: "",
                  products: productArray,
                  category: "",
                  sub_category: "",
                  product_quantity: "",
                  description: "",
                  keywords: "",
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
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">
                          Product Title/Name{" "}
                          <span className="text-danger">*</span>
                        </p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextInput
                          type="text"
                          className="form-control is-radius-5 fs-14"
                          id="product_title"
                          placeholder="Product Title"
                          name="product_title"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">
                          Buy Price <span className="text-danger">*</span>
                        </p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextInput
                          type="number"
                          className="form-control is-radius-5 fs-14"
                          id="buy_price"
                          placeholder="Buy Price"
                          name="buy_price"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">
                          Sell Price <span className="text-danger">*</span>
                        </p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextInput
                          type="number"
                          className="form-control is-radius-5 fs-14"
                          id="sell_price"
                          placeholder="Sell Price"
                          name="sell_price"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">
                          Product Image <span className="text-danger">*</span>
                        </p>
                      </div>
                      <div className="col-9 mb-3">
                        <PhotoUploader onChange={_imageUpload} images={image} />
                      </div>
                    </div>
                    {productArray.map((product, i) => (
                      <div className="row" key={i}>
                        <div className="col-3">
                          <p className="mb-0">
                            Product Size <span className="text-danger">*</span>
                          </p>
                        </div>
                        <div className="col-3 mb-3">
                          <SelectField
                            placeholder="Select"
                            name={`products.[${i}].product_size`}
                            id={`products.[${i}].product_size`}
                            options={sizeOptions}
                          />
                        </div>
                        <div className="col-4 mb-3">
                          <TextInput
                            type="number"
                            className="form-control is-radius-5 fs-14"
                            id={`products.[${i}].quantity`}
                            placeholder="Quantity"
                            name={`products.[${i}].quantity`}
                          />
                        </div>
                        {i === productArray.length - 1 && (
                          <div className="col-2 mb-3">
                            <button
                              className="primary-btn bg-clr-primary text-dark py-md fs-14 is-radius-5 border-0  w-100  "
                              type="button"
                              onClick={() =>
                                setProductCount([...productCount, 1])
                              }
                            >
                              <span className="pe-1">Add</span>
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="row">
                      <div className="col-6 mb-3">
                        <p className="mb-1 ">
                          Select Category <span className="text-danger">*</span>
                        </p>
                        <SelectField
                          placeholder="Select"
                          name="category"
                          id="category"
                          options={category}
                        />
                      </div>
                      <div className="col-6 mb-3">
                        <p className="mb-1">Select Sub Category</p>
                        <SelectField
                          placeholder="Select"
                          name="sub_category"
                          id="sub_category"
                          options={category}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">Product Quantity </p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextInput
                          type="number"
                          className="form-control is-radius-5 fs-14"
                          id="product_quantity"
                          placeholder="Product quantity"
                          name="product_quantity"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">Product Description</p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextArea
                          id="description"
                          placeholder="Product Description"
                          name="description"
                          rows="3"
                          className="w-100 py-2 radius-8 px-2 border bg-clr-ash border-0"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">Keyword</p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextInput
                          type="number"
                          className="form-control is-radius-5 fs-14"
                          id="keyword"
                          placeholder="Keyword"
                          name="keyword"
                        />
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
                            <span className="pe-1">{type} Offer</span>
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
export default AddOffer;
