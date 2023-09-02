import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component'; // Importa el componente Main
import { CardModule } from './card.module'; // Importa el módulo del componente Card
import { TableModule } from './table.module'; // Importa el módulo del componente Table
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    MainComponent, // Declara el componente Main
  ],
  imports: [
    CommonModule,
    IonicModule,
    CardModule, // Importa el módulo del componente Card
    TableModule, // Importa el módulo del componente Table
  ],
  exports: [
    MainComponent, // Exporta el componente Main (si es necesario)
  ],
})
export class MainModule {}
