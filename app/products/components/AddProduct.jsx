"use client";
import TextInput from "@/app/UI/TextInput";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectField from "@/app/UI/SelectField";
import TextArea from "@/app/UI/TextArea";
import PhotoUploader from "@/app/UI/PhotoUploader";
import { addProduct, updateProduct } from "@/services/productServices";
import { getCategories, getSubCategories } from "@/services/categoryServices";
import { useEffect } from "react";
import { Spinner, Button } from "react-bootstrap";
const AddProduct = ({
  show,
  setShow,
  data,
  updated,
  setUpdated,
  type,
  token,
}) => {
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

  const [category, setCategory] = useState(null);
  const [categoryLoading, setCategoryLoading] = useState(false);

  const [subCategory, setSubCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories(token, setCategoryLoading);
      setCategory(categories);
    };

    const fetchSubCategories = async () => {
      const subCategories = await getSubCategories(token);
      setSubCategory(subCategories);
    };
    fetchCategories();
    fetchSubCategories();
  }, []);

  const categoryOptions = [];
  if (category && category.data.length > 0) {
    for (let i = 0; i < category.data.length; i++) {
      categoryOptions.push({
        name: category.data[i].name,
        value: category.data[i].id,
      });
    }
  }

  const subCategoryOptions = [];
  if (subCategory && subCategory.data.length > 0) {
    for (let i = 0; i < subCategory.data.length; i++) {
      subCategoryOptions.push({
        name: subCategory.data[i].name,
        value: subCategory.data[i].id,
      });
    }
  }

  const handleRemoveProduct = () => {
    const temp = [...productCount];
    temp.pop();
    setProductCount(temp);
  };

  const [images, setImages] = useState(
    type === "Update" ? data.image_urls : []
  );
  const [deletedImages, setDeletedImages] = useState([]);

  const onImageRemove = (item) => {
    const selectedItem = images.filter((image) => image !== item);
    setImages(selectedItem);
    setDeletedImages([...deletedImages, item]);
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
                <h5 className="fw-bold mb-1"> {type} Product</h5>
                <p className="fw-semi-bold fs-14 mb-0">
                  {type} your product and necessary information from here
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
                  product_title: data ? data.name : "",
                  buy_price: data ? data.buy_price : "",
                  sell_price: data ? data.sell_price : "",
                  products: productArray,
                  category: data ? data.category_id : "",
                  sub_category: data ? data.subcategory_id : "",
                  description: data ? data.description : "",
                  keywords: data ? data.keywords : "",
                }}
                validationSchema={validate}
                onSubmit={async (values) => {
                  const form = new FormData();
                  form.append("name", values.product_title);
                  form.append("description", values.description);
                  form.append("category_id", values.category);
                  form.append("subcategory_id", values.sub_category);
                  form.append("keywords", values.keywords);
                  form.append("buy_price", values.buy_price);
                  form.append("sell_price", values.sell_price);
                  for (let i = 0; i < image.length; i++) {
                    form.append(`images[${i}]`, image[i].file);
                  }
                  for (let i = 0; i < values.products.length; i++) {
                    form.append(
                      `variations[${i}][size]`,
                      values.products[i].product_size
                    );
                    form.append(
                      `variations[${i}][quantity]`,
                      values.products[i].quantity
                    );
                    form.append(`variations[${i}][color]`, "red");
                  }
                  for (let i = 0; i < deletedImages.length; i++) {
                    form.append(`delete_images[${i}]`, deletedImages[i]);
                  }
                  const res = data
                    ? await updateProduct(form, token, data.id, setLoading)
                    : await addProduct(form, token, setLoading);

                  if (
                    !res.hasOwnProperty("errors") &&
                    !res.hasOwnProperty("message")
                  ) {
                    setUpdated(!updated);
                    setShow(false);
                  } else if (typeof res.errors === "object") {
                    setError(Object.values(res.errors)[0][0]);
                  } else {
                    setError(res.message);
                  }
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
                        {data && (
                          <div>
                            <p>Selected Images</p>
                            <div className="d-flex">
                              {images.map((image, i) => (
                                <div
                                  key={i}
                                  className="image-item  me-3 is-radius-5"
                                >
                                  <div className="image-item__btn-wrapper d-flex justify-content-end">
                                    <button
                                      onClick={() => onImageRemove(image)}
                                      type="button"
                                      className="bg-transparent border-0"
                                      style={{
                                        marginBottom: -12,
                                        marginRight: -5,
                                        zIndex: 2,
                                      }}
                                    >
                                      <span className="cursor-pointer  remove-btn">
                                        <svg
                                          width="12"
                                          height="12"
                                          viewBox="0 0 14 14"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M13 1L1 13"
                                            stroke="#EC243C"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M1 1L13 13"
                                            stroke="#EC243C"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                    </button>
                                  </div>
                                  <div className="border">
                                    <img
                                      src={image}
                                      alt=""
                                      width="100"
                                      height="100"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
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
                        {i === 0 && productArray.length > 1 && (
                          <div className="col-2 mb-3">
                            <button
                              className="secondary-btn bg-transparent  text-dark py-md fs-14 is-radius-5 border-0  w-100  "
                              type="button"
                              onClick={handleRemoveProduct}
                            >
                              <span className="pe-1">Remove</span>
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
                          options={categoryOptions}
                        />
                      </div>
                      <div className="col-6 mb-3">
                        <p className="mb-1">Select Sub Category</p>
                        <SelectField
                          placeholder="Select"
                          name="sub_category"
                          id="sub_category"
                          options={subCategoryOptions}
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
                          type="text"
                          className="form-control is-radius-5 fs-14"
                          id="keyword"
                          placeholder="Keyword"
                          name="keyword"
                        />
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-md-6 mb-3">
                        <button
                          className="primary-btn py-md fs-14 text-danger bg-transparent is-radius-5 w-100"
                          type="button"
                          onClick={() => setShow(false)}
                        >
                          <span className="pe-1">Cancel</span>
                        </button>
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
                            <span className="pe-1">{type} Product</span>
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
export default AddProduct;
