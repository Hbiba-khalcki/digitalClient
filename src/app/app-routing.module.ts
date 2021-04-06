import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoClientComponent } from './components/client/renseignements/info-client/info-client.component';
import { OrganisationTypeComponent } from './components/client/renseignements/organisation-type/organisation-type.component';
import { HomeComponent } from './components/shared/home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'typeorganisation', component:OrganisationTypeComponent},
  {path:'infoclient', component:InfoClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
