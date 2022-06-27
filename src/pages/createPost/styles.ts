import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 33.5rem;
  margin-top: 4.2rem;
  height: 90%;

  .LogoContainer {
    margin-bottom: 2.5rem;
    img {
      width: 14.66rem;
      height: 3rem;
    }
  }

  .ReturnIcon {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.85rem;
    margin-bottom: 4.5rem;

    span {
      font-family: 'Abhaya Libre';
      font-style: normal;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 2.8rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .Title {
    width: 100%;
    height: 4rem;
    padding: 1.3rem;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #804627;
    background: rgba(255, 255, 255, 0.42);
    border: 0.1rem solid rgba(157, 164, 166, 0.07);
    border-radius: 0.4rem;
    margin-bottom: 2.8rem;
    outline: none;
  }

  .ContentNote {
    resize: none;
    width: 100%;
    height: 38rem;
    background: rgba(255, 255, 255, 0.42);
    border: 0.1rem solid rgba(157, 164, 166, 0.07);
    border-radius: 0.4rem;
    padding: 1.4rem 1.27rem;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.5rem;
    outline: none;
    margin-bottom: 3.17rem;
    color: #804627;
  }

  .Button {
    text-align: center;
    button {
      width: 19rem;
      height: 4rem;
      background: #834825;
      font-weight: 600;
      font-size: 1.4rem;
      border-radius: 2.4rem;
      border: none;
      color: white;
    }
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
