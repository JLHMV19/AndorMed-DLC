import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientRegisterPage } from './patient-register.page';

describe('PatientRegisterPage', () => {
  let component: PatientRegisterPage;
  let fixture: ComponentFixture<PatientRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PatientRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
