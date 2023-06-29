import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost/api'; // URL del servidor PHP

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    // Realiza una solicitud HTTP POST al servidor PHP
    return this.http.post(`${this.apiUrl}/login.php`, { email, password });
  }

  register(formData: any) {
    return this.http.post(`${this.apiUrl}/register.php`, formData);
  }
}
