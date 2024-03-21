import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Menu from "pages/Menu";
import Reservation from "pages/Reservation";
import Homepage from "pages/Homepage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "reservation",
      element: <Reservation />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
