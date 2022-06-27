import { Routes } from './interfaces/routes.interface';
import CreateJournal from './pages/createJournal';
import CreatePost from './pages/createPost';
import Journal from './pages/journalList';
import JournalPost from './pages/journalPostList';
import Login from './pages/login';
import Register from './pages/register';

const routes: Routes[] = [
  {
    path: '/',
    component: Login,
    isPrivate: false,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    isPrivate: false,
  },
  {
    path: '/journal',
    component: Journal,
    isPrivate: true,
    exact: true,
  },
  {
    path: '/journal/create',
    component: CreateJournal,
    isPrivate: true,
  },
  {
    path: '/journal/:id',
    component: JournalPost,
    isPrivate: true,
    exact: true,
  },
  {
    path: '/journal/:id/create/:postId?',
    component: CreatePost,
    isPrivate: true,
  },
];

export default routes;
