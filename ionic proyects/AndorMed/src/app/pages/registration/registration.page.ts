import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registrationForm!: FormGroup;
  selectedUserType!: string;

  constructor(private formBuilder: FormBuilder) {
    //this.selectedUserType = 'patient';
  }

  ngOnInit() {
    this.buildRegistrationForm();
  }

  buildRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      // Add other fields for each user type
    });
  }

  register() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Handle registration logic based on the selectedUserType
      switch (this.selectedUserType) {
        case 'patient':
          // Handle patient registration
          break;
        case 'doctor':
          // Handle doctor registration
          break;
        case 'admin':
          // Handle admin registration
          break;
      }
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
