import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {
  doctorForm!: FormGroup;

  constructor(private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit() {
    this.buildDoctorForm();
  }

  buildDoctorForm() {
    this.doctorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      speciality: ['', [Validators.required, Validators.minLength(5)]],
      professionalLicence: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

}
