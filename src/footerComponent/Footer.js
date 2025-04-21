import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* column1 */}
          <div className="col">
            <h4>HOLIDAY PLANNER</h4>
            <br />
            <ul>
              <li>+447-82990-2176</li>
              <li>London, England</li>
              <li>111 Street, Central London</li>
            </ul>
          </div>
          {/* column2 */}
          <div>
            <h4>STUFF</h4>
            <br />
            <ul>
              <li>Dami names</li>
              <li>Wonder man</li>
              <li>songs forms</li>
            </ul>
          </div>
          {/* column3 */}
          <div>
            <h4>HELP</h4>
            <br />
            <ul>
              <li>FAQ</li>
              <li>Help center</li>
              <li>Headquater</li>
            </ul>
          </div>
        </div>
        <div style={{ backgroundColor: "black", height: "1.2px", width: "100%" }} />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Holiday Planner Inc. | All rights reserved | Terms of service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;