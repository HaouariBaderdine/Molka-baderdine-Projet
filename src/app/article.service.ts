import { Injectable } from '@angular/core';
import { article } from './articleClass';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  lesArticles:article[]= [
    new article(1,"Veste de smoking Skinny Fit","../assets/article_homme/a1.jpg",800 ,"Polyester",new Date(2017,4,15),true,40),
    new article(2,"Chemise à carreaux","../assets/article_homme/a2.jpg",200 ,"Coton ",new Date(2018,5,25),true,10),
    new article(3,"Pull col roulé en maille ","../assets/article_homme/a3.jpg",150 ,"Coton ",new Date(2019,5,5),false,0),
    new article(4,"Sweat à capuche avec motif","../assets/article_homme/a4.jpg",300 ,"Coton",new Date(2017,2,26),false,0)
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



supprimerArticle(index:number)
{
  this.lesArticles.splice(index,1);
}
public modifierArticle(mat:number, nom:String,image:String,prix:number,type:String,date:Date,solde:boolean,personatge:number){

  const x=this.getArticleByMatricule(mat);
  if(x!=null)
  {
    x.nom=nom;
    x.image=image;
    x.prix=prix;
    x.type=type;
    x.dateFabrication=date;
    x.promos=solde;
    x.percontage=personatge;

    return true;
  }else{
    return false;
  }
  
}
  constructor() { }
}
