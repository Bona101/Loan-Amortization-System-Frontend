import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoanRequest from "./pages/app/page";

import "./App.css";

function App() {
  return (
      <div className="text-black bg-white flex justify-center">
        <LoanRequest />
      </div>
  );
}

export default App;
