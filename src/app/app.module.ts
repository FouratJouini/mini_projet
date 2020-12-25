import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import {FormsModule} from '@angular/forms';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantListComponent,
    CreateEtudiantComponent,
    UpdateEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
