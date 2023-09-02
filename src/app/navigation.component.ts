import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./styles.css']
})
export class NavigationComponent {
  isNavigationActive = false;
  isHovered = [false, false, /* Agrega más elementos según tu estructura */];

  activateLink(index: number): void {
    this.isHovered.fill(false);
    this.isHovered[index] = true;
  }

  // Resto del código del componente
}
