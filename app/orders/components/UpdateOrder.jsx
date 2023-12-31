"use client";
import TextInput from "@/app/UI/TextInput";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectField from "@/app/UI/SelectField";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { getProducts } from "@/services/productServices";

const UpdateOrder = ({ show, setShow, data, token }) => {
  const handleClose = () => {
    setShow(false);
  };

  const options = [
    {
      name: "Pending",
      value: "pending",
    },
    {
      name: "Confirmed",
      value: "confirmed",
    },
    {
      name: "Shipped",
      value: "shipped",
    },
    {
      name: "Delivered",
      value: "delivered",
    },
    {
      name: "Canceled",
      value: "canceled",
    },
  ];

  const deliveryOptions = [
    {
      name: "Inside Dhaka",
      value: "INSIDE_DHAKA",
    },
    {
      name: "Outside Dhaka",
      value: "OUTSIDE_DHAKA",
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
  const sizes = ["XXL", "XL", "L", "M", "S", "XS"];

  const [products, setProducts] = useState(data.order_items);
  const [showProduct, setShowProduct] = useState(false);

  //Existing Order

  const addProductToOrder = (item) => {
    const selectedItem = products.find((order) => order.id === item.id);
    const temp = [...products];
    const index = products.indexOf(selectedItem);
    const tempItem = { ...temp[index] };
    tempItem.quantity = tempItem.quantity + 1;
    temp[index] = tempItem;
    setProducts(temp);
  };

  const removeItemFromOrder = (item) => {
    const selectedItem = products.find((order) => order.id === item.id);
    const temp = [...products];
    const index = products.indexOf(selectedItem);
    const tempItem = { ...temp[index] };
    if (tempItem.quantity > 1) {
      tempItem.quantity = tempItem.quantity - 1;
      temp[index] = tempItem;
      setProducts(temp);
    } else {
      setProducts(products.filter((order) => order.id !== item.id));
    }
  };

  const deleteItemFromOrder = (item) => {
    setProducts(products.filter((order) => order.id !== item.id));
  };

  //Fetching Data
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleSearch = (text) => {
    setInputText(text);
    setUpdated(!updated);
  };

  useEffect(() => {
    if (showProduct) {
      const data = {
        token: token,
        search: inputText,
        pageNumber: 0,
      };
      const fetchProducts = async () => {
        const products = await getProducts(data, setIsLoading);
        setResult(products);
      };
      fetchProducts();
    }
  }, [updated, showProduct]);

  const [orderItems, setOrderItems] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  //handle size
  const handleSize = (item, size) => {
    const selectedItem = selectedSizes.find((size) => size.id === item.id);
    if (selectedItem) {
      const temp = [...selectedSizes];
      const index = selectedSizes.indexOf(selectedItem);
      const tempItem = { ...temp[index] };
      tempItem.size = size;
      temp[index] = tempItem;
      setSelectedSizes(temp);
    } else {
      const data = {
        item: item.id,
        size: size,
      };
      setSelectedSizes([...selectedSizes, data]);
    }
  };

  const addItem = (item) => {
    const selectedItem = orderItems.find((order) => order.id === item.id);
    if (selectedItem) {
      const temp = [...orderItems];
      const index = orderItems.indexOf(selectedItem);
      const tempItem = { ...temp[index] };
      tempItem.quantity = tempItem.quantity + 1;
      temp[index] = tempItem;
      setOrderItems(temp);
    } else {
      const data = {
        name: item.name,
        id: item.id,
        quantity: 1,
        price: item.offered_price,
        image: item.image_urls[0],
      };
      setOrderItems([...orderItems, data]);
    }
  };

  const removeItem = (item) => {
    const selectedItem = orderItems.find((order) => order.id === item.id);
    const temp = [...orderItems];
    const index = orderItems.indexOf(selectedItem);
    const tempItem = { ...temp[index] };
    if (tempItem.quantity > 1) {
      tempItem.quantity = tempItem.quantity - 1;
      temp[index] = tempItem;
      setOrderItems(temp);
    } else {
      setOrderItems(orderItems.filter((order) => order.id !== item.id));
    }
  };

  const deleteItem = (item) => {
    setOrderItems(orderItems.filter((order) => order.id !== item.id));
  };

  const getTotalItem = (item) => {
    const selectedItem = orderItems.find(
      (orderItem) => orderItem.id === item.id
    );
    if (selectedItem) {
      return selectedItem.quantity;
    } else return 0;
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
                <h5 className="fw-bold mb-1">
                  {" "}
                  {showProduct ? "Add New Product to Order" : "Update Order"}
                </h5>
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
            {showProduct ? (
              <>
                {isLoading ? (
                  <p>Loading</p>
                ) : (
                  <div>
                    <div className="col-md-12 mb-3">
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
                        <div className="d-flex justify-content-end mt-2">
                          <button
                            type="button"
                            className="primary-btn fs-14 py-1 px-4"
                            onClick={() => setShowProduct(false)}
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    </div>
                    {result?.data.map((item, i) => (
                      <div key={i} className="radius-8 bg-clr-ash  mb-2 p-2">
                        <div className="row fw-semi-bold   ">
                          <div className="col-4 d-flex align-items-center">
                            <div>
                              <img
                                src={item.image_urls[0]}
                                alt="Item"
                                className="img-fluid"
                                style={{ height: 60, width: 60 }}
                              />
                            </div>

                            <p className="mb-0  ms-3 fs-12  ">{item.name}</p>
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
                                onChange={(e) =>
                                  handleSize(item, e.target.value)
                                }
                                value={
                                  selectedSizes.find(
                                    (sizes) => sizes.item === item.id
                                  )
                                    ? selectedSizes.find(
                                        (sizes) => sizes.item === item.id
                                      ).id
                                    : ""
                                }
                              >
                                {item.variations.map((size, i) => (
                                  <option value={size.id} key={i}>
                                    {size.size}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>৳ {item.offered_price}</div>
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
                                onClick={() => removeItem(item)}
                                disabled={getTotalItem(item) === 0}
                              >
                                <AiOutlineMinus size={12} />
                              </button>
                              <div className="px-md-3 px-1 fs-13 pt-1">
                                {getTotalItem(item)}
                              </div>
                              <button
                                className="border-0 bg-transparent"
                                type="button"
                                onClick={() => addItem(item)}
                              >
                                <AiOutlinePlus size={12} />
                              </button>
                            </div>
                          </div>
                          <div className="col-2 d-flex align-items-center justify-content-between ps-0">
                            <div className="product-header fs-14">
                              ৳ {getTotalItem(item) * item.offered_price}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="product-form  py-4 px-3">
                <Formik
                  initialValues={{
                    phone: data.delivery_information?.phone || "",
                    name: data.delivery_information?.full_name || "",
                    address: data.delivery_information?.address || "",
                    cod_fee: "",
                    total_amount: data.total_amount,
                    delivery_type: data.shipping_method.name,
                    delivery_fee: data.shipping_method.cost,
                    status: data.status,
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
                                <div className="col-4 d-flex align-items-center ">
                                  <div>
                                    <img
                                      src={
                                        item.product_variation.product
                                          .image_urls[0]
                                      }
                                      alt="Item"
                                      className="img-fluid"
                                      style={{ maxHeight: 40, maxWidth: 40 }}
                                    />
                                  </div>

                                  <p className="mb-0  ms-1 fs-12">
                                    {item.product_variation.product.name}
                                  </p>
                                </div>
                                <div className="col-3 d-flex align-items-center justify-content-between product-header fs-14 ps-0 pe-3">
                                  <div className="me-2">
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
                                        <option value="size" key={i}>
                                          {size}
                                        </option>
                                      ))}
                                    </select>
                                  </div>

                                  <div> {item.price}</div>
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
                                      onClick={() => removeItemFromOrder(item)}
                                    >
                                      <AiOutlineMinus size={12} />
                                    </button>
                                    <div className="px-md-3 px-1 fs-13 pt-1">
                                      {item.quantity}
                                    </div>
                                    <button
                                      className="border-0 bg-transparent"
                                      type="button"
                                      onClick={() => addProductToOrder(item)}
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
                                  <div
                                    className="cursor-pointer"
                                    onClick={() => deleteItemFromOrder(item)}
                                  >
                                    <RiDeleteBinLine size={14} />{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                          {orderItems.length > 0 && (
                            <div>
                              <p className="fw-bold fs-14"> New Added Items</p>
                              {orderItems.map((item, i) => (
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
                                          style={{
                                            maxHeight: 40,
                                            maxWidth: 40,
                                          }}
                                        />
                                      </div>

                                      <p className="mb-0  ms-1 fs-12  ">
                                        {item.name}
                                      </p>
                                    </div>
                                    <div className="col-3 d-flex align-items-center justify-content-between product-header fs-14 ps-0 pe-3">
                                      <div className="me-2">
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
                                            <option value="size" key={i}>
                                              {size}
                                            </option>
                                          ))}
                                        </select>
                                      </div>

                                      <div> {item.price}</div>
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
                                          onClick={() => removeItem(item)}
                                        >
                                          <AiOutlineMinus size={12} />
                                        </button>
                                        <div className="px-md-3 px-1 fs-13 pt-1">
                                          {item.quantity}
                                        </div>
                                        <button
                                          className="border-0 bg-transparent"
                                          type="button"
                                          onClick={() => addItem(item)}
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
                                      <div
                                        className="cursor-pointer"
                                        onClick={() => deleteItem(item)}
                                      >
                                        <RiDeleteBinLine size={14} />{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          <button
                            className="primary-btn  fs-14 is-radius-5 border-0  mt-3 w-100  mb-2"
                            type="button"
                            onClick={() => setShowProduct(true)}
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
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default UpdateOrder;
