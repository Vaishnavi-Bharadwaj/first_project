import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
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
}
