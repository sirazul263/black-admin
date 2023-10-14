"use client";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Spinner } from "react-bootstrap";
import TextArea from "@/app/UI/TextArea";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { capitalizeFirstLetter } from "@/helpers/Functions";
import { updateNews } from "@/services/newsServices";

const UpdateOthers = ({
  show,
  setShow,
  data,
  token,
  type,
  updated,
  setUpdated,
}) => {
  const handleClose = () => setShow(false);

  //States
  const validate = Yup.object({
    news: Yup.string().required("Content is required"),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
            <div className="bg-clr-ash w-100 px-4  d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold mb-0">
                  {" "}
                  Update {capitalizeFirstLetter(type)}
                </h5>
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
              <div className="form-body ">
                <Formik
                  initialValues={{
                    news: data.content,
                  }}
                  validationSchema={validate}
                  onSubmit={async (values) => {
                    const form = {
                      content: values.news,
                    };
                    const res = await updateNews(
                      form,
                      data.id,
                      token,
                      setLoading
                    );
                    if (res.hasOwnProperty("data")) {
                      setUpdated(!updated);
                      setShow(false);
                      toast.success("News updated successfully!", {
                        autoClose: 200,
                      });
                    } else if (typeof res.errors === "object") {
                      setError(Object.values(res.errors)[0][0]);
                    } else {
                      setError(res.message);
                    }
                  }}
                >
                  {(formik) => (
                    <Form>
                      <div className="mb-3">
                        <TextArea
                          name="news"
                          rows="4"
                          className="w-100 py-1 is-radius-8 px-2 border bg-clr-ash border-0"
                          placeholder="Enter Your News"
                        />
                      </div>

                      {error && (
                        <p className="text-danger fs-14 fw-semi-bold">
                          <AiOutlineExclamationCircle /> {error}
                        </p>
                      )}
                      <div className="d-flex justify-content-end">
                        {loading ? (
                          <Button
                            disabled
                            className="loading-button d-flex align-items-center justify-content-center   mb-2"
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
                            className="primary-btn py-md fs-14 is-radius-5 border-0  px-5 text-dark mb-2 bg-clr-primary"
                            type="submit"
                          >
                            Update
                          </button>
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default UpdateOthers;
