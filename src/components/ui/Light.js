import classes from "./Light.module.scss";

const Light = ({ lightsOn }) => {
  return (
    <div
      className={`${classes.lights} ${lightsOn ? classes.yellow : null}`}
    ></div>
  );
};

export default Light;
