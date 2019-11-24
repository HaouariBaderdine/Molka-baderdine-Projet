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

  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.articles=this.articleService.lesArticles;
  }

  supprimer(index:number){
    this.articleService.supprimerArticle(index)
  }

}
