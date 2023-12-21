export interface typeTask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface user {
  id: number;
  name: string;
}

export interface typeStorageTask {
  key: number;
  storage: typeTask[];
}
