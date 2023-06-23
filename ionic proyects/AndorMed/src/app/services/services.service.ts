import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public isLoggedIn = false;

  login() {
    // Lógica de inicio de sesión...
    // Si el inicio de sesión es exitoso, establece isLoggedIn en true
    this.isLoggedIn = true;
  }


  constructor() { }

  isAutenticated(){
    return this.isLoggedIn;
  }

}
