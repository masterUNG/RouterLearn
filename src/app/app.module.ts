import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './components/firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './components/secondcomponent/secondcomponent.component';
import { ThirdcomponentComponent } from './components/thirdcomponent/thirdcomponent.component';
import { FourcomponentComponent } from './components/fourcomponent/fourcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    SecondcomponentComponent,
    ThirdcomponentComponent,
    FourcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
