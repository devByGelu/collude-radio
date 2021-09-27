import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioGroupComponent } from './radio-group/radio-group.component';

@NgModule({
  declarations: [AppComponent, RadioGroupComponent],
  imports: [
    BrowserModule,
    MatRadioModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
