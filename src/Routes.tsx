import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Menu from "pages/Menu";
import Reservation from "pages/Reservation";
import Homepage from "pages/Homepage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "*", element: <NotFound /> },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "reservation",
      element: <Reservation />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
