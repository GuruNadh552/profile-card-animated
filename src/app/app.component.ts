import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile-card-animated';
  isClicked : boolean = false;

  changeTranslate(){
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
  }
}
