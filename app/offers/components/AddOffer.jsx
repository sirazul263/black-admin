"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import TextInput from "@/app/UI/TextInput";
import PhotoUploader2 from "@/app/UI/PhotoUploader2";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import dynamic from "next/dynamic";
import SelectField from "@/app/UI/SelectField";
import { Button, Spinner, Form as Form2 } from "react-bootstrap";
import DateField from "@/app/UI/DateField";
const TextEditor = dynamic(() => import("../../components/TextEditor"), {
  ssr: false,
});

const AddOffer = ({ data }) => {
  //States
  const validate = Yup.object({
    campaign_name: Yup.string().required("Campaign Name is required"),
    discount_type: Yup.string().required("Discount Type is required"),
    discount: Yup.number().required("Discount is required"),
  });

  const discountOptions = [
    {
      name: "Fixed",
      value: "FIXED",
    },
    {
      name: "Percentage",
      value: "PERCENTAGE",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);
  const _imageUpload = async (imageList, addUpdateIndex) => {
    setImage(imageList);
  };
  const [terms, setTerms] = useState(null);

  const [error, setError] = useState(null);

  return (
    <div className="p-4">
      <div className="product-form fw-semi-bold  py-4 px-1 fs-14">
        <Formik
          initialValues={{
            campaign_name: data ? data.name : "",
            discount_type: "",
            discount: "",
          }}
          validationSchema={validate}
          onSubmit={async (values) => {
            const form = new FormData();
            form.append("name", values.category_name);
            for (let i = 0; i < image.length; i++) {
              form.append(`images[${i}]`, image[i].file);
            }
            const res = data
              ? await updateCategory(form, token, data.id, setLoading)
              : await addCategory(form, token, setLoading);
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
              <div className="px-md-5 mb-4">
                <div className="row mb-4">
                  <div className="col-md-2">
                    <p className="mb-0">Offer Banner Image </p>
                  </div>
                  <div className="col-md-10 mb-3">
                    <PhotoUploader2 onChange={_imageUpload} images={image} />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-2">
                    <p className="">
                      Campaign Name <span className="text-danger">*</span>
                    </p>
                  </div>
                  <div className="col-md-10 ">
                    <TextInput
                      type="text"
                      className="form-control is-radius-5 fs-14"
                      id="campaign_name"
                      placeholder="Campaign Name"
                      name="campaign_name"
                    />
                  </div>
                </div>
                <TextEditor terms={terms} setTerms={setTerms} />

                <div className="row mb-4">
                  <div className="col-md-2">
                    <p className="">
                      Validity <span className="text-danger">*</span>
                    </p>
                  </div>
                  <div className="col-md-10 register-date ">
                    <DateField name="business_start_date" className="w-100" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-2">
                    <p className="mb-0">
                      Discount Type <span className="text-danger">*</span>
                    </p>
                  </div>
                  <div className="col-md-10 mb-3">
                    <SelectField
                      placeholder="Select"
                      name="discount_type"
                      id="discount_type"
                      options={discountOptions}
                    />
                  </div>
                </div>
                <div className="row mb-4 ">
                  <div className="col-md-2">
                    <p className="">
                      Discount <span className="text-danger">*</span>
                    </p>
                  </div>
                  <div className="col-md-10">
                    <div className="row" style={{ paddingLeft: 12 }}>
                      <div
                        className="col-1 bg-clr-ash d-flex justify-content-center align-items-center"
                        style={{
                          borderTopLeftRadius: 5,
                          borderBottomLeftRadius: 5,
                        }}
                      >
                        <p className="mb-0">%</p>
                      </div>
                      <div className="col-11 ps-0">
                        <TextInput
                          type="number"
                          className="form-control fs-14 w-100"
                          id="discount"
                          placeholder="Discount"
                          name="discount"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-2">
                    <p className="">Promo Code</p>
                  </div>
                  <div className="col-md-10 ">
                    <TextInput
                      type="text"
                      className="form-control is-radius-5 fs-14"
                      id="promo_code"
                      placeholder="Promo Code"
                      name="promo_code"
                    />
                  </div>
                </div>
                <div className="row mb-4 ">
                  <div className="col-md-2">
                    <p className="">Minimum Amount</p>
                  </div>
                  <div className="col-md-10 ">
                    <div className="row" style={{ paddingLeft: 12 }}>
                      <div
                        className="col-1 bg-clr-ash d-flex justify-content-center align-items-center"
                        style={{
                          borderTopLeftRadius: 5,
                          borderBottomLeftRadius: 5,
                        }}
                      >
                        <p className="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="15"
                            viewBox="0 0 14 19"
                            fill="none"
                          >
                            <path
                              d="M13.0898 7.94434V6.44434H4.58984V1.94434C4.58984 1.54651 4.43181 1.16498 4.1505 0.883676C3.8692 0.602371 3.48767 0.444336 3.08984 0.444336C2.69202 0.444336 2.31049 0.602371 2.02918 0.883676C1.74788 1.16498 1.58984 1.54651 1.58984 1.94434C1.58984 2.34216 1.74788 2.72369 2.02918 3.005C2.31049 3.2863 2.69202 3.44434 3.08984 3.44434V6.44434H0.0898438V7.94434H3.08984V14.1443C3.08984 16.5043 4.99984 18.4143 7.33984 18.4443C9.67984 18.4043 11.5398 16.4843 11.4998 14.1443C11.4998 12.5543 10.7498 11.0543 9.49984 10.0643C9.28337 9.88391 9.04878 9.72641 8.79984 9.59434C8.57984 9.49434 8.33984 9.44434 8.09984 9.44434C7.38984 9.44434 6.73984 9.83434 6.38984 10.4443C6.19984 10.7443 6.09984 11.0943 6.09984 11.4443C6.10984 12.5443 6.99984 13.4443 8.10984 13.4443C8.72984 13.4443 9.30984 13.1343 9.68984 12.6443C9.89984 13.1143 9.99984 13.6243 9.99984 14.1443C10.0398 15.6443 8.85984 16.8943 7.33984 16.9443C5.80984 16.9443 4.57984 15.6743 4.58984 14.1443V7.94434H13.0898Z"
                              fill="#8F8F8F"
                            />
                          </svg>
                        </p>
                      </div>
                      <div className="col-11 ps-0">
                        <TextInput
                          type="number"
                          className="form-control fs-14 w-100"
                          id="minimum_amount"
                          placeholder="Minimum Amount"
                          name="minimum_amount"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-2">
                    <p className="">Minimum Product Order</p>
                  </div>
                  <div className="col-md-10 ">
                    <TextInput
                      type="number"
                      className="form-control is-radius-5 fs-14"
                      id="minimum_order"
                      placeholder="Minimum Product Order"
                      name="minimum_order"
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-2">
                    <p className="">Published</p>
                  </div>
                  <div className="col-md-10 ">
                    <Form2>
                      <Form2.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label=""
                      />
                    </Form2>
                  </div>
                </div>
              </div>

              {error && (
                <p className="text-danger fs-14  text-center">
                  <AiOutlineExclamationCircle /> {error}
                </p>
              )}
              <div className="row mt-3 px-md-5">
                <div className="col-md-2"></div>
                <div className="col-md-5 mb-3">
                  <button
                    className="primary-btn py-md fs-14 text-danger bg-transparent is-radius-5 w-100"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    <span className="pe-1">Cancel</span>
                  </button>
                </div>
                <div className="col-md-5">
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
                      <span className="pe-1">Create & Go Back</span>
                    </button>
                  )}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddOffer;
