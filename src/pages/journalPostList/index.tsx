import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import JournalPostList from '../../components/journalPostList';
import JournalPostListEmpty from '../../components/journalPostListEmpty';
import { Entry } from '../../interfaces/entry.interface';
import { Journal } from '../../interfaces/journal.interface';
import http from '../../services/api';

type params = {
  id: string;
};

function JournalPost() {
  const [posts, setPosts] = useState<Entry[]>([]);
  const [journal, setJournal] = useState<Journal>({} as Journal);
  const history = useHistory();
  const { id } = useParams<params>();

  const fetchJournal = async () => {
    return await http
      .get(`/journal/${id}`)
      .then((res: any) => setJournal(res.journal))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err) => history.push('/journal'));
  };

  const fetchPosts = async () => {
    return await http
      .get(`/journals/entries/${id}`)
      .then((res: any) => setPosts(res.entries))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err) => setPosts([]));
  };

  useEffect(() => {
    fetchJournal();
    fetchPosts();
  }, []);

  return (
    <>
      {posts.length === 0 ? (
        <JournalPostListEmpty journal={journal} />
      ) : (
        <JournalPostList notes={posts} journal={journal} />
      )}
    </>
  );
}

export default JournalPost;
