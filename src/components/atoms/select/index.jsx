import React from "react";
import SelectMaterial from "@material-ui/core/Select";

export const Select = memo(({ handleChange, value }) => (
  <SelectMaterial fullWidth={true} value={value} children={children} />
));
