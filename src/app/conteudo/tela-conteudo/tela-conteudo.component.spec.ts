import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaConteudoComponent } from './tela-conteudo.component';

describe('TelaConteudoComponent', () => {
  let component: TelaConteudoComponent;
  let fixture: ComponentFixture<TelaConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaConteudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
