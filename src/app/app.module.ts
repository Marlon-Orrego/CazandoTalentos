import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from "./main.module";
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { NavigationModule } from "./navigation.module";

@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, IonicModule,  AppRoutingModule, MainModule, NavigationModule]
})
export class AppModule {}
