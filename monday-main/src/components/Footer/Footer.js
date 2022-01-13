import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer bg-info">
      <div className="container">
        <div className="row">
         
          
            <h6 className = "font-weight-normal">
            <ui className="list-unstyled text-center">
              <li className="h4">Contact</li>
              <li>Address: Floragatan 4B / Villa Sandrew </li>
              <li>SE-114 31 Stockholm, Sweden</li>
              <li>Telephone: +46 (0)8 661 90 94</li>
              <li>hello@mondayrelations.se</li>
            </ui>
            </h6>
          </div>
        
        <hr />
        <div className="row">
          <p className="col-sm text-center font-weight-light ">
            &copy; 2021| All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;