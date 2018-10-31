import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  personId = 10;
  personName = 'Jhon';
  btnProperty = false;

  constructor() { 
    setTimeout(() => {
      this.btnProperty = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
