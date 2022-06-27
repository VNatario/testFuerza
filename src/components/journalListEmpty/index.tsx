import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import Person from '../../assets/Person.svg';
import { Wrapper, BoxLogo } from './styles';

function JournalListEmpty() {
  return (
    <Wrapper>
      <BoxLogo>
        <img src={Logo} alt="Logo Nocturnal" />
      </BoxLogo>

      <img src={Person} className="Person" alt="Person " />
      <Link to={'/journal/create'}>
        <p className="CreateJournal">Create a journal</p>
      </Link>
    </Wrapper>
  );
}

export default JournalListEmpty;
