import React from "react";

const Spinner:React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-info" role="status">
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
