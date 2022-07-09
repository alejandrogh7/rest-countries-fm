import React from "react";
import { NavLink } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

const NotMatch = ({ theme }) => {
  return (
    <div>
      <div className="error" height="500px">
        404
      </div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default NotMatch;
