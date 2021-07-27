import React from 'react';
import { InputAttributes } from 'components/DigitInput/format-inputs';
import { InputItemStyle } from 'components/DigitInput/DigitInputStyle';

export const InputElement = React.forwardRef<
  HTMLInputElement,
  Omit<InputAttributes, 'ref'> & {
    autoFocus?: boolean;
  }
>(({ ...props }, ref) => <InputItemStyle ref={ref} inputMode="decimal" {...props} />);
