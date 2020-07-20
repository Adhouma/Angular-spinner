import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerDemoComponent } from './components/spinner-demo/spinner-demo.component';
import { SpinnerTemplateComponent } from './shared/spinner-template/spinner-template.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerDemoComponent,
    SpinnerTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
