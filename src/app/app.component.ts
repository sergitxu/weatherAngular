import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Minimus';
  showMenu = false;

  public toggleMenu() {
    if (this.showMenu === true) {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    };
  }
}
