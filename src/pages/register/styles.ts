import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 32.2rem;
  img {
    margin-bottom: 7.8rem;
  }
  .Error {
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: red;
    font-weight: 600;
    text-align: center;
    margin-top: 3rem;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  color: #834825;

  h1 {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 3.9rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.5rem;
    text-decoration: underline;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.9rem;
  margin-bottom: 6.2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  button {
    width: 16.1rem;
    height: 4rem;
    border-radius: 4rem;
    border: 2px solid #834825;
    background: #834825;
    color: white;
    align-items: center;
  }
`;
