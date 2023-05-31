import classes from "./Ac.module.scss";

const Ac = ({ acOn }) => {
  return (
    <div className={`${classes.lights} ${acOn ? classes.blue : null}`}></div>
  );
};
export default Ac;
