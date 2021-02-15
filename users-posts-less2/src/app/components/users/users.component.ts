
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  allUsers: UserModel[];

  chosenUser: UserModel;

  

  constructor(private http: UserService){
    
  }

  

  ngOnInit() {
    this.http.getAllUser().subscribe(resp => this.allUsers = resp);
  }

  getBackUser(user: UserModel):void{
    this.chosenUser = user;
  }
}
