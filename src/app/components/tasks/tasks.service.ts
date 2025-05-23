import { Injectable } from "@angular/core";
@Injectable({providedIn: "root"})

export class TaskService {
    private tasks = [
    {
      taskId: 't1',
      id: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular and how to apply them.',
      dueDate: '2025-12-31'
    },
    {
      taskId: 't2',
      id: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2025-06-29'
    },
    {
      taskId: 't3',
      id: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2025-07-15'
    }
  ];

  //to store the tasks in local storage
  constructor() {
    const tasks=localStorage.getItem('tasks');
    if(tasks)
    {
      this.tasks=JSON.parse(tasks);
    }
  }


  getUserTasks(id:string)
  {
    return this.tasks.filter((task)=>task.id===id);
  }

  addTask(taskData:{title:string, summary:string, date:string}, id:string)
  { 
    this.tasks.push({
      taskId: new Date().getTime().toString(),
      id:id,
      title:taskData.title,
      summary:taskData.summary,
      dueDate:taskData.date
    })
    this.saveTasks();
  }

  removeTask(taskId:string)
  {
    this.tasks=this.tasks.filter((task)=>task.taskId!==taskId);
    this.saveTasks();
  }

  //to save the tasks array as a json string
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}