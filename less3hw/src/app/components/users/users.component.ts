import { Component, OnInit } from '@angular/core';
import { UserModel, UserService } from '../../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[]

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(v => this.users = v)
  }

}
