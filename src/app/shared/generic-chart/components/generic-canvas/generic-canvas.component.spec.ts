import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCanvasComponent } from './generic-canvas.component';

describe('GenericCanvasComponent', () => {
  let component: GenericCanvasComponent;
  let fixture: ComponentFixture<GenericCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
