import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [IonicModule], // Asegúrate de agregar IonicModule aquí
    exports: [CardComponent],

})
export class CardModule {}
