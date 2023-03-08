import { ChangeEvent, InputHTMLAttributes } from "react";
import validationService, { Validationtype } from "./validation-service"; // pass your validation service
import { InputContainer, StyledInput, StyledTextArea } from "./style";

interface InputProps extends InputHTMLAttributes<any> {
  testId?: string;
  Icon?: any;
  label?: string;
  contentClassName?: string;
  multiLine?: boolean;
  rows?: number;
  cols?: number;
  ref?: (input: HTMLInputElement | null) => void;
  clearValue?: Function;
  validation: keyof Validationtype;
}

export default function Input(props: InputProps): JSX.Element {
  const {
    testId,
    ref,
    id,
    Icon,
    height,
    width,
    onSubmit,
    className,
    label = "",
    multiLine = false,
    contentClassName,
    placeholder,
    rows = 4,
    cols = 40,
    disabled,
    value,
    onChange,
    ...restProps
  } = props;

    const validateInput = (txt: string): boolean => {
    return validationService[validation](txt);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!validateInput(e.target.value)) return console.error("Wrong Input");
    onChange?.(e);
  };

  return (
    <InputContainer
      onSubmit={handleKeyPress}
      data-testid={testId}
      disabled={disabled}
      height={height}
      width={width}
      className={className}
    >
      {multiLine ? (
        <StyledTextArea
          data-testid={testId}
          placeholder={placeholder}
          className={contentClassName}
          rows={rows}
          onChange={handleOnChange}
          cols={cols}
          id={id}
          value={value}
          {...restProps}
        />
      ) : (
        <>
          {Icon ? <Icon /> : null}
          <StyledInput
            id={id}
            data-testid={testId}
            ref={ref}
            placeholder={placeholder}
            className={contentClassName}
            onChange={handleOnChange}
            value={value}
            {...restProps}
          />
        </>
      )}
    </InputContainer>
  );
}
