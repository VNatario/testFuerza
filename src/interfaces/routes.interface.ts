export interface Routes {
  path: string;
  component: (props?: any) => JSX.Element;
  isPrivate?: boolean;
  exact?: boolean;
}
