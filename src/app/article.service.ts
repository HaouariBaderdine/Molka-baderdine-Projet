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

 
  getArticleByMatricule(mat : number){
      
    for(let i=0;i<this.lesArticles.length;i++)
    {
    if(this.lesArticles[i].matricule==mat)
    {
      return (this.lesArticles[i]);
    }
  }
 }

addArticle(x:number,a:String,b:String,c: number,d:number,e: String,f: Date,g: boolean,h: number)
  {
    this.lesArticles.push(new article(x,a,b,c,e,f,g,h));
  }

mofifierArticle(a:String,b:String,c: number,e: String,f: Date,g: boolean,h: number)
  {} 

supprimerArticle(index:number)
{
  this.lesArticles.splice(index,1);
}

  constructor() { }
}
