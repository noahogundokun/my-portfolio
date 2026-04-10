import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </div>
  );
}
export default Footer;
