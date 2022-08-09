import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InformationComponent } from './components/information/information.component';
import { ProvidingComponent } from './components/providing/providing.component';
import { ManagementComponent } from './components/management/management.component';
import { ReferencesComponent } from './components/references/references.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformationComponent,
    ProvidingComponent,
    ManagementComponent,
    ReferencesComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
