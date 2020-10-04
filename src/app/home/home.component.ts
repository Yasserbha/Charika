import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 loader : boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loader = true;
    },5000)
  }

}
