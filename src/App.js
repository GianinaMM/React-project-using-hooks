import "./App.scss";
import Light from "./components/ui/Light";
import Features from "./components/logic/Features";
import Room from "./components/ui/Room";
import Ac from "./components/ui/Ac";
import Coffe from "./components/ui/Coffe";
import { useEffect, useState } from "react";

function App() {
  // let [lightState, setLightState] = useState(false);
  // const [acState, setAcState] = useState(false);
  // const [dirtProgress, setDirtProgress] = useState(0.5);

  const [actions, setActions] = useState({
    lightState: false,
    acState: false,
    coffeState: false,
    dirtProgress: 0,
  });

  useEffect(() => {
    const dirtInterval = setInterval(() => {
      setActions((prevState) => {
        if (prevState.dirtProgress > 1) {
          clearInterval(dirtInterval);
        }

        return {
          ...prevState,
          dirtProgress: prevState.dirtProgress + 0.1,
        };
      });
    }, 2000);
  }, []);

  const toggleLights = () => {
    setActions((prevState) => {
      const newState = {
        ...prevState,
        lightState: !prevState.lightState,
      };
      return newState;
    });
  };

  const toggleAc = () => {
    setActions((prevState) => {
      const newState = {
        ...prevState,
        acState: !prevState.acState,
      };
      return newState;
    });
  };

  const toggleCoffe = () => {
    setActions((prevState) => {
      const newState = {
        ...prevState,
        coffeState: !prevState.coffeState,
      };
      return newState;
    });
  };

  const startCleaning = () => {
    setActions((prevState) => {
      const newState = {
        ...prevState,
        dirtProgress: 0,
      };
      return newState;
    });
  };

  const toggleAction = (name) => {
    switch (name) {
      case "Toggle lights":
        toggleLights();
        break;

      case "Toggle AC":
        toggleAc();
        break;
      case "Clean":
        startCleaning();
        break;

      case "Coffe time":
        toggleCoffe();
        break;
    }
  };

  return (
    <div className="App">
      <div className="uiFeatures">
        <Light lightsOn={actions.lightState}></Light>
        <Room status={actions.dirtProgress}></Room>
        <Ac acOn={actions.acState}></Ac>
        <Coffe coffeOn={actions.coffeState}></Coffe>
      </div>

      <Features
        toggleTheAction={toggleAction}
        lightsState={actions.lightState}
        acState={actions.acState}
        coffeState={actions.coffeState}
      ></Features>
    </div>
  );
}

export default App;
