import React, { ReactNode } from "react";
import "./app.css";

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return <section className="app">{children}</section>;
};

export default App;
