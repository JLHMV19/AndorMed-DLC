import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
//permite obtener los datos de todo el componente como parametros mediante las ruta

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('')
  });

  constructor(private router: Router, private route: ActivatedRoute) { }

  login() {
    console.log(this.loginForm.value);
    if(this.loginForm.valid){   //valida que el formulario sea valido y si lo es pasaremos a home
      this.router.navigate(['start', this.loginForm.value /* {id: 12345, name: 'jose', lastname: 'perez'} */]);
    }else{
      alert('Formulario invalido');
    }
  }

}
