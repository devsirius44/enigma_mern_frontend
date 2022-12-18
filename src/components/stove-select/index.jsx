import react from "react";
const StoveSelect = (props) => {
  return (
    <div className={props.style}>
      <label htmlFor={props.id} className={"form-label"}>
        {props.label}
      </label>
      <select
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className="form-control"
      >
        {props.options &&
          props.options.map((value, index) => (
            <option key={"key-" + index} value={value}>
              {value}
            </option>
          ))}
      </select>
    </div>
  );
};
export default StoveSelect;
