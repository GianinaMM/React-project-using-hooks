import "./App.scss";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Welcome from "./components/logic/Welcome";
import SmartHome from "./components/logic/SmartHome";
import FeaturesForm from "./components/logic/FeaturesForm";
import { useState } from "react";

function App() {
  const [feature, setFeature] = useState({
    name: "Toggle warm lights",
    action: "Turn the warm lights",
    state: false,
    id: 500,
  });
  const updateFeatures = (feature) => {
    setFeature((prevState) => {
      // return [feature, ...prevState];
      return feature;
    });
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/welcome">Welcome</Link>
            </li>
            <li>
              <NavLink to="/smart-home">Use Smart Home App</NavLink>
            </li>
            <li>
              <NavLink to="/features-form">
                Create a new smart home feature
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/welcome" element={<Welcome></Welcome>}></Route>
        <Route
          path="/smart-home"
          element={<SmartHome newFeature={feature}></SmartHome>}
        ></Route>
        <Route
          path="/features-form"
          element={
            <FeaturesForm updateTheFeatures={updateFeatures}></FeaturesForm>
          }
        ></Route>
      </Routes>

      <div className>

      </div>
    </div>
  );
}

export default App;
