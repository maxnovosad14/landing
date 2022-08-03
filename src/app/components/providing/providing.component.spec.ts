import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidingComponent } from './providing.component';

describe('ProvidingComponent', () => {
  let component: ProvidingComponent;
  let fixture: ComponentFixture<ProvidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
