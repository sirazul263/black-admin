"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCardList, BsFillImageFill, BsInfoCircle } from "react-icons/bs";
import { MdOutlineLocalOffer, MdOutlineManageAccounts } from "react-icons/md";

const Sidebar = ({ page }) => {
  const router = useRouter();
  //Sign out
  const handleSignOut = () => {
    signOut();
    router.push("/login");
  };

  //User

  const [user, setUser] = useState();

  // `setCookie` and `deleteCookie` code here

  useEffect(() => {
    setUser(
      Cookies.get("user") !== undefined ? JSON.parse(Cookies.get("user")) : null
    );
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <section>
      <div>
        <button
          onClick={toggleDrawer}
          type="button"
          className="border-0 bg-transparent "
        >
          <img
            src="../img/sidebar.svg"
            alt="logo"
            className="fluid mt-2"
            style={{ maxHeight: 30 }}
          />
        </button>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        overlayOpacity={0}
      >
        <div className="mt-2 mb-3 pe-0">
          <div className="bg-clr-ash d-flex p-3 is-radius-8 align-items-center">
            <div>
              <img src="../img/avatar.svg" alt="logo" className="fluid" />
            </div>
            <div className="ms-3">
              <p className="fs-14 mb-0  fw-bold">
                {user?.user_name || "Hudson Alvarez"}
              </p>
              <p className="fs-12 mb-0 text-clr-light">
                {user ? capitalizeFirstLetter(user.role) : "Admin"}
              </p>
            </div>
          </div>

          <p className="fw-bold text-clr-gray fs-14 my-4 ps-4">GENERAL</p>
          <div>
            <div
              className={
                page === "dashboard"
                  ? "d-flex cursor-pointer fw-bold py-3 px-4 menu-active "
                  : "d-flex cursor-pointer py-3 px-4 "
              }
              onClick={() => router.push("/dashboard")}
            >
              <div>
                <LuLayoutDashboard size={20} />
              </div>
              <div className="ms-3 pt-6">
                <p className="mb-0 ">Dashboard</p>
              </div>
            </div>
            <div
              className={
                page === "orders"
                  ? "d-flex cursor-pointer fw-bold py-3 px-4 menu-active "
                  : "d-flex cursor-pointer py-3 px-4 "
              }
              onClick={() => router.push("/orders")}
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.32"
                    d="M4.32992 6C3.84871 6 3.43524 6.34385 3.34854 6.8172C1.98294 14.2724 1.75 18 1.75 18H22.25C22.25 18 22.017 14.2724 20.6514 6.8172C20.5647 6.34385 20.1513 6 19.67 6H4.32992Z"
                    fill="#637381"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.25 18H1.75C1.75 18 1.75 18.695 1.80122 19.6754C1.87282 21.0459 2.95622 22.0861 4.32766 22.138C5.855 22.1959 8.2782 22.25 12 22.25C15.7218 22.25 18.145 22.1959 19.6723 22.138C21.0438 22.0861 22.1272 21.0459 22.1988 19.6754C22.25 18.695 22.25 18 22.25 18Z"
                    fill="#637381"
                  />
                  <path
                    d="M12 1C9.2386 1 7 3.23857 7 6H9C9 4.34314 10.3432 3 12 3C13.6568 3 15 4.34314 15 6H17C17 3.23857 14.7614 1 12 1Z"
                    fill="#637381"
                  />
                </svg>
              </div>
              <div className="ms-3 pt-6">
                <p className="mb-0 ">Orders</p>
              </div>
            </div>
            <div
              className={
                page === "products"
                  ? "d-flex cursor-pointer fw-bold py-3 px-4 menu-active "
                  : "d-flex cursor-pointer py-3 px-4 "
              }
              onClick={() => router.push("/products")}
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_126_3737)">
                    <path
                      d="M15.75 0.0234375L24 4.14844V13.3477L22.5 12.5977V5.82422L16.5 8.82422V11.8477L15 12.5977V8.82422L9 5.82422V8.48438L7.5 7.73438V4.14844L15.75 0.0234375ZM15.75 7.52344L17.8242 6.48047L12.3984 3.375L9.92578 4.61719L15.75 7.52344ZM19.4414 5.68359L21.5742 4.61719L15.75 1.69922L14.0039 2.57812L19.4414 5.68359ZM13.5 13.3477L12 14.0977V14.0859L7.5 16.3359V21.668L12 19.4062V21.0938L6.75 23.7188L0 20.332V12.4102L6.75 9.03516L13.5 12.4102V13.3477ZM6 21.668V16.3359L1.5 14.0859V19.4062L6 21.668ZM6.75 15.0352L11.0742 12.8789L6.75 10.7109L2.42578 12.8789L6.75 15.0352ZM13.5 15.0234L18.75 12.3984L24 15.0234V21.1992L18.75 23.8242L13.5 21.1992V15.0234ZM18 21.7734V18.1992L15 16.6992V20.2734L18 21.7734ZM22.5 20.2734V16.6992L19.5 18.1992V21.7734L22.5 20.2734ZM18.75 16.8984L21.5742 15.4805L18.75 14.0742L15.9258 15.4805L18.75 16.8984Z"
                      fill="#637381"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_126_3737">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="ms-3 pt-6">
                <p className="mb-0 ">Products</p>
              </div>
            </div>
            <div
              className={
                page === "categories"
                  ? "d-flex cursor-pointer fw-bold py-3 px-4 menu-active "
                  : "d-flex cursor-pointer py-3 px-4 "
              }
              onClick={() => router.push("/categories")}
            >
              <div>
                <BsCardList size={20} />
              </div>
              <div className="ms-3 pt-6">
                <p className="mb-0 ">Categories</p>
              </div>
            </div>
            <div
              className={
                page === "images"
                  ? "d-flex cursor-pointer fw-bold py-3 px-4 menu-active "
                  : "d-flex cursor-pointer py-3 px-4 "
              }
              onClick={() => router.push("/images")}
            >
              <div>
                <BsFillImageFill size={20} />
              </div>
              <div className="ms-3 pt-6">
                <p className="mb-0 ">Images</p>
              </div>
            </div>
            <div
              className={
                page === "offers"
                  ? "d-flex cursor-pointer py-3 px-4 menu-active "
                  : "d-flex cursor-pointer py-3 px-4 "
              }
              onClick={() => router.push("/offers")}
            >
              <div>
                <MdOutlineLocalOffer size={22} />
              </div>
              <div className="ms-3 pt-6">
                <p className="mb-0 ">Offers</p>
              </div>
            </div>
            <div
              className={
                page === "others"
                  ? "d-flex cursor-pointer py-3 px-4 menu-active "
                  : "d-flex cursor-pointer py-3 px-4 "
              }
              onClick={() => router.push("/others")}
            >
              <div>
                <BsInfoCircle size={20} />
              </div>
              <div className="ms-3 pt-6">
                <p className="mb-0 ">Others Info</p>
              </div>
            </div>

            <div
              className={
                page === "account"
                  ? "d-flex cursor-pointer py-3 px-4 menu-active "
                  : "d-flex cursor-pointer py-3 px-4 "
              }
              onClick={() => router.push("/account")}
            >
              <div>
                <MdOutlineManageAccounts size={22} />
              </div>
              <div className="ms-3 pt-6">
                <p className="mb-0 ">Account</p>
              </div>
            </div>

            <div
              className="d-flex cursor-pointer py-3 px-4 "
              onClick={handleSignOut}
            >
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.9624 28.1923H10.2938C9.67332 28.1431 9.095 27.931 8.51141 27.7359C6.80437 27.1652 5.09734 26.5956 3.39031 26.0273C2.85503 25.857 2.39533 25.5064 2.08953 25.0353C1.86746 24.6978 1.83816 24.3245 1.83758 23.9525C1.83133 17.2681 1.82898 10.5835 1.83055 3.89875C1.83055 3.00051 2.27352 2.39875 3.0323 1.99094C3.30418 1.84504 3.61297 1.86204 3.91121 1.83625C4.06512 1.82542 4.2196 1.82542 4.37352 1.83625C4.79752 1.88982 5.21468 1.98802 5.61805 2.12922C7.51023 2.76321 9.40301 3.39465 11.2964 4.02356C12.1442 4.30657 12.6745 4.8843 12.8966 5.74856C12.925 5.88332 12.9364 6.02111 12.9305 6.15871C12.9329 12.2915 12.9329 18.4243 12.9305 24.5572C12.9304 24.6599 12.9249 24.7626 12.9141 24.8648C12.9382 25.2749 12.9341 25.6851 12.9259 26.0952C12.9077 26.9712 12.4682 27.5964 11.7329 28.0288C11.4979 28.1724 11.2167 28.1249 10.9624 28.1923Z"
                    fill="#637381"
                  />
                  <path
                    d="M28.1925 13.0715C28.0753 13.4019 27.8409 13.6457 27.5949 13.8877C26.2468 15.2295 24.9013 16.5744 23.5583 17.9224C23.2683 18.2154 22.9325 18.3742 22.5177 18.2986C21.9716 18.199 21.6124 17.756 21.6107 17.1853C21.6066 16.1892 21.6031 15.1966 21.6142 14.2029C21.6142 13.9931 21.5661 13.9281 21.3482 13.9299C20.0005 13.9398 18.6575 13.9369 17.3122 13.9334C16.7087 13.9334 16.2722 13.6029 16.1538 13.0767C16.1156 12.9155 16.1147 12.7477 16.1512 12.5861C16.1877 12.4246 16.2606 12.2734 16.3644 12.1443C16.4682 12.0151 16.6 11.9114 16.75 11.841C16.8999 11.7705 17.064 11.7353 17.2296 11.7379C18.5925 11.7312 19.9552 11.7312 21.3177 11.7379C21.545 11.7379 21.6195 11.6898 21.6154 11.4478C21.6001 10.4799 21.6154 9.51131 21.6077 8.54275C21.6077 8.02889 21.8064 7.63455 22.2851 7.43592C22.7638 7.23729 23.1857 7.36619 23.549 7.72889C24.9712 9.15506 26.3956 10.5789 27.8222 12.0004C27.998 12.1761 28.0982 12.3853 28.1925 12.6051V13.0715Z"
                    fill="#CDD2D6"
                  />
                  <path
                    d="M4.38477 1.86699C5.04453 1.86699 5.7043 1.85938 6.36406 1.85938C9.58672 1.85938 12.8094 1.85938 16.032 1.85938C17.9656 1.85938 19.3977 3.27559 19.4088 5.20801C19.4164 6.5709 19.4088 7.9332 19.4152 9.29609C19.4152 9.49004 19.3596 9.53867 19.1697 9.53984C18.3904 9.54453 17.6094 9.49062 16.8318 9.56855C15.282 9.72617 14.0094 11.0738 13.9391 12.6254C13.8641 14.2912 14.9727 15.7467 16.5518 16.0543C17.1377 16.1686 17.7307 16.1023 18.3207 16.117C18.6137 16.124 18.9037 16.1264 19.1949 16.117C19.3637 16.1105 19.4158 16.1668 19.4135 16.3361C19.4047 16.9807 19.4105 17.6217 19.41 18.2645C19.41 19.3613 19.4152 20.4582 19.41 21.5557C19.3947 23.484 17.9645 24.8979 16.0291 24.902C14.958 24.902 13.8869 24.9049 12.8158 24.9107C12.8158 18.6842 12.8158 12.4574 12.8158 6.23047C12.8158 5.29297 12.2645 4.48672 11.3773 4.18613C9.14844 3.4291 6.91426 2.69492 4.67832 1.95078C4.58164 1.91914 4.48262 1.89512 4.38477 1.86699Z"
                    fill="#CDD2D6"
                  />
                </svg>
              </div>
              <div className="ms-3 pt-6">
                <p className="mb-0 ">Sign Out</p>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </section>
  );
};
export default Sidebar;
