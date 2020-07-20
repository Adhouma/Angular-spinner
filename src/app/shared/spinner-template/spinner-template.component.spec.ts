import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerTemplateComponent } from './spinner-template.component';

describe('SpinnerTemplateComponent', () => {
  let component: SpinnerTemplateComponent;
  let fixture: ComponentFixture<SpinnerTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
