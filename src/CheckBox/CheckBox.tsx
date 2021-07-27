import React from 'react';
import { CheckBoxContainer } from './CheckBoxStyle';

type CheckBoxType = {
  label: string;
  isChecked: boolean;
  onChangeFn: Function;
  key: string | number;
};

export default function CheckBox(props: CheckBoxType): JSX.Element {
  const { label, isChecked, onChangeFn, key } = props;

  return (
    <CheckBoxContainer key={key} className="checkbox my-2">
      <label className="small d-flex align-items-center">
        <input className="mx-1 my-0" type="checkbox" checked={isChecked} onChange={() => onChangeFn()} />
        {label}
      </label>
    </CheckBoxContainer>
  );
}
