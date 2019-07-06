import React from "react";

const Alert = ({ alert }) => {
  return (
    alert != null && (
      <div className="section">
        <div className={`notification is-${alert.type}`}>
          <button className="delete" />
          {alert.msg}
        </div>
      </div>
    )
  );
};

export default Alert;
