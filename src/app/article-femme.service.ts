import { Injectable } from '@angular/core';
import { article } from './articleClass';

@Injectable({
  providedIn: 'root'
})
export class ArticleFemmeService {

  
  articlesFemme:article[]= [
    new article(1001,"femme1","../assets/image1.jpg",20450 ,"type1",new Date(2018,5,27),true,0),
    new article(1002,"femme3","../assets/image1.jpg",45000 ,"type2",new Date(2017,5,6),true,0),
    new article(1003,"femme2","../assets/image1.jpg",20504 ,"type3",new Date(2019,10,27),false,0),
    new article(1004,"femme4","../assets/image1.jpg",20100 ,"type4",new Date(2018,9,13),false,10)
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

  constructor() { }
}
