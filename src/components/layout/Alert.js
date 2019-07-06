import React, {useContext} from "react";
import AlertContext from '../../context/alert/alerContext'
const Alert = () => {
  const {alert} = useContext(AlertContext)
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
