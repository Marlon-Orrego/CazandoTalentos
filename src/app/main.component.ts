import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./styles.css']
})
export class MainComponent {
  isNavigationActive = false;

  toggleNavigation() {
    this.isNavigationActive = !this.isNavigationActive;
  }
}