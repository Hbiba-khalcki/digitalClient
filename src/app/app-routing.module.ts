import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CultInnovComponent } from './components/client/culture-innovation/cult-innov/cult-innov.component';
import { InfraInfoComponent } from './components/client/infrastructure-informatique/infra-info/infra-info.component';
import { OprerationProcComponent } from './components/client/operation-processus/opreration-proc/opreration-proc.component';
import { InfoClientComponent } from './components/client/renseignements/info-client/info-client.component';
import { InfoEntrpTwoComponent } from './components/client/renseignements/info-entrp-two/info-entrp-two.component';
import { InfoEntrpComponent } from './components/client/renseignements/info-entrp/info-entrp.component';
import { InfoPersoComponent } from './components/client/renseignements/info-perso/info-perso.component';
import { OrganisationTypeComponent } from './components/client/renseignements/organisation-type/organisation-type.component';
import { ScoreComponent } from './components/client/resultat/score/score.component';
import { FirstComponentComponent } from './components/client/strategie-leadership/first-component/first-component.component';
import { TechServiceComponent } from './components/client/technologies-services/tech-service/tech-service.component';
import { HomeComponent } from './components/shared/home/home.component';
import { SigninComponent } from './components/shared/login/signin/signin.component';
import { SignupComponent } from './components/shared/login/signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'typeorganisation', component:OrganisationTypeComponent},
  {path:'infoclient', component:InfoClientComponent},
  {path:'sectionOne', component:FirstComponentComponent},
  {path:'infrainfo', component:InfraInfoComponent},
  {path:'techservice', component:TechServiceComponent},
  {path:'cultinnov' , component:CultInnovComponent },
  {path:'operationproc', component:OprerationProcComponent},
  {path:'infoperso' , component:InfoPersoComponent},
  {path:'infoentrp', component:InfoEntrpComponent},
  {path:'infoentrptwo', component:InfoEntrpTwoComponent},
  {path:'signin' , component:SigninComponent},
  {path:'signup' , component:SignupComponent},
  {path:'score', component:ScoreComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
