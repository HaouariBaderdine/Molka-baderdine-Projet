import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { article } from '../articleClass';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  mat:number;
  x:article;

  constructor(private activatedRoute:ActivatedRoute,
             private serviceHomme:ArticleService) { }

  ngOnInit() {
    this.mat=this.activatedRoute.snapshot.params['matricule'];
    this.x=this.serviceHomme.getArticleByMatricule(this.mat);
  }

}
