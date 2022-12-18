import react from "react";
const StoveInput = (props) => {
  return (
    <div className={props.style}>
      <label htmlFor={props.id} className={"form-label"}>
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        value={props.type === "text" ? props.value || "" : props.value || 0}
        className="form-control"
      ></input>
    </div>
  );
};
export default StoveInput;
