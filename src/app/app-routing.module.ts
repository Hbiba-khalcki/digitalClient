import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CultInnovComponent } from './components/client/culture-innovation/cult-innov/cult-innov.component';
import { InfraInfoComponent } from './components/client/infrastructure-informatique/infra-info/infra-info.component';
import { OprerationProcComponent } from './components/client/operation-processus/opreration-proc/opreration-proc.component';
import { InfoClientComponent } from './components/client/renseignements/info-client/info-client.component';
import { OrganisationTypeComponent } from './components/client/renseignements/organisation-type/organisation-type.component';
import { FirstComponentComponent } from './components/client/strategie-leadership/first-component/first-component.component';
import { TechServiceComponent } from './components/client/technologies-services/tech-service/tech-service.component';
import { HomeComponent } from './components/shared/home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'typeorganisation', component:OrganisationTypeComponent},
  {path:'infoclient', component:InfoClientComponent},
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
