import "./Coffe.scss";

const Coffe = ({ coffeOn }) => {
  return <div className={`lights ${coffeOn ? "brown" : null}`}></div>;
};

export default Coffe;
