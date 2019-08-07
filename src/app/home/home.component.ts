import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : Object;

  constructor(private data: DataService) { } //creating an instance of DataService through a dependency injection in the constructor

  ngOnInit() {
       //lifecycle hook on init
       this.data.getUsers().subscribe(data =>{
        this.users = data
        console.log(this.users)
      })
  }

}
