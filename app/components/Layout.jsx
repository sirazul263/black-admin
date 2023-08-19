"use client";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar page={page} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
