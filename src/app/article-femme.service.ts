import { Injectable } from '@angular/core';
import { article } from './articleClass';

@Injectable({
  providedIn: 'root'
})
export class ArticleFemmeService {

  
  articlesFemme:article[]= [
    new article(1,"Pull col roulé","../assets/article_femme/a1.jpg",20450 ,"Acrylique",new Date(2018,5,27),true,0),
    new article(2,"Robe longue ","../assets/article_femme/a2.jpg",45000 ,"Polyster",new Date(2017,5,6),true,0),
    new article(3,"Pull en maille fine","../assets/article_femme/a3.jpg",20504 ,"Polyster",new Date(2019,10,27),false,0),
    new article(4,"Manteau en laine","../assets/article_femme/a4.jpg",20100 ,"Laine",new Date(2018,9,13),false,10)
  ];
 
  getArticleByMatriculeF(mat : number){
      
    for(let i=0;i<this.articlesFemme.length;i++)
    {
    if(this.articlesFemme[i].matricule==mat)
    {
      return (this.articlesFemme[i]);
    }
  }
  return null;
 }

addArticleF(x:number,a:String,b:String,c: number,d:number,e: String,f: Date,g: boolean,h: number)
  {
    if(this.getArticleByMatriculeF(x)==null)
    {
    this.articlesFemme.push(new article(x,a,b,c,e,f,g,h));
    return true;
    }else{
      return false;
    }
  }

supprimerArticleF(index:number)
{
  this.articlesFemme.splice(index,1);
}

getLastMatriculeF(){
  return this.articlesFemme[this.articlesFemme.length-1].matricule;
}

addArticleFemme(nom:String,image:String,prix:number,type:String,solde:boolean,personatge:number)
{
  if((this.getArticleByMatriculeF(this.getLastMatriculeF()))==null)
  {
    return false;
  }else{
    this.articlesFemme.push(new article(this.getLastMatriculeF()+1,nom,image,prix,type,new Date(2017,4,15),solde,personatge));
    return true;
  }
}
public modifierArticleF(mat:number, nom:String,image:String,prix:number,type:String,date:Date,solde:boolean,personatge:number){

  const x=this.getArticleByMatriculeF(mat);
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
