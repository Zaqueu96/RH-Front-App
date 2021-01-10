import logo from "./logo.svg";
import "./App.css";
import "react-perfect-scrollbar/dist/css/styles.css";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
function App() {
  return (
    <Router>
      <Routes />
      <ToastContainer />
    </Router>
  );
}

export default App;
