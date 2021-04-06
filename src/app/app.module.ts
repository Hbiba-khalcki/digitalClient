import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/shared/home/home.component';
import { OrganisationTypeComponent } from'./components/client/renseignements/organisation-type/organisation-type.component';
import { InfoClientComponent } from './components/client/renseignements/info-client/info-client.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavBarComponent, 
    HomeComponent, 
    OrganisationTypeComponent, InfoClientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    AppRoutingModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}