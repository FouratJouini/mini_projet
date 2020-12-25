import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';

const routes: Routes = [
  {
    path: 'etudiants', component: EtudiantListComponent
  },
  {
    path : 'create', component: CreateEtudiantComponent
  },
  {
    path : '', redirectTo: 'etudiants', pathMatch: 'full'
  },
  {
    path : 'update/:id', component: UpdateEtudiantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
