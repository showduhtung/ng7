import { Component } from '@angular/core';

@Component({ //a component decorator
              // is an object that has a bunch of configurations for this particular object
  selector: 'app-root',  //goes to <app-root></app-root> that can be found in index.html
  templateUrl: './app.component.html',   //specifies the actual html or the templating section; can do inline html, by changing templateURL to something else
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //component logic
  title = 'ng7';
}
