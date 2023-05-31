import { useRef, useState } from "react";
import "./FeaturesForm.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const FeaturesForm = (props) => {
  let [isFormValid, setFormValid] = useState(true);

  const navigate = useNavigate();

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
    navigate("/smart-home");
  };

  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 500,
    },
  });

  let longText = `
  But I must explain to you how all this mistaken idea of 
  denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of
   the great explorer of the truth, the master-builder of human happiness.`;

  return (
    <>
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
          <CustomWidthTooltip title={longText}>
            <Button onClick={submitHandler} variant="text">
              Add feature
            </Button>
          </CustomWidthTooltip>
        </div>
      </form>
    </>
  );
};

export default FeaturesForm;
