import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  etudiants :  Etudiant[];

  constructor( private etudiantService : EtudiantService, private router: Router) { }

  ngOnInit(): void {
    this.getEtudiants();
  }
  private getEtudiants(){
    this.etudiantService.getEtudiantsList().subscribe( data => {
        this.etudiants = data;
        console.log(this.etudiants);
    });
  }

  
  updateEtudiant(id : number){
    this.router.navigate(['update', id]);
  }
  deleteEtudiant(id : number){
    this.etudiantService.deleteEtudiant(id).subscribe(
      data => 
      {
        console.log(data);
        this.getEtudiants();}
        );
  }
}
