import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from './etudiant';
const optionRequete = new HttpHeaders().set("Acces-Control-Allow-Origin", "*");
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseURL = "http://localhost:8080/etudiants/api/";

  constructor( private httpClient: HttpClient) { }

  getEtudiantsList(): Observable<Etudiant[]>{
    return this.httpClient.get<Etudiant[]>(`${this.baseURL}`);
  }

  createEtudiant(etudiant: Etudiant): Observable<Object>{

    return this.httpClient.post(`${this.baseURL}`, etudiant);
  }

  getEtudiantById (id : number): Observable<Etudiant>{
    return this.httpClient.get<Etudiant>(`${this.baseURL}/${id}`);
  }

  updateEtudiant(id: number, etudiant: Etudiant): Observable<Etudiant>{
    //return this.httpClient.put<Etudiant>(`${this.baseURL}${id}`, JSON.stringify(etudiant));
    return this.httpClient.put<Etudiant>(this.baseURL + id, etudiant);
  }

  deleteEtudiant (id: number): Observable<Object>{
    return this.httpClient.delete(this.baseURL + id);
  }

}
