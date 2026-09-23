import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizAsistenciaComponent } from './matriz-asistencia.component';

describe('MatrizAsistenciaComponent', () => {
  let component: MatrizAsistenciaComponent;
  let fixture: ComponentFixture<MatrizAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrizAsistenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
