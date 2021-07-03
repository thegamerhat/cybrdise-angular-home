import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitaraPageComponent } from './sitara-page.component';

describe('SitaraPageComponent', () => {
  let component: SitaraPageComponent;
  let fixture: ComponentFixture<SitaraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitaraPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitaraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
