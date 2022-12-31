import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentsCreateComponent } from './talents-create.component';

describe('TalentsCreateComponent', () => {
  let component: TalentsCreateComponent;
  let fixture: ComponentFixture<TalentsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
