class Task {
  title: string;
  description: string;
  due_date: string;
  sub_tasks: string[];

  constructor(title: string, description: string, due_date: string) {
    this.title = title;
    this.description = description;
    this.due_date = due_date;
    this.sub_tasks = [];
  }
}

export default Task;
