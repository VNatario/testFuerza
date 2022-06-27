import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import Person from '../../assets/Person.svg';
import { Journal } from '../../interfaces/journal.interface';
import { Wrapper, BoxLogo } from './styles';

type props = {
  journal: Journal;
};

function JournalPostListEmpty({ journal }: props) {
  return (
    <Wrapper>
      <Link to={`/journal`}>
        <BoxLogo>
          <img src={Logo} alt="Logo Nocturnal" />
        </BoxLogo>
      </Link>
      <div className="TitleJournal">
        <h2>{journal.title}</h2>
      </div>
      <img src={Person} className="Person" alt="Person " />
      <Link to={`/journal/${journal.id}/create`}>
        <p className="CreateJournal">Create a note</p>
      </Link>
    </Wrapper>
  );
}

export default JournalPostListEmpty;
