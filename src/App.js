import React, { useState } from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import Textform from "./component/Textform";
import About from "./component/About";
import Alert from "./component/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msz: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has Been enabled", "success");
      document.title = "Textutiles-dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has Been enabled ", "success");
      document.title = "Textutiles-Light Mode";
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="TExtutiles"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <Textform
                showAlert={showAlert}
                heading="Do Operation with our text"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
