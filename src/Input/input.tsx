import { ChangeEvent, InputHTMLAttributes } from "react";
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

  const HAS_HTML = /<\/?[a-z][\s\S]*>/i;

  const sanitizeInput = (inpTxt: string): string => {
    //  NOTE: You can move it to utils
    if (!HAS_HTML.test(inpTxt)) return inpTxt;
    console.error("Your input is not valid");
    return "";
  };

  const handleKeyPress = (e: ChangeEvent) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!sanitizeInput(e.target.value)) return;
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
