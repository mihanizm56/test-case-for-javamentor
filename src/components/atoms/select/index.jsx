import React, { memo } from "react";
import SelectMaterial from "@material-ui/core/Select";

export const Select = memo(({ handleChange, value, children }) => (
  <SelectMaterial fullWidth={true} value={value} children={children} />
));
