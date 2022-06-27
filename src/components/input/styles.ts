import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  * {
    cursor: text;
  }
  input {
    position: relative;
    width: 100%;
    outline: none;
    padding: 2rem 1.2rem 0.5rem;
    height: 4rem;
    border-radius: 0.4rem;
    border: 0.1rem solid rgba(157, 164, 166, 0.07);
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #834825;
  }

  input ~ label {
    position: absolute;
    left: 1.2rem;
    width: 92%;
    top: 1.2rem;
    color: #804627;
    font-weight: 600;
    font-size: 1.2rem;
    transition: 0.2s;
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.01);
  }
  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    top: 0.6rem;
    font-size: 0.9rem;
    color: #736d6b;
    letter-spacing: 0.05rem;
    transition: 0.2s;
  }

  input:focus {
    filter: drop-shadow(0rem 0rem 0.4rem #b8e5e3)
      drop-shadow(0rem 0rem 0.2rem #b8e5e3);
  }
`;
