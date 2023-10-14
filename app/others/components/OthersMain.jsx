"use client";

import TextArea from "@/app/UI/TextArea";
import Loader from "@/app/components/Loader";
import DeleteModal from "@/app/components/Modal/DeleteModal";
import { addNews, getNews, updateNews } from "@/services/newsServices";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Spinner, Form as Form2 } from "react-bootstrap";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import * as Yup from "yup";
import UpdateOthers from "./UpdateOthers";
import { format } from "date-fns";

const OthersMain = ({ token }) => {
  const [result, setResult] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      const news = await getNews(token, setIsLoading);
      setResult(news);
    };
    fetchNews();
  }, [updated]);

  //Adding News

  const [news, setNews] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const validate = Yup.object({
    news: Yup.string().required("News is required"),
  });

  //Delete

  const [showDelete, setShowDelete] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleDelete = (res) => {
    setSelected(res);
    setShowDelete(true);
  };

  const [showUpdate, setShowUpdate] = useState(false);
  const handleUpdate = (res) => {
    setSelected(res);
    setShowUpdate(true);
  };

  //Status Change
  const [statusLoading, setStatusLoading] = useState(false);

  const handleStatus = async (data) => {
    const form = {
      active: data.active === 1 ? 0 : 1,
      content: data.content,
    };

    const res = await updateNews(form, data.id, token, setStatusLoading);
    if (res.hasOwnProperty("data")) {
      setUpdated(!updated);
      toast.success("News updated successfully!", {
        autoClose: 200,
      });
    } else {
      toast.success("Failed !", {
        autoClose: 200,
      });
    }
  };
  return (
    <div>
      <div className="pb-3 pt-1 mt-3 d-flex justify-content-center ">
        <div className="btn-container">
          <button
            type="button"
            className={news ? "tab-btn tab-btn-active" : "tab-btn  "}
            onClick={() => setNews(true)}
          >
            News
          </button>
          <button
            type="button"
            className={news ? "tab-btn " : "tab-btn tab-btn-active "}
            onClick={() => setNews(false)}
          >
            Coming Soon
          </button>
        </div>
      </div>

      {news ? (
        <div>
          {" "}
          <div className="btn-container p-4">
            <div className="form-body ">
              <Formik
                initialValues={{
                  news: "",
                }}
                validationSchema={validate}
                onSubmit={async (values, { resetForm }) => {
                  const data = {
                    content: values.news,
                  };
                  const res = await addNews(data, token, setLoading);
                  if (res.hasOwnProperty("data")) {
                    setUpdated(!updated);
                    resetForm();
                    toast.success("News added successfully!", {
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
                          Create
                        </button>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="my-4 pb-5">
              {result &&
                result.hasOwnProperty("data") &&
                result.data.map((res, i) => (
                  <div key={i} className="btn-container px-4 pt-5 pb-4 mb-4">
                    <p className="fs-14 fw-semibold">{res.content}</p>

                    <div className="d-flex justify-content-between">
                      {/* <p className="fs-14 mb-0">Aug 11, 2023 12:27 PM</p> */}
                      <p className="fs-14 mb-0">
                        {format(
                          new Date(res.created_at),
                          "MMM dd, yyyy hh:mm a"
                        )}
                      </p>

                      <div className="d-flex">
                        {statusLoading ? (
                          <p>Loading....</p>
                        ) : (
                          <div>
                            <Form2>
                              <Form2.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                className="fs-16"
                                checked={res.active === 1}
                                onChange={() => handleStatus(res)}
                              />
                            </Form2>
                          </div>
                        )}
                        <div
                          className="mx-3 cursor-pointer"
                          onClick={() => handleDelete(res)}
                        >
                          <FiTrash2 style={{ fontSize: 16, color: "red" }} />
                        </div>
                        <div
                          className="text-muted cursor-pointer"
                          onClick={() => handleUpdate(res)}
                        >
                          <FaEdit style={{ fontSize: 16 }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}{" "}
        </div>
      ) : (
        <div className="mt-5 text-center">Coming Soon </div>
      )}

      {showDelete && (
        <DeleteModal
          show={showDelete}
          setShow={setShowDelete}
          data={selected}
          updated={updated}
          setUpdated={setUpdated}
          token={token}
          type={"news"}
        />
      )}

      {showUpdate && (
        <UpdateOthers
          show={showUpdate}
          setShow={setShowUpdate}
          data={selected}
          updated={updated}
          setUpdated={setUpdated}
          token={token}
          type={"news"}
        />
      )}
    </div>
  );
};

export default OthersMain;
