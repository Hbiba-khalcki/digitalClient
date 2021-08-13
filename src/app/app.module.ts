import { OprerationProcComponent } from './components/client/questions/operation-processus/opreration-proc/opreration-proc.component';
import { TechServiceComponent } from './components/client/questions/technologies-services/tech-service/tech-service.component';
import { InfraInfoComponent } from './components/client/questions/infrastructure-informatique/infra-info/infra-info.component';
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
import { MatMenuModule} from '@angular/material/menu';

import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';

import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/shared/home/home.component';
import { OrganisationTypeComponent } from'./components/client/renseignements/organisation-type/organisation-type.component';
import { InfoClientComponent } from './components/client/renseignements/info-client/info-client.component';
import { AproposComponent } from './components/shared/apropos/apropos.component';

import { FormulaireContactComponent } from './components/shared/formulaire-contact/formulaire-contact.component';
import { RessourcesComponent } from './components/shared/ressources/ressources.component';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './components/expert/question/question.component';
import {MatSelectModule} from '@angular/material/select';

import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InfoEntrpComponent } from './components/client/renseignements/info-entrp/info-entrp.component';
import { InfoEntrpTwoComponent } from './components/client/renseignements/info-entrp-two/info-entrp-two.component';
import { ScoreComponent } from './components/client/resultat/score/score.component';
import { SigninComponent } from './components/shared/login/signin/signin.component';
import { SignupComponent } from './components/shared/login/signup/signup.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { CultInnovComponent } from './components/client/questions/culture-innovation/cult-innov/cult-innov.component';
import { ReponsesComponent } from './components/expert/reponses/reponses.component';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ExpertCreateComponent } from './components/admin/expert-create/expert-create.component';
import { ExpertListComponent } from './components/admin/expert-list/expert-list.component';
import { ExpertDetailComponent } from './components/admin/expert-detail/expert-detail.component';
import { ExpertDeleteComponent } from './components/admin/expert-delete/expert-delete.component';
import { ExpertEditComponent } from './components/admin/expert-edit/expert-edit.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AxesEvaluationComponent } from './components/client/resultat/axes-evaluation/axes-evaluation.component';
import { ComparaisonComponent } from './components/client/resultat/comparaison/comparaison.component';
import { EvolutionComponent } from './components/client/resultat/evolution/evolution.component';

import { RecommandationComponent } from './components/expert/recommandation/recommandation.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ResPerStrategieComponent } from './components/client/resultat/ressourcespersonnalisees/res-per-strategie/res-per-strategie.component';
import { ResPerInfrastructureComponent } from './components/client/resultat/ressourcespersonnalisees/res-per-infrastructure/res-per-infrastructure.component';
import { ResPerOperationComponent } from './components/client/resultat/ressourcespersonnalisees/res-per-operation/res-per-operation.component';
import { ResPerTechnologieComponent } from './components/client/resultat/ressourcespersonnalisees/res-per-technologie/res-per-technologie.component';
import { ResPerCultureComponent } from './components/client/resultat/ressourcespersonnalisees/res-per-culture/res-per-culture.component';

import { RecsCultureComponent } from './components/client/resultat/recommandation/recs-culture/recs-culture.component';
import { RecsStrategieComponent } from './components/client/resultat/recommandation/recs-strategie/recs-strategie.component';
import { RecsInfrastructureComponent } from './components/client/resultat/recommandation/recs-infrastructure/recs-infrastructure.component';
import { RecsOperationComponent } from './components/client/resultat/recommandation/recs-operation/recs-operation.component';
import { RecsTechnologieComponent } from './components/client/resultat/recommandation/recs-technologie/recs-technologie.component';
import { StrategieLeadershipComponent } from './components/client/questions/strategie-leadership/strategie-leadership/strategie-leadership.component';

import { RecsGeneralComponent } from './components/client/resultat/recommandation/recs-general/recs-general.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClientModule } from '@angular/common/http';
import { ContactezNousComponent } from './components/shared/apropos/contactez-nous/contactez-nous.component';
import { LogoutComponent } from './components/shared/login/logout/logout.component';
import { AxeComponent } from './components/expert/axe/axe.component';
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

    StrategieLeadershipComponent, 
    InfraInfoComponent,
    TechServiceComponent,
    CultInnovComponent,
    OprerationProcComponent,
    InfoEntrpComponent,
    InfoEntrpTwoComponent,
     ScoreComponent,
    SigninComponent,
    SignupComponent, 
    ReponsesComponent, 
    
    ExpertCreateComponent, ExpertListComponent, ExpertDetailComponent, ExpertDeleteComponent, ExpertEditComponent, AxesEvaluationComponent, ComparaisonComponent, EvolutionComponent, 
    
    ResPerStrategieComponent, ResPerInfrastructureComponent, ResPerOperationComponent, ResPerTechnologieComponent, ResPerCultureComponent, 
   
    RecsCultureComponent, RecsStrategieComponent, RecsInfrastructureComponent, RecsOperationComponent, RecsTechnologieComponent, RecsGeneralComponent, LogoutComponent, AxeComponent,
    

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
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    
    MatRadioModule,
    MatProgressBarModule,

    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule,
    MatProgressSpinnerModule,

    NgApexchartsModule,
    HttpClientModule

  ],
  exports: [
    MatToolbarModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}