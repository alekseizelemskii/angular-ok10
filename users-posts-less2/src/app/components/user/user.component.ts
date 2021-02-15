import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  userFromUsersComponent: UserModel;

  @Output()
  getBack = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  getUser():void{
    this.getBack.emit(this.userFromUsersComponent)
  }
  
}
