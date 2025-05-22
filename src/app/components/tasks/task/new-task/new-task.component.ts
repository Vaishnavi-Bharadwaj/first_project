import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Output() canceltask=new EventEmitter();
  @Output() add=new EventEmitter<{title:string, summary:string, date:string;}>();
  onCancelTask()
  {
    this.canceltask.emit();
  }

  enteredTitle='';
  enteredSummary='';
  enteredDate='';

  onSubmit() {
    this.add.emit({title:this.enteredTitle, summary:this.enteredSummary, date:this.enteredDate});
  }
}
