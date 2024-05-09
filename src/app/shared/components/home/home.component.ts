import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }
  gotoUsers(){
    this._router.navigate(['users'])
  }

}