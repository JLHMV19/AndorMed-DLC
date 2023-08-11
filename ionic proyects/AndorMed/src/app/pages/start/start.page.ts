import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  userName: any = {};

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    /*
    this.authService.getUserDetails().subscribe(
      (response: any) => {
        console.log(response);
        if (response.ok) {
          this.userName = response.response;
          console.log(this.userName);
        } else {
          console.error(response.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
    */
  }
  
  
}
