import { CultInnovComponent } from './components/client/culture-innovation/cult-innov/cult-innov.component';
import { RessourcesComponent } from './components/shared/ressources/ressources.component';
import { FormulaireContactComponent } from './components/shared/formulaire-contact/formulaire-contact.component';
import { ContactezNousComponent } from './components/shared/contactez-nous/contactez-nous.component';
import { AproposComponent } from './components/shared/apropos/apropos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoClientComponent } from './components/client/renseignements/info-client/info-client.component';
import { OrganisationTypeComponent } from './components/client/renseignements/organisation-type/organisation-type.component';
import { HomeComponent } from './components/shared/home/home.component';
import { QuestionComponent } from './components/expert/question/question.component';
import { RecommandationComponent } from './components/expert/recommandation/recommandation.component';
import { FirstComponentComponent } from './components/client/strategie-leadership/first-component/first-component.component';
import { InfraInfoComponent } from './components/client/infrastructure-informatique/infra-info/infra-info.component';
import { TechServiceComponent } from './components/client/technologies-services/tech-service/tech-service.component';
import { OprerationProcComponent } from './components/client/operation-processus/opreration-proc/opreration-proc.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'typeorganisation', component:OrganisationTypeComponent},
  {path:'infoclient', component:InfoClientComponent},
  {path:'propos', component:AproposComponent},
  {path:'contactez-nous', component: ContactezNousComponent},
  {path:'formulaire', component: FormulaireContactComponent},
  {path:'ressource', component: RessourcesComponent},
  {path:'question', component: QuestionComponent},
  {path:'recommandation', component: RecommandationComponent},
  
  
  {path:'sectionOne', component:FirstComponentComponent},
  {path:'infrainfo', component:InfraInfoComponent},
  {path:'techservice', component:TechServiceComponent},
  {path:'cultinnov' , component:CultInnovComponent },
  {path:'operationproc', component:OprerationProcComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
