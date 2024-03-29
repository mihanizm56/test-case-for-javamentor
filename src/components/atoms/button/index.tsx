import ButtonMaterial, {
  ButtonProps as ButtonPropsMaterial
} from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import React, { memo } from "react";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    color: "#fff",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  }
})(ButtonMaterial);

interface ButtonProps extends ButtonPropsMaterial {
  handleClick: () => void;
}

export const Button = memo<ButtonProps>(({ handleClick }) => (
  <BootstrapButton className="bootstrap-button" onClick={handleClick}>
    Загрузить
  </BootstrapButton>
));
