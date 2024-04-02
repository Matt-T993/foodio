import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Menu from "pages/Menu";
import Reservation from "pages/Reservation";
import Homepage from "pages/Homepage";
import Aboutus from "pages/Aboutus";
import Contact from "pages/Contact";
import Checkout from "pages/Checkout";
import Orderonline from "pages/Orderonline";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/reservation",
      element: <Reservation />,
    },
    {
      path: "/aboutus",
      element: <Aboutus />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/orderonline",
      element: <Orderonline />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
