import React from "react";
import ImageUploading from "react-images-uploading";
const PhotoUploader2 = ({ images, onChange, imageUrl, setImageUrl }) => {
  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={1}
        dataURLKey="data_url"
        acceptType={["jpg", "png", "jpeg"]}
        maxFileSize={3000000}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          onImageRemoveAll,
          isDragging,
          dragProps,
          errors,
        }) => (
          <div>
            <div className="upload__image-wrapper">
              {imageList.length > 0 || imageUrl ? (
                <>
                  {imageUrl ? (
                    <div className="d-flex flex-wrap mt-1 mb-2">
                      <div className="image-item  me-3 is-radius-5">
                        <div className="image-item__btn-wrapper d-flex justify-content-end">
                          <button
                            onClick={() => setImageUrl(null)}
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
                            src={imageUrl}
                            alt=""
                            width="100%"
                            height="200px"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex flex-wrap mt-1 mb-2">
                      {imageList.map((image, index) => (
                        <div
                          key={index}
                          className="image-item  me-3 is-radius-5"
                        >
                          <div className="image-item__btn-wrapper d-flex justify-content-end">
                            <button
                              onClick={() => onImageRemove(index)}
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
                              src={image["data_url"]}
                              alt=""
                              width="100%"
                              height="200px"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="cursor-pointer   d-flex justify-content-center">
                  <button
                    style={{ color: "#66666680" }}
                    onClick={onImageUpload}
                    {...dragProps}
                    type="button"
                    className="border-0 bg-transparent text-clr-gray-light"
                  >
                    <img
                      src="../../img/upload2.svg"
                      alt="img"
                      className="img-fluid transition"
                    />
                  </button>
                </div>
              )}
            </div>
            <div>
              {errors && (
                <div>
                  {errors.acceptType && (
                    <span className="fs-12 text-clr-red ms-2 fw-bold">
                      Your selected file type is not allowed
                    </span>
                  )}
                  {errors.maxFileSize && (
                    <span className="fs-12 text-clr-red ms-2 fw-bold">
                      Selected image exceed maximum image size (1MB)
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default PhotoUploader2;
