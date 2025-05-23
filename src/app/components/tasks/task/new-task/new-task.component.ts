import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../tasks.service';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required: true}) id!:string;
  @Output() canceltask=new EventEmitter();
  @Output() add=new EventEmitter<{title:string, summary:string, date:string;}>();
  enteredTitle='';
  enteredSummary='';
  enteredDate='';
  private tasksService = inject(TaskService);

  onCancelTask()
  {
    this.canceltask.emit();
  }

  onSubmit() {
    this.tasksService.addTask({title:this.enteredTitle, summary:this.enteredSummary, date:this.enteredDate}, this.id);
    this.canceltask.emit();
  }
}
