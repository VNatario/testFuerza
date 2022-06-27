import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 32.4rem;
  height: 100%;

  .Button {
    text-align: center;
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

export const BoxLogo = styled.div`
  width: 14.66rem;
  height: 3rem;
  margin-bottom: 10.9rem;
  margin-top: 4.2rem;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BoxJournal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.5rem;
  position: relative;

  .JournalName {
    position: absolute;
    width: 16rem;
    text-align: center;

    h2 {
      font-family: 'Abhaya Libre';
      font-style: normal;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: #000000;
      overflow-wrap: break-word;
    }
  }
`;

export const BoxInput = styled.input`
  width: 100%;
  height: 4rem;
  border-radius: 0.4rem;
  background: rgba(255, 255, 255, 0.42);
  border: 1px solid rgba(157, 164, 166, 0.07);
  outline: none;
  font-weight: 600;
  font-size: 1.2rem;
  padding-left: 1.3rem;
  color: #804627;
  margin-bottom: 4.2rem;
`;

export const Button = styled.button`
  width: 19rem;
  height: 4rem;
  font-weight: 600;
  background: #834825;
  font-size: 1.4rem;
  border-radius: 2.4rem;
  border: none;
  color: white;
`;
