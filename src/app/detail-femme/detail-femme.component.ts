import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { article } from '../articleClass';
import { ArticleFemmeService } from '../article-femme.service';

@Component({
  selector: 'app-detail-femme',
  templateUrl: './detail-femme.component.html',
  styleUrls: ['./detail-femme.component.css']
})
export class DetailFemmeComponent implements OnInit {

  mat:number;
  x:article;

  constructor(private activatedRoute:ActivatedRoute,
    private serviceFemme:ArticleFemmeService) { }

  ngOnInit() {
    this.mat=this.activatedRoute.snapshot.params['matricule'];
    this.x=this.serviceFemme.getArticleByMatriculeF(this.mat);
  }

}
