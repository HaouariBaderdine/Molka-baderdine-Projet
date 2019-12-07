import { Pipe, PipeTransform } from '@angular/core';
import { article } from './articleClass';

@Pipe({
  name: 'articleFilter1'
})
export class ArticleFilter1Pipe implements PipeTransform {

  transform( articles: article[],nom:String ): article[] {

    if(!articles || !nom){
      return articles;
    }

    return articles.filter(articles=>articles.nom.toLowerCase().indexOf(nom.toLowerCase())!== -1);
  }
}
