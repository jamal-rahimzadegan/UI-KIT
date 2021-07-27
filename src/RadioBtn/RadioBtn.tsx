import React from 'react';
import { RadioContainer } from './RadioBtnStyle';

type RadioBtnType = {
  label: string;
  isChecked: boolean;
  onChangeFn: Function;
  key: string | number;
  id?: string;
};

export default function RadioBtnTsx(props: RadioBtnType): JSX.Element {
  const { label, isChecked, onChangeFn, key, id } = props;

  return (
    <RadioContainer key={key} className="checkbox my-2">
      <input id={id} className="bg-info mx-1" type="radio" checked={isChecked} onChange={() => onChangeFn()} />
      <label htmlFor={id} className="small d-flex align-items-center">
        {label}
      </label>
    </RadioContainer>
  );
}
