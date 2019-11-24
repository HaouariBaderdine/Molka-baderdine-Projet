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

  constructor(private articleService:ArticleService) { }

 search(){
   if(this.nom!=""){
    this.articles = this.articles.filter(res=>{
    return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
  } );
}}

  supprimer(index:number){
    this.articleService.supprimerArticle(index)
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
