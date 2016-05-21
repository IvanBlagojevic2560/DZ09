import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { FormComponent } from './registracija/registracija.component';
import { FormComponent2 } from './login/login.component';


@Component({
    selector: 'moja-aplikacija',
	templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([

  {path:'/registracija', name:'Registracija', component: FormComponent},
  {path:'/login', name:'Login', component: FormComponent2},
])

export class AppComponent {
}
