import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDragonComponent } from './view-dragon.component';

describe('ViewDragonComponent', () => {
  let component: ViewDragonComponent;
  let fixture: ComponentFixture<ViewDragonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDragonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
