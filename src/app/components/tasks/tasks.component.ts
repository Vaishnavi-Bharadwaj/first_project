import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './task/new-task/new-task.component';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) id!:string;
  
  @Output() select=new EventEmitter(); 
  
  onSelectUser() {
    this.select.emit(this.id);
  }

  isAddingTask:boolean=false;
  tasks = [
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
  ]

  //output the task that belongs to a selected user in the tasks array
  get selectedUserTasks() {
    return this.tasks.filter((task)=>task.id===this.id);
  }

  onCompleteTask(id:string)
  {
    this.tasks=this.tasks.filter((task)=>task.id!==id);
  }

  onStartAddTask()
  {
    this.isAddingTask=true;
  }

  onCancelTask()
  {
    this.isAddingTask=false;
  }

  onAddTask(taskData:{title:string, summary:string, date:string})
  { 
    this.tasks.push({
      taskId: new Date().getTime().toString(),
      id:this.id,
      title:taskData.title,
      summary:taskData.summary,
      dueDate:taskData.date
    })
    this.isAddingTask=false;
  }
}
