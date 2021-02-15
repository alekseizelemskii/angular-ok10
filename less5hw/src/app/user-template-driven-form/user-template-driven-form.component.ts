import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
export interface User{
  name:string;
  age:number;
}

@Component({
  selector: 'app-user-template-driven-form',
  templateUrl: './user-template-driven-form.component.html',
  styleUrls: ['./user-template-driven-form.component.css']
})
export class UserTemplateDrivenFormComponent implements OnInit {

  constructor() { }

  users: any = []

  nameInput: string;
  ageInput: number;

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.users.push(form.value)
    console.log(this.users);
    console.log(form);
    
    
    
  }
}
