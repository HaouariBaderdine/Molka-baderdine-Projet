import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { ArticleFemmeService } from '../article-femme.service';

@Component({
  selector: 'app-ajout-article',
  templateUrl: './ajout-article.component.html',
  styleUrls: ['./ajout-article.component.css']
})
export class AjoutArticleComponent implements OnInit {

  types:String[]=["Acrylique","Cotton","Polyster","Laine"];

  //attribut sexe
  sexe:string="homme";
  // attributs de formilaire
  nom:String;
  image:String;
  prix:number;
  type:String;
  date: string | number | Date;
  promos:boolean=false;
  pers:number=0;
  //
  submitted:boolean=false;
  message:String="";
  //

  constructor(private serviceHomme:ArticleService,private serviceFemme:ArticleFemmeService,private router:Router) { }

  ngOnInit(){ 

  }
  
  //ajouter un employer
  onCreate()
  {
    console.log(this.image);
    if(this.sexe=="homme"){
    if((this.serviceHomme.addArticleHomme1(this.nom,this.image,this.prix,this.type,this.promos,this.pers))==true)
    {
    console.log("insertion d'article homme valid");
    this.submitted=true;
      }else{
       console.log(" ajout article d'homme est non valid");
      }
    }else if(this.sexe=="femme"){
      if((this.serviceFemme.addArticleFemme(this.nom,this.image,this.prix,this.type,this.promos,this.pers))==true)
    {
    console.log("insertion d'article femme valid");
    this.submitted=true;
      }else{
       console.log(" ajout d'article femme est non valid");
      }
    }
}
// functions de routing
onVueAjout(){
  this.router.navigate(['/ajouter']);
  this.submitted=false;
  this.nom="";
  this.image="";
  this.date="";
  this.prix=null;
  this.type="";
}
onVueHomme(){
  this.router.navigate(['/listeHomme']);
}
onVueFemme(){
  this.router.navigate(['/listeFemme']);
}



}


