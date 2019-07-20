import React, { memo } from "react";
import SelectMaterial from "@material-ui/core/Select";
import icon from "../../../assets/icons/scroll-icon.svg";

export const Select = memo(
  ({ handleChange, selectedValue, children }) =>
    console.log("Select icon", icon) || (
      <SelectMaterial
        fullWidth
        value={selectedValue}
        children={children}
        onChange={handleChange}
        style={{
          height: "40px",
          padding: "0 5px 0 10px",
          border: "1px solid blue",
          borderRadius: "10px"
        }}
        disableUnderline
        variant="outlined"
      />
    )
);

Select.defaultProps = { selectedValue: "" };
