import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { ErrorComponent } from './error/error.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ListeFemmeComponent } from './liste-femme/liste-femme.component';
import { ModifierComponent } from './modifier/modifier.component';
import { DetailFemmeComponent } from './detail-femme/detail-femme.component';
import { ArticleFilterPipe } from './article-filter.pipe';
import { ArticleFilter1Pipe } from './article-filter1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeArticleComponent,
    AjoutArticleComponent,
    ErrorComponent,
    DetailComponent,
    LoginComponent,
    MenuComponent,
    ListeFemmeComponent,
    ModifierComponent,
    DetailFemmeComponent,
    ArticleFilterPipe,
    ArticleFilter1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
