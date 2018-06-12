import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourcomponentComponent } from './fourcomponent.component';

describe('FourcomponentComponent', () => {
  let component: FourcomponentComponent;
  let fixture: ComponentFixture<FourcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
