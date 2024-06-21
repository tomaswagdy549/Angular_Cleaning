import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenServicesComponent } from './garden-services.component';

describe('GardenServicesComponent', () => {
  let component: GardenServicesComponent;
  let fixture: ComponentFixture<GardenServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GardenServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GardenServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
