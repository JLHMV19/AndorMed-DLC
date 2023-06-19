import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  loginForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  });

  constructor(private router: Router, private route: ActivatedRoute) { }

  loginButton() {
    console.log(this.loginForm.value);
    if(this.loginForm.valid){   //valida que el formulario sea valido y si lo es pasaremos a home
      this.router.navigate(['/start', this.loginForm.value]);
    }else{
      alert('Formulario invalido');
    }
  }

}
