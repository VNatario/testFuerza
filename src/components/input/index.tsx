import React from 'react';
import { InputWrapper } from './styles';

type props = {
  label: string;
  id: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
};

function Input({ label, id, type, onChange, maxLength = 30 }: props) {
  return (
    <InputWrapper>
      <input
        id={id}
        type={type}
        placeholder=" "
        onChange={onChange}
        maxLength={maxLength}
      />
      <label htmlFor={id}>{label}</label>
    </InputWrapper>
  );
}

export default Input;
