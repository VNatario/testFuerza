export interface User {
  id?: string;
  username: string;
  email: string;
  password?: string;
  journalIds: string[] | null;
}

export interface UserObject {
  token: string;
  user: User;
}
