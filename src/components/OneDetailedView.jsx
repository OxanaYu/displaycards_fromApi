import React, { useContext, useEffect } from "react";
import { viewContext } from "../context/ContextProvider";
import { useParams } from "react-router-dom";

const OneDetailedView = () => {
  const { id } = useParams();
  const { oneTodo, getOneTodo } = useContext(viewContext);
  console.log(oneTodo);

  useEffect(() => {
    getOneTodo(id);
  }, []);

  console.log(oneTodo);
  return (
    <div className="container_onecard">
      <p>Text: {oneTodo.body}</p>
      <p>{oneTodo.id}</p>
      <p>{oneTodo.name}</p>
      <p className="p_email"> email: {oneTodo.email}</p>
    </div>
  );
};

export default OneDetailedView;
