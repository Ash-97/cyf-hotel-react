import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.contactDetails.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
