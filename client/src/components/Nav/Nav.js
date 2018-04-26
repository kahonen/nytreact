import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{textAlign: "center"}}>
    <a className="navbar-brand" href="/">
      New York Times Article Scrubber
    </a>
    <a className="navbar-brand" href="/saved" style={{float: "right"}}>
      Saved Articles
    </a>
  </nav>
);

export default Nav;
