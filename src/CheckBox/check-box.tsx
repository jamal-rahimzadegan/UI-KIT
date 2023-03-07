import React, { ChangeEvent } from "react";
import Container from "./style";

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
    <Container>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={handleChange}
        {...restProps}
      />
      <span>{label}</span>
    </Container>
  );
}
