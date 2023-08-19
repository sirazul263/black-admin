"use client";
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header className="border-bottom bg-clr-primary">
      <div className="container">
        <Navbar
          bg="none"
          expand="lg"
          className="header d-flex justify-content-between"
        >
          <div
            className="animated fadeInLeft"
            data-wow-duration="1.5s"
            data-wow-delay="300ms"
          >
            <Link
              href="/"
              className="navbar-brand fadeInLeft"
              data-wow-duration="1.5s"
              data-wow-delay="300ms"
            >
              <img
                src="../img/logo.svg"
                alt="logo"
                className="fluid"
                style={{ maxHeight: 50 }}
              />
            </Link>
          </div>

          <div>
            <Link href="/">
              <div className="flag-container bg-clr-ash">
                <img src="../img/avatar.svg" alt="logo" className="fluid" />
              </div>
            </Link>
          </div>
        </Navbar>
      </div>
    </header>
  );
};
export default Header;
