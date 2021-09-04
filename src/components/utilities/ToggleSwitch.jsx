import React, { useState } from "react";

const ToggleSwitch = (props) => {
  const [checked, setChecked] = useState(props.checked);
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        name="toggle"
      />
      <span className="slider" />
    </label>
  );
};

export default ToggleSwitch;
