import { OprerationProcComponent } from './components/client/operation-processus/opreration-proc/opreration-proc.component';
import { CultInnovComponent } from './components/client/culture-innovation/cult-innov/cult-innov.component';
import { TechServiceComponent } from './components/client/technologies-services/tech-service/tech-service.component';
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
import {MatMenuModule} from '@angular/material/menu';

import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/shared/home/home.component';
import { OrganisationTypeComponent } from'./components/client/renseignements/organisation-type/organisation-type.component';
import { InfoClientComponent } from './components/client/renseignements/info-client/info-client.component';
import { AproposComponent } from './components/shared/apropos/apropos.component';
import { ContactezNousComponent } from './components/shared/contactez-nous/contactez-nous.component';
import { FormulaireContactComponent } from './components/shared/formulaire-contact/formulaire-contact.component';
import { RessourcesComponent } from './components/shared/ressources/ressources.component';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './components/expert/question/question.component';
import {MatSelectModule} from '@angular/material/select';
import { RecommandationComponent } from './components/expert/recommandation/recommandation.component';
import { FirstComponentComponent } from './components/client/strategie-leadership/first-component/first-component.component';
import { InfraInfoComponent } from './components/client/infrastructure-informatique/infra-info/infra-info.component';


import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent, 
    NavBarComponent, 
    HomeComponent, 
    OrganisationTypeComponent, 
    InfoClientComponent, 
    AproposComponent, 
    ContactezNousComponent, 
    FormulaireContactComponent, 
    RessourcesComponent, 
    QuestionComponent, 
    RecommandationComponent,

    FirstComponentComponent, 
    InfraInfoComponent, TechServiceComponent, CultInnovComponent, OprerationProcComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,

    MatSelectModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatCardModule,
    AppRoutingModule,
    
    MatRadioModule,
    MatProgressBarModule,

  ],
  exports: [
    MatToolbarModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}