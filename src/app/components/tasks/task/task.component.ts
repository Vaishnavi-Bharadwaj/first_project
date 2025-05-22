import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  taskId:string;
  id:string;
  title:string;
  summary:string;
  dueDate:string;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() complete=new EventEmitter<string>();

  onCompleteTask()
  {
    this.complete.emit(this.task.id);
  }
}
