import { useState } from "react";
import "./FeaturesForm.scss";

const FeaturesForm = () => {
  let [isFormValid, setFormValid] = useState(true);
  return (
    <div>
      <form className={`form ${isFormValid ? "valid" : "invalid"}`}>
        <div className="control">
          <label className="labelStyle" htmlFor="title">
            Feature title
          </label>
          <input className="inputStyle" type="text" id="title" required></input>
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
          ></input>
        </div>

        <div className="control">
          <label className="labelStyle" htmlFor="state">
            Feature state
          </label>
          <input className="inputStyle" type="text" id="state" required></input>
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
