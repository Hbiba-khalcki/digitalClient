import {ResPerInfrastructureComponent} from './components/client/resultat/ressourcespersonnalisees/res-per-infrastructure/res-per-infrastructure.component';

import {OprerationProcComponent} from './components/client/questions/operation-processus/opreration-proc/opreration-proc.component';
import {RessourcesComponent} from './components/shared/ressources/ressources.component';
import {FormulaireContactComponent} from './components/shared/formulaire-contact/formulaire-contact.component';

import {AproposComponent} from './components/shared/apropos/apropos.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfoClientComponent} from './components/client/renseignements/info-client/info-client.component';
import {InfoEntrpTwoComponent} from './components/client/renseignements/info-entrp-two/info-entrp-two.component';
import {InfoEntrpComponent} from './components/client/renseignements/info-entrp/info-entrp.component';
import {InfoPersoComponent} from './components/client/renseignements/info-perso/info-perso.component';
import {OrganisationTypeComponent} from './components/client/renseignements/organisation-type/organisation-type.component';
import {ScoreComponent} from './components/client/resultat/score/score.component';
import {HomeComponent} from './components/shared/home/home.component';
import {QuestionComponent} from './components/expert/question/question.component';
import {RecommandationComponent} from './components/expert/recommandation/recommandation.component';
import {SigninComponent} from './components/shared/login/signin/signin.component';
import {SignupComponent} from './components/shared/login/signup/signup.component';
import {InfraInfoComponent} from './components/client/questions/infrastructure-informatique/infra-info/infra-info.component';
import {TechServiceComponent} from './components/client/questions/technologies-services/tech-service/tech-service.component';
import {CultInnovComponent} from './components/client/questions/culture-innovation/cult-innov/cult-innov.component';
import {ReponsesComponent} from './components/expert/reponses/reponses.component';
import {ExpertListComponent} from './components/admin/expert-list/expert-list.component';
import {ExpertCreateComponent} from './components/admin/expert-create/expert-create.component';
import {ExpertDetailComponent} from './components/admin/expert-detail/expert-detail.component';
import {ExpertEditComponent} from './components/admin/expert-edit/expert-edit.component';
import {ExpertDeleteComponent} from './components/admin/expert-delete/expert-delete.component';
import {AxesEvaluationComponent} from './components/client/resultat/axes-evaluation/axes-evaluation.component';
import {EvolutionComponent} from './components/client/resultat/evolution/evolution.component';
import {ComparaisonComponent} from './components/client/resultat/comparaison/comparaison.component';

import {ResPerStrategieComponent} from './components/client/resultat/ressourcespersonnalisees/res-per-strategie/res-per-strategie.component';
import {ResPerOperationComponent} from './components/client/resultat/ressourcespersonnalisees/res-per-operation/res-per-operation.component';
import {ResPerCultureComponent} from './components/client/resultat/ressourcespersonnalisees/res-per-culture/res-per-culture.component';
import {ResPerTechnologieComponent} from './components/client/resultat/ressourcespersonnalisees/res-per-technologie/res-per-technologie.component';
import {RecsCultureComponent} from './components/client/resultat/recommandation/recs-culture/recs-culture.component';
import {RecsStrategieComponent} from './components/client/resultat/recommandation/recs-strategie/recs-strategie.component';
import {RecsInfrastructureComponent} from './components/client/resultat/recommandation/recs-infrastructure/recs-infrastructure.component';
import {RecsTechnologieComponent} from './components/client/resultat/recommandation/recs-technologie/recs-technologie.component';
import {RecsOperationComponent} from './components/client/resultat/recommandation/recs-operation/recs-operation.component';
import {RecsGeneralComponent} from './components/client/resultat/recommandation/recs-general/recs-general.component';
import {StrategieLeadershipComponent} from './components/client/questions/strategie-leadership/strategie-leadership/strategie-leadership.component';
import {ContactezNousComponent} from './components/shared/apropos/contactez-nous/contactez-nous.component';
import {AdminGuard} from './components/shared/guards/admin.guard';
import {ClientGuard} from './components/shared/guards/client.guard';
import {ExpertGuard} from './components/shared/guards/expert.guard';
import { LogoutComponent } from './components/shared/login/logout/logout.component';
import { AxeComponent } from './components/expert/axe/axe.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'typeorganisation', component: OrganisationTypeComponent},
  {path: 'infoclient', component: InfoClientComponent},
  {path: 'propos', component: AproposComponent},
  {path: 'contactez-nous', component: ContactezNousComponent},
  {path: 'formulaire', component: FormulaireContactComponent},
  {path: 'ressource', component: RessourcesComponent},

  {path: 'infoperso', component: InfoPersoComponent},
  {path: 'infoentrp', component: InfoEntrpComponent},
  {path: 'infoentrptwo', component: InfoEntrpTwoComponent},

  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},

  {path: 'score', component: ScoreComponent},

  {path: 'straLead', component: StrategieLeadershipComponent, canActivate: [ClientGuard]},
  {path: 'infrainfo', component: InfraInfoComponent, canActivate: [ClientGuard]},
  {path: 'techservice', component: TechServiceComponent, canActivate: [ClientGuard]},
  {path: 'cultinnov', component: CultInnovComponent, canActivate: [ClientGuard]},
  {path: 'operationproc', component: OprerationProcComponent, canActivate: [ClientGuard]},

   
  {path: 'question', component: QuestionComponent, canActivate: [ExpertGuard]},
  {path: 'recommandation', component: RecommandationComponent, canActivate: [ExpertGuard]},
  {path: 'reponse/:id', component: ReponsesComponent, canActivate: [ExpertGuard]},
  {path: 'axe', component: AxeComponent, canActivate: [ExpertGuard]},

  {path: 'list-exp', component: ExpertListComponent, canActivate: [AdminGuard]},
  {path: 'create-exp', component: ExpertCreateComponent, canActivate: [AdminGuard]},
  {path: 'detail-exp/:id', component: ExpertDetailComponent, canActivate: [AdminGuard]},
  {path: 'edit-exp/:id', component: ExpertEditComponent, canActivate: [AdminGuard]},
  {path: 'delete-exp', component: ExpertDeleteComponent, canActivate: [AdminGuard]},

  {path: 'axesevaluation', component: AxesEvaluationComponent},
  {path: 'evolution', component: EvolutionComponent},
  {path: 'comparaison', component: ComparaisonComponent},

  {path: 'resPerStr', component: ResPerStrategieComponent},
  {path: 'resPerInf', component: ResPerInfrastructureComponent},
  {path: 'resPerOper', component: ResPerOperationComponent},
  {path: 'resPerTech', component: ResPerTechnologieComponent},
  {path: 'resPerCult', component: ResPerCultureComponent},

  {path: 'resStr', component: RecsStrategieComponent},
  {path: 'resInf', component: RecsInfrastructureComponent},
  {path: 'resOper', component: RecsOperationComponent},
  {path: 'resTech', component: RecsTechnologieComponent},
  {path: 'resCul', component: RecsCultureComponent},
  {path: 'resGen', component: RecsGeneralComponent},
  {path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
