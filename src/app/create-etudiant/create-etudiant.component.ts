import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css']
})
export class CreateEtudiantComponent implements OnInit {
  etudiant : Etudiant = new Etudiant();
  constructor( private etudiantService : EtudiantService, private router : Router) { }

  ngOnInit(): void {
  }
  saveEtudiant(){
    this.etudiantService.createEtudiant(this.etudiant).subscribe(
      data => {
        console.log(data);
        this.goToEtudiantslist();
      },
      error => console.log(error));
  }
  goToEtudiantslist(){
    this.router.navigate(["/etudiants"]);
  }
  onSubmit(){
    console.log(this.etudiant);
    this.saveEtudiant();
  }

}
