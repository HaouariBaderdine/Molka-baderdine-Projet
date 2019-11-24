import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import { compte } from '../loginClass';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:String="";
  password:String="";
  verifier:boolean=false;
  constructor(private logService:LogService) { }
  comptes:compte[];

  ngOnInit() {
    this.comptes=this.logService.lesComptes;
  }
  onCnnecte() {
    if((this.logService.connecter(this.name,this.password))==true)
    {
      console.log("Log in coorecte");
      this.verifier=true;
    }else{
      console.log("retapper vos données");
      this.verifier=false;
    }
  }

}
