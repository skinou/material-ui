import * as React from 'react';
import { StandardProps, PropTypes } from '..';
import { FormControlProps, FormHelperTextProps } from '../Form';
import { InputProps, InputLabelProps } from '../Input';
import { FormControlClassKey } from '../Form/FormControl';
import { SelectProps } from '../Select';

export interface TextFieldProps
  extends StandardProps<FormControlProps, TextFieldClassKey, 'onChange' | 'defaultValue'> {
  autoComplete?: string;
  autoFocus?: boolean;
  children?: React.ReactNode;
  defaultValue?: string | number;
  disabled?: boolean;
  error?: boolean;
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  helperTextClassName?: string;
  id?: string;
  InputLabelProps?: Partial<InputLabelProps>;
  InputProps?: Partial<InputProps>;
  inputProps?: InputProps['inputProps'];
  inputRef?: React.Ref<any>;
  label?: React.ReactNode;
  labelClassName?: string;
  margin?: PropTypes.Margin;
  multiline?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  rows?: string | number;
  rowsMax?: string | number;
  select?: boolean;
  SelectProps?: Partial<SelectProps>;
  type?: string;
  value?: Array<string | number> | string | number;
}

export type TextFieldClassKey = FormControlClassKey;

declare const TextField: React.ComponentType<TextFieldProps>;

export default TextField;
