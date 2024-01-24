import React from "react";
import { Link } from "react-router-dom";

const DetailedView = ({ thumbnailUrl, id, title }) => {
  return (
    <div className="container">
      <img src={thumbnailUrl} />
      <h3> {id}</h3>
      <h3> {title}</h3>
      <Link to={`/details/${id}`}>
        <button className="glow-on-hover">Go to details</button>
      </Link>
    </div>
  );
};

export default DetailedView;
