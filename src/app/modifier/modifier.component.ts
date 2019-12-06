import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ArticleFemmeService } from '../article-femme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  constructor(private serviceHomme:ArticleService,private serviceFemme:ArticleFemmeService,private router:Router) { }
  ngOnInit() {
    this.articles=this.serviceHomme.lesArticles;
    this.articlesF=this.serviceFemme.articlesFemme;
  }

  types:String[]=["Acrylique","Cotton","Polyster","Laine"];
  articles: any;
  articlesF:any;

  //attribut sexe
  sexe:string="Femme";

 // attributs de formilaire
 nom:String="Nom d'article";
 image:String="Chemin d'image ";
 prix:number= 0 ;
 type:String=" type d'article";
 date: any=" Date de Fabrication";
 promos:boolean=false;
 pers:number=0;
 //
 submitted:boolean=false;
 message:String="";
 //
  selectArticle:number;
  

  //fonction onchange pour les inputs
  onChangeS(f:any){

    const x=this.serviceHomme.getArticleByMatricule(this.selectArticle);
    console.log(this.selectArticle);
    console.log(x.nom);

    if(x!=null){
      this.nom=x.nom;
      this.image=x.image;
      this.prix=x.prix;
      this.type=x.type;
      this.date=x.dateFabrication;
      this.promos=x.promos;
      this.pers=x.percontage;
    }else{
      console.log("faux");
    }

  }
  onChangeF(f:any){

    const x=this.serviceFemme.getArticleByMatriculeF(this.selectArticle);
    console.log(this.selectArticle);
    console.log(x.nom);

    if(x!=null){
      this.nom=x.nom;
      this.image=x.image;
      this.prix=x.prix;
      this.type=x.type;
      this.date=x.dateFabrication;
      this.promos=x.promos;
      this.pers=x.percontage;
    }else{
      console.log("faux");
    }

  }

  onSexe(){
    if(this.sexe=="Homme"){
   return this.router.navigate(['/listeHomme']);}
  else {
  return this.router.navigate(['/listeFemme']);}
}
  onChange()
  {
  
    if(this.sexe=="Homme"){

  if(this.serviceHomme.modifierArticle(this.selectArticle,this.nom,this.image,this.prix,this.type,this.date,this.promos,this.pers)
  ){
  this.submitted=true; 
  this.onSexe();}
}else{
  if(this.serviceFemme.modifierArticleF(this.selectArticle,this.nom,this.image,this.prix,this.type,this.date,this.promos,this.pers)
  ){
  this.submitted=true; 
  this.onSexe();
 }
}}
}
