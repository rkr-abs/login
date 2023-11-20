import React, { useEffect, useState } from "react";

const DashBoard = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setState(json));
  });
  return <div>DashBoard</div>;
};

export default DashBoard;
