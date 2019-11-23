import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Minimus';
  showMenu = false;
  darkModeActive = false;

  private toggleMenu() {
    if (this.showMenu === true) {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    };
  }
  private modeToggleSwitch() {
    if (this.darkModeActive === true) {
      this.darkModeActive = false;
    } else {
      this.darkModeActive = true;
    };
  }
}
