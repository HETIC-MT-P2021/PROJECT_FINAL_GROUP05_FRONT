import React, {useState} from "react";
import Switch from "react-switch";

const SwitchState = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked: boolean | ((prevState: boolean) => boolean)) => {
    setChecked(nextChecked);
  };

  return (
    <div>
      <label>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
          onColor="#00a86b"
          onHandleColor="#1b4d3e"
          handleDiameter={25}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          id="material-switch"
        />
      </label>
    </div>
  );
}

export default SwitchState