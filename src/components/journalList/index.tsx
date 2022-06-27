import React from 'react';
import Logo from '../../assets/Logo.svg';
import Plus from '../../assets/Plus.svg';
import CoverBlueLight from '../../assets/CoverBlueLight.svg';
import CoverBlueDark from '../../assets/CoverBlueDark.svg';
import { Wrapper, Journal } from './styles';
import { Link } from 'react-router-dom';
import { Journal as JournalType } from '../../interfaces/journal.interface';

type props = {
  journals: JournalType[];
};

function JournalList({ journals }: props) {
  return (
    <Wrapper>
      <div className="LogoContainer">
        <img src={Logo} alt="Logo nocturnal" />
        <Link to={'/journal/create'}>
          <button>
            <img src={Plus} alt="Plus icon" />
            <span>Add Journal</span>
          </button>
        </Link>
      </div>
      <div className="Journals">
        {journals.map((journal, i) =>
          i % 2 === 0 ? (
            <Link key={i} to={`/journal/${journal.id}`}>
              <Journal>
                <img src={CoverBlueLight} />
                <div className="JournalName">
                  <h2>{journal.title}</h2>
                </div>
              </Journal>
            </Link>
          ) : (
            <Link key={i} to={`/journal/${journal.id}`}>
              <Journal textColor="white">
                <img src={CoverBlueDark} />
                <div className="JournalName">
                  <h2>{journal.title}</h2>
                </div>
              </Journal>
            </Link>
          )
        )}
      </div>
    </Wrapper>
  );
}

export default JournalList;
