import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    secondLastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(15)]),
    genre: new FormControl('', [Validators.required]),
    medicaSpecialisation: new FormControl('', [Validators.required]),
    medicalCenter: new FormControl('', [Validators.required]),
  
  });

  constructor(private router: Router, private route: ActivatedRoute) { }

  registerbutton() {
    console.log(this.registerForm.value);
    if(this.registerForm.valid){   //valida que el formulario sea valido y si lo es pasaremos a iniciar sesion
      this.router.navigate(['login', this.registerForm.value]);
    }else{
      alert('Registro invalido');
    }
  }
}
