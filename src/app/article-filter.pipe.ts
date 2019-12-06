import { Pipe, PipeTransform } from '@angular/core';
import { article } from './articleClass';

@Pipe({
  name: 'articleFilter'
})
export class ArticleFilterPipe implements PipeTransform {

  transform( articles: article[],nom1:String ): article[] {

    if(!articles || !nom1){
      return articles;
    }

    return articles.filter(articles=>articles.type.toLowerCase().indexOf(nom1.toLowerCase())!== -1);
  }

}
