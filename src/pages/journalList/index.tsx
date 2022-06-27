import React, { useEffect, useState } from 'react';
import JournalListEmpty from '../../components/journalListEmpty';
import JournalList from '../../components/journalList';
import http from '../../services/api';
import { Journal as JournalType } from '../../interfaces/journal.interface';
import { getUser } from '../../hooks/getUser';

function Journal() {
  const [journals, setJournals] = useState<JournalType[]>([]);

  const user = getUser();

  const fetchJournals = async () => {
    return await http
      .get(`/journals/${user.id}`)
      .then((res: any) => setJournals(res.journals))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err) => setJournals([]));
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  return (
    <>
      {journals.length === 0 ? (
        <JournalListEmpty />
      ) : (
        <JournalList journals={journals} />
      )}
    </>
  );
}

export default Journal;
