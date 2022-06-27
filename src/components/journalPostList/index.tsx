import React from 'react';
import Logo from '../../assets/Logo.svg';
import Plus from '../../assets/Plus.svg';
import ArrowLeft from '../../assets/ArrowLeft.svg';

import { Wrapper, Note } from './styles';
import { Entry } from '../../interfaces/entry.interface';
import { Journal } from '../../interfaces/journal.interface';
import { Link } from 'react-router-dom';

type props = {
  notes: Entry[];
  journal: Journal;
};

function JournalPostList({ notes, journal }: props) {
  return (
    <Wrapper>
      <div className="LogoContainer">
        <img src={Logo} alt="Logo nocturnal" />
      </div>

      <div className="Navigation">
        <Link to={`/journal`}>
          <div className="ReturnIcon">
            <img src={ArrowLeft} alt="Arrow Left" />
            <span>{journal.title}</span>
          </div>
        </Link>

        <Link to={`/journal/${journal.id}/create`}>
          <button>
            <img src={Plus} alt="Plus icon" />
            <span>Add Note</span>
          </button>
        </Link>
      </div>

      <div className="Notes">
        {notes.map((note, i) => (
          <Link key={i} to={`/journal/${journal.id}/create/${note.id}`}>
            <Note>
              <div className="ContentNote">
                <p>{note.title}</p>
              </div>
              <div className="BackNote" />
            </Note>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
}

export default JournalPostList;
