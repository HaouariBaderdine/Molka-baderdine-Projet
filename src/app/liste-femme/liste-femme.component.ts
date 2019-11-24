import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { article } from '../articleClass';

@Component({
  selector: 'app-liste-femme',
  templateUrl: './liste-femme.component.html',
  styleUrls: ['./liste-femme.component.css']
})
export class ListeFemmeComponent implements OnInit {

  articlesFemme:article[];
  test:boolean=false;
  private _nom: String;
  public get nom(): String {
    return this._nom;
  }
  public set nom(value: String) {
    this._nom = value;
  }

  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.articlesFemme = this.articleService.articlesFemme;
  }

  search(){
    if(this.nom!=""){
     this.articlesFemme = this.articlesFemme.filter(res=>{
     return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
   } );
 }}

}
