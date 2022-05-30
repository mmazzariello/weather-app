import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Not Found
      <div>
        <Link to="/main">Go to Main</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
