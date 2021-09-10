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
import { MatMenuModule } from '@angular/material/menu';

import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';

import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/shared/home/home.component';
import { OrganisationTypeComponent } from './components/client/renseignements/organisation-type/organisation-type.component';
import { InfoClientComponent } from './components/client/renseignements/info-client/info-client.component';
import { AproposComponent } from './components/shared/apropos/apropos.component';

import { FormulaireContactComponent } from './components/shared/formulaire-contact/formulaire-contact.component';
import { RessourcesComponent } from './components/shared/ressources/ressources.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InfoEntrpComponent } from './components/client/renseignements/info-entrp/info-entrp.component';
import { InfoEntrpTwoComponent } from './components/client/renseignements/info-entrp-two/info-entrp-two.component';
import { ScoreComponent } from './components/client/resultat/score/score.component';
import { SigninComponent } from './components/shared/login/signin/signin.component';
import { SignupComponent } from './components/shared/login/signup/signup.component';

import { MatCheckboxModule } from '@angular/material/checkbox';

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

import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
import { ListeQuestionComponent } from './components/expert/question/liste-question/liste-question.component';
import { AjoutQuestionComponent } from './components/expert/question/ajout-question/ajout-question.component';
import { ModifQuestionComponent } from './components/expert/question/modif-question/modif-question.component';
import { ListeReponseComponent } from './components/expert/reponses/liste-reponse/liste-reponse.component';
import { ModifReponseComponent } from './components/expert/reponses/modif-reponse/modif-reponse.component';
import { AjoutReponseComponent } from './components/expert/reponses/ajout-reponse/ajout-reponse.component';
import { MenuComponent } from './components/expert/menu/menu.component';
import { AjoutAxeComponent } from './components/expert/axe/ajout-axe/ajout-axe.component';
import { ListeAxeComponent } from './components/expert/axe/liste-axe/liste-axe.component';
import { ModifAxeComponent } from './components/expert/axe/modif-axe/modif-axe.component';
import { ModifRecommandationComponent } from './components/expert/recommandation/modif-recommandation/modif-recommandation.component';
import { AjoutRecommandationComponent } from './components/expert/recommandation/ajout-recommandation/ajout-recommandation.component';
import { ListeRecommandationComponent } from './components/expert/recommandation/liste-recommandation/liste-recommandation.component';
import { AjoutRessourceComponent } from './components/expert/ressources/ajout-ressource/ajout-ressource.component';
import { ModifRessourceComponent } from './components/expert/ressources/modif-ressource/modif-ressource.component';
import { ListeRessourceComponent } from './components/expert/ressources/liste-ressource/liste-ressource.component';

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
    StrategieLeadershipComponent,
    InfoEntrpComponent,
    InfoEntrpTwoComponent,
    ScoreComponent,
    SigninComponent,
    SignupComponent,
    ExpertCreateComponent,
    ExpertListComponent,
    ExpertDetailComponent,
    ExpertDeleteComponent,
    ExpertEditComponent,
    AxesEvaluationComponent,
    ComparaisonComponent,
    EvolutionComponent,
    ResPerStrategieComponent,
    ResPerInfrastructureComponent,
    ResPerOperationComponent,
    ResPerTechnologieComponent,
    ResPerCultureComponent,
    RecsCultureComponent,
    RecsStrategieComponent,
    RecsInfrastructureComponent,
    RecsOperationComponent,
    RecsTechnologieComponent,
    RecsGeneralComponent,
    LogoutComponent,
    ListeQuestionComponent,
    AjoutQuestionComponent,
    ModifQuestionComponent,
    AjoutReponseComponent,
    ModifReponseComponent,
    ListeReponseComponent,
    MenuComponent,
    AjoutAxeComponent,
    ListeAxeComponent,
    ModifAxeComponent,
    ModifRecommandationComponent,
    AjoutRecommandationComponent,
    ListeRecommandationComponent,
    AjoutRessourceComponent,
    ModifRessourceComponent,
    ListeRessourceComponent,
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
    HttpClientModule,
  ],
  exports: [MatToolbarModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
