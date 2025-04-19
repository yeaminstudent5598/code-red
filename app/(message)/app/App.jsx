import React, { ReactNode } from "react";
import "./app.css";

const App = ({ children }) => {
  return <section className="app">{children}</section>;
};

export default App;
