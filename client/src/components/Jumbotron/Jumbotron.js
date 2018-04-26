import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundImage: "url(assets/images/nytbanner.jpg)", backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
