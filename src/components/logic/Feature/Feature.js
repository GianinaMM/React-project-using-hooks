import "./Feature.scss";

const Feature = (props) => {
  const toggleTheAction = () => {
    props.toggleAction(props.name);
  };
  return (
    <div className="feature">
      <h3>{props.name}</h3>
      <button onClick={toggleTheAction} className="button">
        {props.action}
      </button>
    </div>
  );
};

export default Feature;
