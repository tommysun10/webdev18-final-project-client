import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMakerComponent } from './recipe-maker.component';

describe('RecipeMakerComponent', () => {
  let component: RecipeMakerComponent;
  let fixture: ComponentFixture<RecipeMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
