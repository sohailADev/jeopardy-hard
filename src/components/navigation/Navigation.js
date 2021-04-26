import React from "react";
import { Link } from "react-router-dom";
const  Navigation = (props) => {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/clock">Clock</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/jeopardy">Jeopardy</Link>
        </li>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
        <li>
          <Link to ="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">signup</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
