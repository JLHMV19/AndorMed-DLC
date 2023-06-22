import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public isLoggedIn = false;

  constructor() { }

  isAutenticated(){
    return this.isLoggedIn;
  }

}
