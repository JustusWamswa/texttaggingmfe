import React from "react";
import ReactDOM from "react-dom/client";
import NLPAnnotate from "./components/NLPAnnotate";

const App = () => (
  <div>
    <NLPAnnotate />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<App />);
