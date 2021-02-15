import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms'

export interface User {
  name:string;
  age: number;
}

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent implements OnInit {

  users: User[] = []

  name = new FormControl(null, [Validators.required, Validators.minLength(5)])
  age = new FormControl(null, [Validators.required, Validators.min(18)])

  userForm = new FormGroup({name:this.name, age:this.age})

  onSubmit():void{
    console.log(this.userForm);
    this.users.push(this.userForm.value)
    console.log(this.users);
    
  }

  ngOnInit() {
  }

}
