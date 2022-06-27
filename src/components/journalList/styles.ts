import styled from 'styled-components';

interface Colors {
  textColor?: string;
}

export const Wrapper = styled.div`
  width: 32.4rem;
  margin-top: 4.2rem;
  height: 95%;

  .LogoContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;

    img {
      width: 14.66rem;
      height: 3rem;
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
      gap: 0.8rem;

      img {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }

  .Journals {
    display: grid;
    grid-template-columns: auto auto;
    gap: 1.5rem;
    padding-bottom: 3.9rem;
  }
`;

export const Journal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 15.766rem;
  height: 21.419rem;

  .JournalName {
    position: absolute;
    width: 11rem;
    text-align: center;
  }

  h2 {
    font-family: 'Abhaya Libre';
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;
    color: ${(props: Colors) => props.textColor || 'black'};
    overflow-wrap: break-word;
  }
`;
