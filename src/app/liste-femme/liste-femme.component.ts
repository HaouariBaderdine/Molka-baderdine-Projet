import { Component, OnInit } from '@angular/core';
import { article } from '../articleClass';
import { ArticleFemmeService } from '../article-femme.service';

@Component({
  selector: 'app-liste-femme',
  templateUrl: './liste-femme.component.html',
  styleUrls: ['./liste-femme.component.css']
})
export class ListeFemmeComponent implements OnInit {

  articlesFemme:article[];
  test:boolean=false;

  constructor(private articleServiceFemme:ArticleFemmeService) { }

  ngOnInit() {
    this.articlesFemme = this.articleServiceFemme.articlesFemme;
    console.log(this.articlesFemme[1].matricule);
  }
  
  /* Rechercher */
  nom1:String;
  private _nom: String;
  public get nom(): String {
    return this._nom;
  }
  public set nom(value: String) {
    this._nom = value;
  }


  /* supprimer ligne d'Articles */
  supprimer(index:number){
    this.articleServiceFemme.supprimerArticleF(index);
  }
}
