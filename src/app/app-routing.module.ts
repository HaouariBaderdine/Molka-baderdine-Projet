import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { SupprimeComponent } from './supprime/supprime.component';
import { LoginComponent } from './login/login.component';
import { ListeFemmeComponent } from './liste-femme/liste-femme.component';


const routes: Routes = [
  {path:'Accueil', component:AccueilComponent},  
  {path:'login', component:LoginComponent},
  {path:'ajouter', component:AjoutArticleComponent}, 
  {path:'liste', component:ListeArticleComponent},  
  {path:'listeFemme', component:ListeFemmeComponent},
  {path:'detail/:matricule', component:DetailComponent}, 
  {path:'supprimer', component:SupprimeComponent},  
  {path:'', redirectTo:'Accueil', pathMatch:'full'} ,
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
