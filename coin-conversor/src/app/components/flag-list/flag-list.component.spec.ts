import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagListComponent } from './flag-list.component';

describe('FlagListComponent', () => {
  let component: FlagListComponent;
  let fixture: ComponentFixture<FlagListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
