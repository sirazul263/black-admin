"use client";
import TextInput from "@/app/UI/TextInput";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectField from "@/app/UI/SelectField";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

const UpdateOrder = ({ show, setShow, data }) => {
  const handleClose = () => setShow(false);
  const options = [
    {
      name: "Pending",
      value: "pending",
    },
    {
      name: "Completed",
      value: "completed",
    },
  ];

  const deliveryOptions = [
    {
      name: "Inside Dhaka",
      value: "inside",
    },
    {
      name: "Outside Dhaka",
      value: "outside",
    },
  ];

  //States
  const validate = Yup.object({
    phone: Yup.string()
      .max(15, "Phone Number must be at best 15 characters ")
      .required("Phone Number is required"),
    name: Yup.string().required("Full Name is required"),
    address: Yup.string().required("Address is required"),
    cod_fee: Yup.string().required("COD Fee is required"),
    total_amount: Yup.string().required("Total Amount is required"),
    delivery_type: Yup.string().required("Delivery Type is required"),
    delivery_fee: Yup.string().required("Delivery Fee is required"),
  });

  const [loading, setLoading] = useState(false);

  const [size, setSize] = useState("L");
  const sizes = ["XXL", "XL", "L", "M", "S", "XS"];
  const [item, setItem] = useState(1);

  const products = [
    {
      name: "Red shoe",
      size: 9,
      image: "../../../img/shoe1.svg",
      price: 300,
      quantity: 1,
    },
    {
      name: "White shoe",
      size: 9,
      image: "../../../img/shoe2.svg",
      price: 279,
      quantity: 1,
    },
  ];

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
                <h5 className="fw-bold mb-1">Update Order</h5>
                <p className="fw-semi-bold fs-14 mb-0">
                  Update your order and necessary information from here
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
            <div className="product-form  py-4 px-3">
              <Formik
                initialValues={{
                  phone: "",
                  name: "",
                  address: "",
                  cod_fee: "",
                  total_amount: "",
                  delivery_type: "",
                  delivery_fee: "",
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
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextInput
                          type="text"
                          className="form-control is-radius-5 fs-14"
                          id="name"
                          placeholder="Full Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">Phone Number</p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextInput
                          type="text"
                          className="form-control is-radius-5 fs-14"
                          id="phone"
                          placeholder="Phone Number"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextInput
                          type="text"
                          className="form-control is-radius-5 fs-14"
                          id="address"
                          placeholder="Address"
                          name="address"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">Delivery fee</p>
                      </div>
                      <div className="col-4 mb-3">
                        <SelectField
                          placeholder="Select"
                          name="delivery_type"
                          id="delivery_type"
                          options={deliveryOptions}
                        />
                      </div>
                      <div className="col-4 mb-3">
                        <TextInput
                          type="number"
                          className="form-control is-radius-5 fs-14"
                          id="delivery_fee"
                          placeholder="Delivery Fee"
                          name="delivery_fee"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">Product</p>
                      </div>
                      <div className="col-9 mb-3">
                        {products.map((item, i) => (
                          <div
                            key={i}
                            className="radius-8 bg-clr-ash  mb-2 p-2"
                          >
                            <div className="row fw-semi-bold   ">
                              <div className="col-4 d-flex align-items-center">
                                <div>
                                  <img
                                    src={item.image}
                                    alt="Item"
                                    className="img-fluid"
                                  />
                                </div>

                                <p className="mb-0  ms-1 fs-12  ">
                                  {item.name}
                                </p>
                              </div>
                              <div className="col-3 d-flex align-items-center justify-content-between product-header fs-14 ps-0 pe-3">
                                <div>
                                  <select
                                    name="cars"
                                    id="cars"
                                    style={{
                                      width: 55,
                                      height: 25,
                                      borderRadius: 8,
                                      padding: 4,
                                      fontSize: 14,
                                    }}
                                  >
                                    {sizes.map((size, i) => (
                                      <option value="size">{size}</option>
                                    ))}
                                  </select>
                                </div>

                                <div> ${item.price}</div>
                              </div>
                              <div className="col-3 d-flex align-items-center   px-0">
                                <div
                                  className="radius-8  bg-white d-flex justify-content-between align-items-center"
                                  style={{
                                    border: "1px solid #ccc",
                                    padding: "2px 3px",
                                  }}
                                >
                                  <button
                                    className="border-0 bg-transparent"
                                    type="button"
                                  >
                                    <AiOutlineMinus size={12} />
                                  </button>
                                  <div className="px-md-3 px-1 fs-13 pt-1">
                                    {item.quantity}
                                  </div>
                                  <button
                                    className="border-0 bg-transparent"
                                    type="button"
                                  >
                                    <AiOutlinePlus size={12} />
                                  </button>
                                </div>
                              </div>
                              <div className="col-2 d-flex align-items-center justify-content-between ps-0">
                                <div className="product-header fs-14">
                                  {" "}
                                  ৳{item.quantity * item.price}
                                </div>
                                <div className="cursor-pointer">
                                  <RiDeleteBinLine size={14} />{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        <button
                          className="primary-btn  fs-14 is-radius-5 border-0  mt-3 w-100  mb-2"
                          type="button"
                        >
                          <span className="pe-1">Add New Product</span>
                        </button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">COD Fee</p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextInput
                          type="number"
                          className="form-control is-radius-5 fs-14"
                          id="cod_fee"
                          placeholder="COD Fee"
                          name="cod_fee"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">Total Amount</p>
                      </div>
                      <div className="col-9 mb-3">
                        <TextInput
                          type="text"
                          className="form-control is-radius-5 fs-14"
                          id="total_amount"
                          placeholder="Total Amount"
                          name="total_amount"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <p className="mb-0">Status</p>
                      </div>
                      <div className="col-4 mb-3">
                        <SelectField
                          placeholder="Select"
                          name="status"
                          id="status"
                          options={options}
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
                            <span className="pe-1">Update Order</span>
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
export default UpdateOrder;
