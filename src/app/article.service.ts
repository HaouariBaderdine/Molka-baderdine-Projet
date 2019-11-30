import { Injectable } from '@angular/core';
import { article } from './articleClass';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  lesArticles:article[]= [
    new article(1,"article1","../assets/image1.jpg",200 ,"type1",new Date(2017,4,15),true,40),
    new article(2,"article2","../assets/image1.jpg",4500 ,"type2",new Date(2018,5,25),true,10),
    new article(3,"article3","../assets/image1.jpg",2054 ,"type3",new Date(2019,5,5),false,0),
    new article(4,"article4","../assets/image1.jpg",2010 ,"type4",new Date(2017,2,26),false,0)
  ];

 /*   retourner l'objet dont la matricule donne en parametre */ 
  getArticleByMatricule(mat : number){
      
    for(let i=0;i<this.lesArticles.length;i++)
    {
    if(this.lesArticles[i].matricule==mat)
    {
      return (this.lesArticles[i]);
    }
  } return null;
 }


  getLastMatricule(){
    return this.lesArticles[this.lesArticles.length-1].matricule;
  }

  addArticleHomme1(nom:String,image:String,prix:number,type:String,solde:boolean,personatge:number)
  {
    if((this.getArticleByMatricule(this.getLastMatricule()))==null)
    {
      return false;
    }else{
      this.lesArticles.push(new article(this.getLastMatricule()+1,nom,image,prix,type,new Date(2017,4,15),solde,personatge));
      return true;
    }
  }

  addArticleHomme(nom:String,image:String,prix:number,type:String,date:Date,solde:boolean,personatge:number)
  {
    if((this.getArticleByMatricule(this.getLastMatricule()))==null)
    {
      return false;
    }else{
      this.lesArticles.push(new article(this.getLastMatricule()+1,nom,image,prix,type,date,solde,personatge));
      return true;
    }
  }

mofifierArticle(nom:String,image:String,prix:number,type:String,solde:boolean,personatge:number)
  {
    return this.lesArticles;
  } 

supprimerArticle(index:number)
{
  this.lesArticles.splice(index,1);
}

  constructor() { }
}
