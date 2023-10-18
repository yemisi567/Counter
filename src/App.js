import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import ErrorBoundary from "./Error";
import NotFound from "./NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/error" element={<ErrorBoundary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
