import "./globals.css";
import { Ubuntu } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modern-drawer/dist/index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Black Admin",
  description: "Black Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
      </head>
      <body className={ubuntu.className}>
        <ToastContainer position="top-center" limit={1} />
        {children}
      </body>
    </html>
  );
}
