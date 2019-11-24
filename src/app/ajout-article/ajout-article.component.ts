import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {

  types:String[]=["type1","type2","type3","type4"];

  constructor() { }

  ngOnInit() {
  }

}
