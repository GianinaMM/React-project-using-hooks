import { useState } from "react";
import Feature from "./Feature/Feature";
import FeaturesForm from "./FeaturesForm";

const INITIAL_VALUES = [
  {
    name: "Toggle lights",
    action: "Turn the lights",
    state: false,
    id: 0,
  },

  {
    name: "Toggle AC",
    action: "Turn the AC",
    state: false,
    id: 1,
  },

  {
    name: "Clean",
    action: "Turn the vacuuming",
    state: false,
    id: 2,
  },

  {
    name: "Coffe time",
    action: "Make a coffe",
    state: false,
    id: 3,
  },
];

const Features = (props) => {
  // let [actions, setActions] = useState([]); //simulate no results
  let [actions, setActions] = useState(INITIAL_VALUES);

  const toggleLights = (name) => {
    setActions((prevState) => {
      const newState = prevState.map((feature) => {
        if (feature.name === "Toggle lights") {
          feature.state = !feature.state;
          feature.action = `Turn the lights ${feature.state ? "on" : "off"}`;
        }
        return feature;
      });
      return newState;
    });
  };

  const toggleAc = (name) => {
    setActions((prevState) => {
      const newState = prevState.map((feature) => {
        if (feature.name === "Toggle AC") {
          feature.state = !feature.state;
          feature.action = `Turn the AC ${feature.state ? "on" : "off"}`;
        }
        return feature;
      });
      return newState;
    });
  };

  const toggleCoffe = (name) => {
    setActions((prevState) => {
      const newState = prevState.map((feature) => {
        if (feature.name === "Coffe time") {
          feature.state = !feature.state;
          feature.action = `Make a coffe ${feature.state ? "on" : "off"}`;
        }
        return feature;
      });
      return newState;
    });
  };

  const toggleTheAction = (name) => {
    props.toggleTheAction(name);
    switch (name) {
      case "Toggle lights":
        toggleLights(name);
        break;
      case "Toggle AC":
        toggleAc(name);
        break;
      case "Coffe time":
        toggleCoffe(name);
        break;
    }
  };
  const updateFeatures = (feature) => {
    setActions((prevState) => {
      return [feature, ...prevState];
    });
  };

  const noContentFound = <p style={{ color: "red" }}>No content found!!</p>;

  let featuresContent;

  if (actions.length === 0) {
    featuresContent = noContentFound;
  } else {
    featuresContent = actions.map((action) => (
      <Feature
        key={action.id}
        name={action.name}
        action={action.action}
        toggleAction={toggleTheAction}
      ></Feature>
    ));
  }

  return (
    <div className="container">
      <div className="features">
        {featuresContent}

        {/* {actions.map((action) => {
          return (
            <Feature
              key={action.id}
              name={action.name}
              action={action.action}
              toggleAction={toggleTheAction}
            ></Feature>
          );
        })} */}
        {/* <Feature
          name={actions[0].name}
          action={`Turn ${action[0].state ? "off" : "on"} Lights`}
          toggleAction={toggleTheAction}
        ></Feature> */}

        {/* <Feature
          name={action[1].name}
          action={`Turn ${action[1].state ? "off" : "on"} Lights`}
          toggleAction={toggleTheAction}
        ></Feature>
        <Feature
          name={action[2].name}
          action={`Turn ${action[2].state ? "off" : "on"} Lights`}
          toggleAction={toggleTheAction}
        ></Feature>
        <Feature
          name={action[3].name}
          action={`Turn ${action[3].state ? "off" : "on"} Lights`}
          toggleAction={toggleTheAction}
        ></Feature> */}
      </div>
      <FeaturesForm
        updateTheFeatures={updateFeatures}
        currentItems={actions.length}
      ></FeaturesForm>
    </div>
  );
};

export default Features;
