import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickvmPageComponent } from './quickvm-page.component';

describe('QuickvmPageComponent', () => {
  let component: QuickvmPageComponent;
  let fixture: ComponentFixture<QuickvmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickvmPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickvmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
