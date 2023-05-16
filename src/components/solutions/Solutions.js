import React from "react";
import IndiPivot from "./solution/IndiPivot";
import IndiManager from "./solution/IndiManager";
import IndiClarity from "./solution/IndiClarity";
import DataAlerts from "./solution/DataAlerts";
import IndiSecurity from "./solution/IndiSecurity";
import "./Solutions.css";
import "../../App.css";

export default function Solution() {
  return (
    <>
      <div className="center basic-text title-section">
        <div className="section-content">
          <h1>Indi makes Druid enterprise-ready</h1>
        </div>
      </div>
      <IndiPivot />
      <IndiManager />
      <IndiClarity />
      <DataAlerts />
      <IndiSecurity />
    </>
  );
}
