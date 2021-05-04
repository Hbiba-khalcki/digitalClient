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
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/shared/home/home.component';
import { OrganisationTypeComponent } from'./components/client/renseignements/organisation-type/organisation-type.component';
import { InfoClientComponent } from './components/client/renseignements/info-client/info-client.component';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FirstComponentComponent } from './components/client/strategie-leadership/first-component/first-component.component';
import { InfraInfoComponent } from './components/client/infrastructure-informatique/infra-info/infra-info.component';
import { TechServiceComponent } from './components/client/technologies-services/tech-service/tech-service.component';
import { CultInnovComponent } from './components/client/culture-innovation/cult-innov/cult-innov.component';
import { OprerationProcComponent } from './components/client/operation-processus/opreration-proc/opreration-proc.component';
import { InfoPersoComponent } from './components/client/renseignements/info-perso/info-perso.component';
import { InfoEntrpComponent } from './components/client/renseignements/info-entrp/info-entrp.component';
import { MatSelectModule } from '@angular/material/select';
import { InfoEntrpTwoComponent } from './components/client/renseignements/info-entrp-two/info-entrp-two.component';
import { SigninComponent } from './components/shared/login/signin/signin.component';
import { ScoreComponent } from './components/client/resultat/score/score.component';
import { SignupComponent } from './components/shared/login/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent, 
    NavBarComponent, 
    HomeComponent, 
    OrganisationTypeComponent, 
    InfoClientComponent,
    FirstComponentComponent,
    InfraInfoComponent,
    TechServiceComponent,
    CultInnovComponent,
    OprerationProcComponent, 
    InfoPersoComponent, 
    InfoEntrpComponent, InfoEntrpTwoComponent, SigninComponent, ScoreComponent, SignupComponent
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
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatProgressBarModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}