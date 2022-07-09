import React from "react";
import { NavLink } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

const NotMatch = ({ theme }) => {
  return (
    <div>
      <NavLink to="/" className={`link-${theme}-theme`}>
        <button className={`back-${theme}-theme`}>
          <TbError404 />
          Home
        </button>
      </NavLink>
    </div>
  );
};

export default NotMatch;
