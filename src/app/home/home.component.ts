import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1Style: boolean = false

  constructor() { }

  ngOnInit() {
  }

  firstClick(){
    if (this.h1Style === true) this.h1Style = false
    else this.h1Style = true
  }

}
