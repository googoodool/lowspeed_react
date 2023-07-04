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
import Footers from "./components/Footers";
import Report02_H from "./reports/Report02_H";
import Report03_H from "./reports/Report03_H";
import Report04_H from "./reports/Report04_H";
import Report05_H from "./reports/Report05_H";
import Report06_H from "./reports/Report06_H";
import Report07_H from "./reports/Report07_H";
import Report08_H from "./reports/Report08_H";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footers />
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
      {
        path: "/report02_H",
        element: <Report02_H />,
      },
      {
        path: "/report03_H",
        element: <Report03_H />,
      },
      {
        path: "/report04_H",
        element: <Report04_H />,
      },
      {
        path: "/report05_H",
        element: <Report05_H />,
      },
      {
        path: "/report06_H",
        element: <Report06_H />,
      },
      {
        path: "/report07_H",
        element: <Report07_H />,
      },
      {
        path: "/report08_H",
        element: <Report08_H />,
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
