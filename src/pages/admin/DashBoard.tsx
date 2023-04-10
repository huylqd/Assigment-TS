import React from "react";

const DashBoard = () => {
  return (
    <div className="container my-3">
      <h3 className="text-info text-uppercase text-center py-3">
        <i className="bi bi-gear mr-2"></i>Quản trị website
      </h3>
      <div className="mx-auto img-dashboard">
        <img
          src="https://josesilva.es/wp-content/uploads/2021/02/RESPONSABILIDAD-DEL-ADMINISTRADOR-DE-FINCAS-EN-EL-SIGLO-XXI.jpg"
          alt="Dashboard's image"
        />
      </div>
    </div>
  );
};

export default DashBoard;
