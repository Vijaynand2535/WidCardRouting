import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }
  gotoProducts(){
    this._router.navigate(['products'])
  }
}
