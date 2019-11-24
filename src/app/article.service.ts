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

  articlesFemme:article[]= [
    new article(10,"femme1","../assets/image1.jpg",20450 ,"type1",new Date(2018,5,27),true,0),
    new article(20,"femme3","../assets/image1.jpg",45000 ,"type2",new Date(2017,5,6),true,0),
    new article(30,"femme2","../assets/image1.jpg",20504 ,"type3",new Date(2019,10,27),false,0),
    new article(40,"femme4","../assets/image1.jpg",20100 ,"type4",new Date(2018,9,13),false,10)
  ];

  private _sexe: String;
  public get sexe(): String {
    return this._sexe;
  }
  public set sexe(value: String) {
    this._sexe = value;
  }


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
