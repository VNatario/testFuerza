import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 33.5rem;
  margin-top: 4.2rem;
  height: 90%;

  .LogoContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    img {
      width: 14.66rem;
      height: 3rem;
    }
  }

  .Navigation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.9rem;

    .ReturnIcon {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.85rem;

      span {
        max-width: 15rem;
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

    button {
      width: 13.5rem;
      height: 4rem;
      border: 0.1rem solid #834825;
      border-radius: 2.4rem;
      background: transparent;
      font-weight: 600;
      font-size: 1.4rem;
      color: #834825;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      img {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }

  .Notes {
    display: grid;
    grid-template-columns: auto auto;
    padding-bottom: 7.5rem;
    gap: 2rem;
  }
`;

export const Note = styled.div`
  position: relative;
  margin: auto;
  width: 15.4rem;
  height: 17.8rem;
  padding: 1rem;
  background-color: #faf2ec;
  box-shadow: -0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.12);
  border-radius: 0.4rem;
  z-index: 2;

  .ContentNote {
    position: absolute;
    z-index: 3;

    p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      line-height: 2.4rem;
      word-break: break-all;
      max-width: 17.6rem;
      max-height: 13.2rem;
      font-size: 2rem;
      overflow-y: auto;
    }
  }

  .BackNote {
    width: 15.4rem;
    height: 17.8rem;
    padding: 0.5rem;
    background-color: #faf2ec;
    box-shadow: -0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.12);
    position: absolute;
    z-index: 1;
    top: -0.3rem;
    left: 0.3rem;
    border-radius: 0.4rem;
  }
`;
