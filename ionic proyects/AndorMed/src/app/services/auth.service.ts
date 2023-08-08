import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://andormed-backend.onrender.com'; // URL del servidor Node.js
  apiUrl2 = 'http://localhost:3000'; // URL del servidor Node.js
  private token: string = '';

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  setToken(token: string) {
    this.token = token;
  }

  login(user: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl2}/login`, { nombreUsuario: user, contraseña: password });
  }

  register(formData: any) {
    return this.http.post(`${this.apiUrl2}/usuario`, formData);
  }

  getUserDetails(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}` // Incluye el token JWT en el encabezado de autorización
    });
    const options = { headers: headers };
  
    return this.http.get(`${this.apiUrl}/getUserByToken`, options);
  }

  saveDoctorDetails(formData: any): Observable<any> {
    // Cambia esto por el método correcto para obtener el ID del usuario
    const userId = this.getUserId(); 
    formData.usuarios_idusuarios = userId;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}` // Incluye el token JWT en el encabezado de autorización
    });
    const options = { headers: headers };
    return this.http.post(`${this.apiUrl2}/doctor`, formData, options);
  }

  mostrarPacientes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/mostrarPacientes`);
  }

  logout() {
    // Elimina el token del almacenamiento local
    localStorage.removeItem('token');
  }

  getUserId(): number {
    // Agrega aquí la lógica para obtener el ID del usuario actual
    // Por ejemplo, si tienes la información del usuario en el token, puedes extraer el ID desde allí
    // O si tienes un servicio que te proporciona el ID del usuario, puedes usarlo aquí
    // Ejemplo hipotético:
    // return this.http.get<number>(`${this.apiUrl2}/getUserID`, { headers: { Authorization: `Bearer ${this.token}` } });
    return 0; // Cambia esto al valor real del ID del usuario
  }
}
