import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';
interface Task {
  taskId:string;
  id:string;
  title:string;
  summary:string;
  dueDate:string;
}

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  // @Output() complete=new EventEmitter<string>();

  //use the removeTask method directly from the service
  private taskService=inject(TaskService)
  onCompleteTask()
  {
    // this.complete.emit(this.task.id);
    this.taskService.removeTask(this.task.taskId); //this should be changed from id to taskId since we need that particular task to be removed and not the user id which removes all the tasks 
  }
}
