import React from "react";
import ImageUploading from "react-images-uploading";
const ProfileUploader = ({ images, onChange, hasImage }) => {
  return (
    <div>
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={1}
        dataURLKey="data_url"
        acceptType={["jpg", "png", "jpeg"]}
        maxFileSize={1000000}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          <div className="profile">
            <div className="upload__image-wrapper position-relative  ms-2">
              {imageList.length === 0 && (
                <div
                  style={isDragging ? { color: "red" } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  {hasImage ? (
                    <button
                      type="button"
                      className=" border-0 is-radius-5 fs-14 primary-btn"
                    >
                      Update Profile
                    </button>
                  ) : (
                    <img
                      src="../../img/profile.svg"
                      alt="img"
                      className="img-fluid transition cursor-pointer"
                    />
                  )}
                </div>
              )}
              {imageList.map((image, index) => (
                <div key={index} className="image_item">
                  <img src={image.data_url} className="img-preview" alt="" />
                  <span
                    onClick={() => onImageRemove(index)}
                    className="remove_upload position-absolute top-0 right-0 translate-middle"
                  >
                    <span className="position-absolute top-50 start-50 translate-middle cursor-pointer">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 1L1 13"
                          stroke="#4797BE"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1L13 13"
                          stroke="#4797BE"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              ))}
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

export default ProfileUploader;
