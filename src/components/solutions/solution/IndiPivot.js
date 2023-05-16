import React from "react";
import "../../../App.css";

export default function IndiPivot() {
  return (
    <div className="standard continuous-section white  basic-text">
      <div className="section-content">
        <h1>Visualize data with Indi Pivot</h1>
        <p>
          Indi Pivot lets users answer their own questions. Explore, drill
          down, and share insights through a simple point-and-click interface.
          Indi Pivot is ideal for ad-hoc analytics.
        </p>
        <div className="two-column medium wrap-reverse">
          <div className="image-only">
            <img src="https://www.datocms-assets.com/11147/1560871552-screenshot-dashboard.png" />
          </div>
          <div className="test">
            <ul>
              <li>
                Every visualization is fully interactive and supports drill
                down.
              </li>
              <li>Updates occur in real-time with new incoming data.</li>
              <li>Alert on custom-defined changes in data.</li>
              <li>Create and share drag-and-drop dashboards.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
