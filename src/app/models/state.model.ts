export interface State {
  state: string;
  lgas: string[];
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
