import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrioscomponentComponent } from './barrioscomponent.component';

describe('BarrioscomponentComponent', () => {
  let component: BarrioscomponentComponent;
  let fixture: ComponentFixture<BarrioscomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarrioscomponentComponent]
    });
    fixture = TestBed.createComponent(BarrioscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
