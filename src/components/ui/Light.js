import "./Light.scss";

const Light = ({ lightsOn }) => {
  return <div className={`lights ${lightsOn ? "yellow" : null}`}></div>;
};

export default Light;
