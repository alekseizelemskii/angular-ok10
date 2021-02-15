import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserModel} from '../../services/get-user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[]

  search: string = ''

  constructor(private activatedRoute: ActivatedRoute) {
  this.activatedRoute.data.subscribe(value => this.users = value.usersData)

    
    
  }

  ngOnInit() {    
  }

}
