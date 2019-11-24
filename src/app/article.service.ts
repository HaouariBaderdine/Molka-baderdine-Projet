import { Injectable } from '@angular/core';
import { article } from './articleClass';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  lesArticles:article[]= [
    new article(1,"article1","../assets/image1.jpg",200 ,"type1",'27/10/2018',true,40),
    new article(2,"article2","../assets/image1.jpg",4500 ,"type2",'21/02/2019',true,10),
    new article(3,"article3","../assets/image1.jpg",2054 ,"type3","01/01/2020",false,0),
    new article(4,"article4","../assets/image1.jpg",2010 ,"type4","14/07/2017",false,0)
  ];

  getArticleByMatricule(mat : number){
      
    for(let i=0;i<this.lesArticles.length;i++)
    {
    if(this.lesArticles[i].matricule==mat)
    {
      return (this.lesArticles[i]);
    }
  }
 }

addArticle(x:number,a:String,b:String,c: number,d:number,e: String,f: String,g: boolean,h: number)
  {
    this.lesArticles.push(new article(x,a,b,c,e,f,g,h));
  }

mofifierArticle(a:String,b:String,c: number,e: String,f: String,g: boolean,h: number)
  {} 

supprimerArticle(index:number)
{
  this.lesArticles.splice(index,1);
}

  constructor() { }
}
