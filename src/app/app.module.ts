import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NumMenorComponent } from './components/num-menor/num-menor.component';
import { SumaComponent } from './components/suma/suma.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, NumMenorComponent, SumaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
