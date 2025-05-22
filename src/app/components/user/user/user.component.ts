import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

interface User {
  id:string;
  avatar:string;
  name:string;
};
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {

  //using signal inputs instead of the @Input decorator mentioned above (alternative way not widely used)
  // avatar=input.required<string>(); 
  // name=input.required<string>();

  //to make sure these input properties are mandatory and the app html does not miss it required is written
  // @Input({required: true}) avatar!: string; 
  // @Input({required: true}) name!: string;
  // @Input({required: true}) id!:string;
  
  //Instead of declaring it in the above method, we can define a user and include all the properties 
  // @Input({required: true}) user!: {
  //   id:string;
  //   avatar:string;
  //   name:string
  // }

  //Using interface to define input user
  @Input({required: true}) user!:User;
  @Input({required: true}) selected!:boolean;

  @Output() select=new EventEmitter(); //using output decorator using EventEmitter
  //select=output<string>(); //using output function instead of the decorator (alternative way not widely used)

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
