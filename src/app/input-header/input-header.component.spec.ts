import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHeaderComponent } from './input-header.component';

describe('InputHeaderComponent', () => {
  let component: InputHeaderComponent;
  let fixture: ComponentFixture<InputHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputHeaderComponent]
    });
    fixture = TestBed.createComponent(InputHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
