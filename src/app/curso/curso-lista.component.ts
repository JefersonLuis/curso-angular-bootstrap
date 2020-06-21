import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html'
} )
export class CursoListaComponent implements OnInit {

  cursos: Curso[] = [] ;

  constructor(private cursoService: CursoService){ }

  ngOnInit(): void {

    this.cursos = this.cursoService.buscaCursos();

  }
}
