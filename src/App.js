import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Matching from "./pages/Matching";
import HiSpeed from "./pages/HiSpeed";
import LowSpeed from "./pages/LowSpeed";

// import Footer from "./pages/Footer";
import Dimension from "./pages/Dimension";
import LspViewmore from "./pages/LspViewmore";

import HispViewmore from "./pages/HispViewmore";
import ReportHSP from "./pages/ReportHSP";
import ReportLSP from "./pages/ReportLSP";
import Report01 from "./reports/Report01";
import "react-photo-view/dist/react-photo-view.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Matching />,
      },
      {
        path: "/lowSpeed",
        element: <LowSpeed />,
      },
      {
        path: "/hispeed",
        element: <HiSpeed />,
      },
      {
        path: "/dimension",
        element: <Dimension />,
      },

      {
        path: "/report_hsp",
        element: <ReportHSP />,
      },
      {
        path: "/report_lsp",
        element: <ReportLSP />,
      },
      {
        path: "/hsDetail",
        element: <HispViewmore />,
      },
      {
        path: "/lsDetail",
        element: <LspViewmore />,
      },
      {
        path: "/report01",
        element: <Report01 />,
      },
    ],
  },
]);

function App() {
  return (
    // <React.Fragment>
    //   <Navbar />
    // </React.Fragment>
    <RouterProvider router={router} />
  );
}

export default App;
