import React, { memo } from "react";
import ButtonMaterial from "@material-ui/core/Button";

export const Button = memo(({ handleClick }) => (
  <ButtonMaterial onClick={handleClick} to="/profile">
    Выбрать
  </ButtonMaterial>
));
