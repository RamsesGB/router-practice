import React from "react";
import { useParams } from "react-router-dom";

function Topic() {
  let { userId } = useParams();
  console.log(useParams())

  return (
    <h3>Rendered by child Topic component -> Requested topic ID: {userId}</h3>
  );
}

export default Topic;
