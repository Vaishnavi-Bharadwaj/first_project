import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from './components/user/user/user.component';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first_project';
  users=DUMMY_USERS;

  onSelectUser(id:string) {
    console.log('Selected user with id '+id);
  }
}
