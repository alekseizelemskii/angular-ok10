import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: UserModel

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  
  ngOnInit() {}

  getDetails(){
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user})
  }

}
