import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { article } from '../articleClass';


@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {

  articles:article[];
  test:boolean=false;
  private  _nom:String;
  nom1:String;

  constructor(private articleService:ArticleService) { }

  supprimer(index:number){
    var c=prompt(" Voulez vous supprimez l'article",c);
    if(c=="oui"){
    this.articleService.supprimerArticle(index)}
  }

  get nom(){
    return this._nom;
  }
  set nom(value: String){
    this._nom = value;
  }

  ngOnInit() {
    this.articles=this.articleService.lesArticles;
  }
  

  


}
