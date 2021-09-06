import {ResPerInfrastructureComponent} from './components/client/resultat/ressourcespersonnalisees/res-per-infrastructure/res-per-infrastructure.component';
import {RessourcesComponent} from './components/shared/ressources/ressources.component';
import {FormulaireContactComponent} from './components/shared/formulaire-contact/formulaire-contact.component';
import {AproposComponent} from './components/shared/apropos/apropos.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfoClientComponent} from './components/client/renseignements/info-client/info-client.component';
import {InfoEntrpTwoComponent} from './components/client/renseignements/info-entrp-two/info-entrp-two.component';
import {InfoEntrpComponent} from './components/client/renseignements/info-entrp/info-entrp.component';
import {OrganisationTypeComponent} from './components/client/renseignements/organisation-type/organisation-type.component';
import {ScoreComponent} from './components/client/resultat/score/score.component';
import {HomeComponent} from './components/shared/home/home.component';
import {SigninComponent} from './components/shared/login/signin/signin.component';
import {SignupComponent} from './components/shared/login/signup/signup.component';
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
import { MenuComponent } from './components/expert/menu/menu.component';
import { ListeAxeComponent } from './components/expert/axe/liste-axe/liste-axe.component';
import { AjoutAxeComponent } from './components/expert/axe/ajout-axe/ajout-axe.component';
import { ListeQuestionComponent } from './components/expert/question/liste-question/liste-question.component';
import { ModifAxeComponent } from './components/expert/axe/modif-axe/modif-axe.component';
import { ModifQuestionComponent } from './components/expert/question/modif-question/modif-question.component';
import { AjoutQuestionComponent } from './components/expert/question/ajout-question/ajout-question.component';
import { ListeReponseComponent } from './components/expert/reponses/liste-reponse/liste-reponse.component';
import { AjoutReponseComponent } from './components/expert/reponses/ajout-reponse/ajout-reponse.component';
import { ModifReponseComponent } from './components/expert/reponses/modif-reponse/modif-reponse.component';
import { ListeRecommandationComponent } from './components/expert/recommandation/liste-recommandation/liste-recommandation.component';
import { AjoutRecommandationComponent } from './components/expert/recommandation/ajout-recommandation/ajout-recommandation.component';
import { ModifRecommandationComponent } from './components/expert/recommandation/modif-recommandation/modif-recommandation.component';
import { ListeRessourceComponent } from './components/expert/ressources/liste-ressource/liste-ressource.component';
import { AjoutRessourceComponent } from './components/expert/ressources/ajout-ressource/ajout-ressource.component';
import { ModifRessourceComponent } from './components/expert/ressources/modif-ressource/modif-ressource.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'typeorganisation', component: OrganisationTypeComponent},
  {path: 'infoclient', component: InfoClientComponent},
  {path: 'propos', component: AproposComponent},
  {path: 'contactez-nous', component: ContactezNousComponent},
  {path: 'formulaire', component: FormulaireContactComponent},
  {path: 'ressource', component: RessourcesComponent},

  {path: 'infoentrp', component: InfoEntrpComponent},
  {path: 'infoentrptwo', component: InfoEntrpTwoComponent},

  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},

  {path: 'score', component: ScoreComponent},

  /* ********Admin*********** */
  {path: 'list-exp', component: ExpertListComponent, canActivate: [AdminGuard]},
  {path: 'create-exp', component: ExpertCreateComponent, canActivate: [AdminGuard]},
  {path: 'detail-exp/:id', component: ExpertDetailComponent, canActivate: [AdminGuard]},
  {path: 'edit-exp/:id', component: ExpertEditComponent, canActivate: [AdminGuard]},
  {path: 'delete-exp', component: ExpertDeleteComponent, canActivate: [AdminGuard]},

  /* ********Expert*********** */
  {path: 'MenuAffichage', component: MenuComponent, canActivate: [ExpertGuard]},
  /* Partie Axe Expert */
  {path: 'ListAxe', component: ListeAxeComponent, canActivate: [ExpertGuard]},
  {path: 'AjoutAxe', component: AjoutAxeComponent, canActivate: [ExpertGuard]},
  {path: 'ModifAxe/:id', component: ModifAxeComponent, canActivate: [ExpertGuard]},

  /* Partie Question Expert */
  {path: 'ListQuest', component: ListeQuestionComponent, canActivate: [ExpertGuard]},
  {path: 'AjoutQuest', component: AjoutQuestionComponent, canActivate: [ExpertGuard]},
  {path: 'ModifQuest', component: ModifQuestionComponent, canActivate: [ExpertGuard]},

  /* Partie Reponse Expert */
  {path: 'ListRep', component: ListeReponseComponent, canActivate: [ExpertGuard]},
  {path: 'AjoutRep/:id', component: AjoutReponseComponent, canActivate: [ExpertGuard]},
  {path: 'ModifRep/:id', component: ModifReponseComponent, canActivate: [ExpertGuard]},

  /* Partie Recommandation Expert */
  {path: 'ListRec', component: ListeRecommandationComponent, canActivate: [ExpertGuard]},
  {path: 'AjoutRec', component: AjoutRecommandationComponent, canActivate: [ExpertGuard]},
  {path: 'ModifRec/:id', component: ModifRecommandationComponent, canActivate: [ExpertGuard]},

  /* Partie Ressource Expert */
  {path: 'ListRes', component: ListeRessourceComponent, canActivate: [ExpertGuard]},
  {path: 'AjoutRes', component: AjoutRessourceComponent, canActivate: [ExpertGuard]},
  {path: 'ModifRes/:id', component: ModifRessourceComponent, canActivate: [ExpertGuard]},

  /* ********Client*********** */
  {path: 'questions/:order', component: StrategieLeadershipComponent, canActivate: [ClientGuard]},
   
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
