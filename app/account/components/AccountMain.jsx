"use client";

import ProfileUploader from "@/app/UI/ProfileUploader";
import { useState } from "react";

import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UpdatePassword = dynamic(() => import("./UpdatePassword"), {
  ssr: false,
});

const AccountMain = ({ token }) => {
  const [profileImage, setProfileImage] = useState([]);
  const _imageUpload = async (imageList, addUpdateIndex) => {
    setProfileImage(imageList);
  };
  const router = useRouter();
  //Sign out
  const handleSignOut = () => {
    Cookies.remove("auth_token");
    Cookies.remove("user");
    router.push("/");
  };

  //User

  const [user, setUser] = useState(null);

  // `setCookie` and `deleteCookie` code here

  useEffect(() => {
    setUser(
      Cookies.get("user") !== undefined ? JSON.parse(Cookies.get("user")) : null
    );
  }, []);
  return (
    <div className="row my-md-3">
      <div className="col-xl-8 offset-md-2">
        <div className="d-flex justify-content-center">
          <ProfileUploader
            onChange={_imageUpload}
            images={profileImage}
            hasImage={false}
          />
        </div>
        <div className="row my-4">
          <div className="col-md-6 mb-3">
            <div className="d-flex mb-3">
              <div>
                <AiOutlineUser size={18} />
              </div>
              <div className="ms-3">
                <p className="mb-1 fw-semi-bold text-dark">Full Name</p>
                <p className="mb-0 fs-14 text-muted fw-semi-bold">
                  {user?.name}
                </p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div>
                <BsTelephone size={18} />
              </div>
              <div className="ms-3">
                <p className="mb-1 fw-semi-bold text-dark">Contact Number</p>
                <p className="mb-0 fs-14 text-muted fw-semi-bold">
                  {user?.phone}
                </p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div>
                <AiOutlineMail size={18} />
              </div>
              <div className="ms-3">
                <p className="mb-1 fw-semi-bold text-dark">Email Address</p>
                <p className="mb-0 fs-14 text-muted fw-semi-bold">
                  {user?.email}
                </p>
              </div>
            </div>
            <div className="d-flex mb-4 pt-2">
              <div>
                <GrLocation size={18} />
              </div>
              <div className="ms-3">
                <p className="mb-1 fw-semi-bold text-dark">Address</p>
                <p className="mb-0 fs-14 text-muted fw-semi-bold">-------</p>
              </div>
            </div>
            <div className="me-5">
              <button
                className="primary-btn  fs-14 is-radius-5 border-0  w-100  mb-2 "
                type="button"
                style={{ backgroundColor: "rgba(236, 93, 93, 1)" }}
                onClick={handleSignOut}
              >
                <span className="pe-1">LOG OUT</span>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <UpdatePassword />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMain;
