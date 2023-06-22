import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registrationForm: FormGroup;
  selectedUserType: string = 'patient';

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    // No se requiere ninguna lógica adicional en el método ngOnInit en este caso
  }

  register() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Handle registration logic based on the selectedUserType
      this.handleRegistration();
    } else {
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  handleRegistration() {
    switch (this.selectedUserType) {
      case 'patient':
        this.registerPatient();
        break;
      case 'doctor':
        this.registerDoctor();
        break;
      case 'admin':
        this.registerAdmin();
        break;
      default:
        // Handle default case if necessary
        break;
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  registerPatient() {
    // Handle patient registration logic
  }

  registerDoctor() {
    // Handle doctor registration logic
  }

  registerAdmin() {
    // Handle admin registration logic
  }
}
