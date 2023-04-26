import { useRef, useState } from "react";
import "./FeaturesForm.scss";

const FeaturesForm = (props) => {
  let [isFormValid, setFormValid] = useState(true);

  const titleInputRef = useRef();
  const actionInputRef = useRef();
  const stateInputRef = useRef();
  const descriptionRef = useRef();

  const resetFields = () => {
    titleInputRef.current.value = "";
    actionInputRef.current.value = "";
    stateInputRef.current.value = "";
    descriptionRef.current.value = "";
  };

  const checkValid = () => {
    if (
      titleInputRef.current.value === "" ||
      actionInputRef.current.value === "" ||
      stateInputRef.current.value === ""
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const titleValue = titleInputRef.current.value;
    const actionValue = actionInputRef.current.value;
    const stateValue = stateInputRef.current.value;
    const descriptionValue = descriptionRef.current.value;

    const newFeature = {
      name: titleValue,
      action: actionValue,
      state: stateValue,
      id: props.currentItems,
    };

    props.updateTheFeatures(newFeature);
    resetFields();
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        onKeyDown={checkValid}
        className={`form ${isFormValid ? "valid" : "invalid"}`}
      >
        <div className="control">
          <label className="labelStyle" htmlFor="title">
            Feature title
          </label>
          <input
            className="inputStyle"
            type="text"
            id="title"
            required
            ref={titleInputRef}
          ></input>
        </div>

        <div className="control">
          <label className="labelStyle" htmlFor="action">
            Feature action
          </label>
          <input
            className="inputStyle"
            type="text"
            id="action"
            required
            ref={actionInputRef}
          ></input>
        </div>

        <div className="control">
          <label className="labelStyle" htmlFor="state">
            Feature state
          </label>
          <input
            className="inputStyle"
            type="text"
            id="state"
            required
            ref={stateInputRef}
          ></input>
        </div>

        <div className="control">
          <label className="labelStyle" htmlFor="action">
            Description
          </label>
          <textarea
            className="inputStyle"
            id="description"
            required
            rows="5"
            ref={descriptionRef}
          ></textarea>
        </div>

        <div className="actions">
          <button>Add feature</button>
        </div>
      </form>
    </div>
  );
};

export default FeaturesForm;
