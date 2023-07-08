import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://andormed-backend.onrender.com'; // URL del servidor Node.js
  private token: string = '';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  setToken(token: string) {
    this.token = token;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { correo: email, contraseña: password });
  }

  register(formData: any) {
    return this.http.post(`${this.apiUrl}/userRegistration`, formData);
  }

  getUserDetails(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}` // Incluye el token JWT en el encabezado de autorización
    });
    const options = { headers: headers };
  
    return this.http.get(`${this.apiUrl}/getUserByToken`, options);
  }

  mostrarPacientes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/mostrarPacientes`);
  }

  logout() {
    // Elimina el token del almacenamiento local
    localStorage.removeItem('token');
  }
}

