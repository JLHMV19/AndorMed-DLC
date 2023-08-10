import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SucessPage } from './sucess.page';

describe('SucessPage', () => {
  let component: SucessPage;
  let fixture: ComponentFixture<SucessPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SucessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
