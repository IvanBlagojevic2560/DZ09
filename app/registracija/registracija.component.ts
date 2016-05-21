import { Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'
import{Component} from "angular2/core";

@Component({
  selector: 'FormPage',
  templateUrl: 'app/form/registracija.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class FormComponent {

  registerForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
    this.registerForm = builder.group({
     korisnicko_ime: ["", Validators.none],
     sifra: ["", Validators.none],
     email: ["", Validators.none],
     
   });
  }

  onRegister(): void {
	var data = "korisnicko_ime="+this.registerForm.value.korisnicko_ime+"&sifra="+this.registerForm.value.sifra+"&email="+this.registerForm.value.email;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/it255/php/registracija.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err => alert(JSON.stringify(err)),
	() => {
	 if(this.postResponse._body == "ok"){
	 alert("Uspesna registracija");
	    this.router.parent.navigate(['./app']);
	 }else{
		alert("Neuspesna registracija");
	 }
	 }
	);

  }
}
