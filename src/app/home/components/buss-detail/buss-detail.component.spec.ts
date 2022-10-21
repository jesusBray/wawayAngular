import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussDetailComponent } from './buss-detail.component';

describe('BussDetailComponent', () => {
  let component: BussDetailComponent;
  let fixture: ComponentFixture<BussDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
