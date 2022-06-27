/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.svg';
import ArrowLeft from '../../assets/ArrowLeft.svg';
import { Wrapper } from './styles';
import { Journal } from '../../interfaces/journal.interface';
import { Link, useHistory, useParams } from 'react-router-dom';
import http from '../../services/api';

type params = {
  id: string;
  postId?: string;
};

function CreatePost() {
  const [journal, setJournal] = useState<Journal>({} as Journal);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { id, postId } = useParams<params>();

  const fetchJournal = async () => {
    return await http
      .get(`/journal/${id}`)
      .then((res: any) => setJournal(res.journal))
      .catch((err) => history.push('/journal'));
  };

  const fetchPost = async () => {
    return await http
      .get(`/journals/entry/${postId}`)
      .then((res: any) => {
        setTitle(res.entry.title);
        setContent(res.entry.content);
      })
      .catch((err) => history.push(`/journal/${id}`));
  };

  const createPost = async () => {
    return await http
      .post(`/journals/entry/${id}`, { title, content })
      .then((res) => history.goBack())
      .catch((err) => setError(err));
  };

  const editPost = async () => {
    return await http
      .put(`/journals/entry/${postId}`, { title, content })
      .then((res) => history.goBack())
      .catch((err) => setError(err));
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      return setError('Title and content must not be empty');
    }
    if (postId) {
      editPost();
    } else {
      createPost();
    }
  };

  useEffect(() => {
    fetchJournal();
    if (postId) {
      fetchPost();
    }
  }, []);

  return (
    <Wrapper>
      <div className="LogoContainer">
        <img src={Logo} alt="Logo nocturnal" />
      </div>

      <Link to={`/journal/${id}`}>
        <div className="ReturnIcon">
          <img src={ArrowLeft} alt="Arrow Left" />
          <span>{journal.title}</span>
        </div>
      </Link>

      <input
        type="text"
        className="Title"
        placeholder="Title"
        maxLength={50}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="ContentNote"
        placeholder="Write your note"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <div className="Button">
        <button onClick={() => handleSubmit()}>Save note</button>
      </div>

      <p className="Error">{error || '\u00A0'}</p>
    </Wrapper>
  );
}

export default CreatePost;
