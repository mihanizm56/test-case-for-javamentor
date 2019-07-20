import React, { memo } from "react";
import SelectMaterial,{SelectProps as SelectPropsMaterial} from "@material-ui/core/Select";
import icon from "../../../assets/icons/scroll-icon.svg";



interface SelectProps extends SelectPropsMaterial {
  handleChange:(params: any)=>void, 
  selectedValue:string, 
  children?:Array<React.ReactNode>
}

export const Select = memo<SelectProps>(
  ({ handleChange, selectedValue='', children }) =>
    (
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
