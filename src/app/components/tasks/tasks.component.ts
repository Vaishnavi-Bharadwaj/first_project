import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './task/new-task/new-task.component';
import { TaskService } from './tasks.service';

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
  
  constructor(private taskService:TaskService){} //use the constructor to define the object of the TaskService

  onSelectUser() {
    this.select.emit(this.id); 
  }

  isAddingTask:boolean=false;

  //output the task that belongs to a selected user in the tasks array
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.id);  //using getUserTasks from the services
  }
  

  // remove this implementation here and directly use it in the task component using services
  // onCompleteTask(id:string)
  // {
  //   this.tasks=this.tasks.filter((task)=>task.id!==id);
  // }

  onStartAddTask()
  {
    this.isAddingTask=true;
  }

  onCancelTask()
  {
    this.isAddingTask=false;
  }

  // this function to add the task is now written using addTask in the TaskService and called in the new-task component in onSubmit()
  // onAddTask()
  // { 
  //   this.isAddingTask=false;
  // }
}
