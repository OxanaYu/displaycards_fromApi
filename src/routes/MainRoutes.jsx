import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import DetailedView from "../components/DetailedView";
import ListofItems from "../components/ListofItems";
import OneDetailedView from "../components/OneDetailedView";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<OneDetailedView />} />
      <Route path="/list" element={<ListofItems />} />
    </Routes>
  );
};

export default MainRoutes;
