export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createDate: Date;
  completedDate: Date | null;
}
