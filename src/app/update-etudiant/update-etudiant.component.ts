import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../etudiant';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  id : number;
  etudiant : Etudiant = new Etudiant(); 
  constructor( private etudiantService: EtudiantService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.etudiantService.getEtudiantById(this.id).subscribe(
      data => { this.etudiant = data;}, error => console.log(error));
  }

  onSubmit(){
    this.etudiantService.updateEtudiant(this.id, this.etudiant).subscribe(
      data => {
        this.goToEtudiantslist(); 
      }, error => console.log(error));
  }
  goToEtudiantslist(){
    this.router.navigate(["/etudiants"]);
  }

}
