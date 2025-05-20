import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../../../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) avatar!: string; //to make sure these input properties are mandatory and the app html does not miss it required is written
  @Input({required: true}) name!: string;
  @Input({required: true}) id!:string;
  // avatar=input.required<string>(); //using signal inputs instead of the @Input decorator mentioned above (alternative way not widely used)
  // name=input.required<string>();
 
  @Output() select=new EventEmitter(); //using output decorator using EventEmitter
  //select=output<string>(); //using output function instead of the decorator (alternative way not widely used)

  onSelectUser() {
    this.select.emit(this.id);
  }
}
