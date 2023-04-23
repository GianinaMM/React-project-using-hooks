import "./Ac.scss";

const Ac = ({ acOn }) => {
  return <div className={`lights ${acOn ? "blue" : null}`}></div>;
};
export default Ac;
