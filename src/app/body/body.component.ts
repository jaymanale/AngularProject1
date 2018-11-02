import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  btnProperty = false;
  userInputData: String = '';
  userName: String = '';
  userNameSuccess: Boolean = false;
  userArray: String[] = [];

  constructor() {
    setTimeout(() => {
      this.btnProperty = true;
    }, 2000);
  }

  ngOnInit() {}

  addData(event: Event) {
    console.log(event);
    console.log('Event Binding works.');
  }
  userInput(event: Event) {
    console.log(event);
    this.userInputData = (<HTMLInputElement>event.target).value;
  }
  addUser() {
    this.userNameSuccess = true;
    this.userArray.push(this.userName);
    this.userName = '';
    console.log(this.userArray);
  }
}
