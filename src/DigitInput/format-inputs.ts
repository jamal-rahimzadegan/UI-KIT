import { InputHTMLAttributes, useRef } from 'react';
import { generateArr } from 'utils';

export interface InputAttributes
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onClick' | 'onFocus' | 'onKeyDown' | 'onChange'> {
  ref: (input: HTMLInputElement | null) => void;
}

interface Options {
  acceptedCharacters: RegExp;
  length: number;
  value: string;
  onChange: (value: string) => void;
}

export default function formatInputs(Options: Options) {
  const { acceptedCharacters, length, value, onChange } = Options;

  const padValue = handleValuePad(value, length);
  const inpRefValue = generateArr(length);

  const inputs = useRef<(HTMLInputElement | undefined)[]>(inpRefValue);
  const inputRef = useRef<InputAttributes['ref'][]>(inpRefValue);
  const props: InputAttributes[] = [];

  const handleTargetInp = (target) => requestAnimationFrame(() => target?.setSelectionRange(0, 1));

  const handleKeyPress = (e, i, digitValue) => {
    const previousInput = inputs.current[i - 1];
    const nextInput = inputs.current[i + 1];

    const handleBackspace = () => {
      e.preventDefault();
      if (!digitValue) {
        if (i > 0) {
          // this digit is empty, so backspace removes the previous digit and focuses it
          onChange(padValue.substring(0, i - 1) + ' ' + padValue.substring(i));
          if (previousInput) previousInput.focus();
        }
      } else {
        // this digit is not empty, so backspace removes that digit
        onChange(padValue.substring(0, i) + ' ' + padValue.substring(i + 1));
      }
    };

    const handleArrowLeft = () => {
      e.preventDefault();
      if (i > 0) {
        if (previousInput) {
          previousInput.focus();
          handleTargetInp(previousInput);
        }
      }
    };

    const handleArrowRight = () => {
      e.preventDefault();
      if (i + 1 < length) {
        if (nextInput) {
          nextInput.focus();
          handleTargetInp(nextInput);
        }
      }
    };

    const handleOtherKeys = () => {
      if (e.key.length === 1 && !(e.metaKey || e.altKey || e.ctrlKey)) {
        e.preventDefault();
        if (acceptedCharacters.test(e.key)) {
          onChange(padValue.substring(0, i) + e.key + padValue.substring(i + 1));
          if (i + 1 < length) {
            const nextInput = inputs.current[i + 1];
            if (nextInput) {
              nextInput.focus();
              handleTargetInp(nextInput);
            }
          } else {
            handleTargetInp(e.currentTarget);
          }
        }
      }
    };

    switch (e.key) {
      case 'Backspace':
        handleBackspace();
        break;
      case 'ArrowLeft':
        handleArrowLeft();
        break;
      case 'ArrowRight':
        handleArrowRight();
        break;
      case 'ArrowUp':
      case 'ArrowDown':
      default:
        handleOtherKeys();
    }
  };

  const handleValueChange = (e, i) => {
    const checkedVal = e.target.value
      .split('')
      .filter((c) => acceptedCharacters.test(c))
      .join('');

    onChange((padValue.substring(0, i) + checkedVal + padValue.substring(i + checkedVal.length)).substr(0, length));

    if (i < length - 1) {
      const nextInput = inputs.current[i + checkedVal.length < length ? i + checkedVal.length : length - 1];
      if (nextInput) {
        nextInput.focus();
        handleTargetInp(nextInput);
      }
    }
  };

  for (let i = 0; i < length; i++) {
    const ref = (inputRef.current[i] = inputRef.current[i] || ((input) => (inputs.current[i] = input || undefined)));
    const digitValue = padValue[i] === ' ' ? '' : padValue[i];

    props.push({
      ref,
      value: digitValue,
      onClick: ({ currentTarget }) => handleTargetInp(currentTarget),
      onFocus: ({ currentTarget }) => handleTargetInp(currentTarget),
      onKeyDown: (e) => handleKeyPress(e, i, digitValue),
      onChange: (e) => handleValueChange(e, i),
    });
  }

  return props;
}

const handleValuePad = (value: string, length: number) => {
  while (value.length < length) value += ' ';
  return value.substr(0, length);
};
