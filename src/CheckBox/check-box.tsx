import React, { ChangeEvent } from "react";
import C from "./style";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Checkbox(props: Props): JSX.Element {
  const { label, checked, onChange, ...restProps } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    onChange?.(e.target.checked);
  };

  return (
    <C.Container>
      <C.Box
        type="checkbox"
        defaultChecked={checked}
        onChange={handleChange}
        {...restProps}
      />
      <C.Label>{label}</C.Label>
    </C.Container>
  );
}
