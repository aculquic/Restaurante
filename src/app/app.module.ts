import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RestauranteComponent } from './components/restaurante/restaurante.component';
import { RestauranteBodyComponent } from './components/restaurante-body/restaurante-body.component';
import { RestauranteInputComponent } from './components/restaurante-input/restaurante-input.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    RestauranteBodyComponent,
    RestauranteInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
