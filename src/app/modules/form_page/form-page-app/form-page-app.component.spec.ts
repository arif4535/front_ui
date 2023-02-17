import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPageAppComponent } from './form-page-app.component';

describe('FormPageAppComponent', () => {
  let component: FormPageAppComponent;
  let fixture: ComponentFixture<FormPageAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPageAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPageAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
