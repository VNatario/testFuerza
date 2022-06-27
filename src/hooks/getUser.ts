export function getUser() {
  if (!localStorage.getItem('user')) {
    return '';
  }
  const { user } = JSON.parse(localStorage.getItem('user')!);

  return user;
}
