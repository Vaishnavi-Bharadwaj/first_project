import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from './components/user/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first_project';
  users=DUMMY_USERS;
  selectedUserId:string='';
  userId:any='';
  username:string='';

  onSelectUser(id:string) {
    this.selectedUserId=id;
    console.log('Selected user with id '+id);
    this.userId=this.users.find(u=>u.id===this.selectedUserId)
    this.username=this.userId.name
    console.log('Selected user is '+this.username);
  }
  
}
