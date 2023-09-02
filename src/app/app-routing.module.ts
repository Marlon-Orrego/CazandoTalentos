import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component'; // Importa el componente principal

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }, // Ruta por defecto redirige a /main
  { path: 'main', component: MainComponent }, // Ruta para el componente Main
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
