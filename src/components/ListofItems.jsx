import React, { useContext, useEffect } from "react";
import { viewContext } from "../context/ContextProvider";
import DetailedView from "./DetailedView";
import { useNavigate } from "react-router-dom";

const ListofItems = () => {
  const navigate = useNavigate();
  const { oneTodo, todos, getPosts } = useContext(viewContext);
  useEffect(() => {
    getPosts();
  }, []);
  console.log(todos);

  return (
    <div className="list">
      {todos.slice(0, 42).map((elem) => (
        <DetailedView {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ListofItems;
