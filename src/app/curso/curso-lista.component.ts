import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html'
} )
export class CursoListaComponent implements OnInit {

  _filtrarPor: string;
  _filtradoCursos: Curso[] = [];
  _cursos: Curso[] = [];

  cursos: Curso[] = [] ;

  constructor(private cursoService: CursoService){ }

  ngOnInit(): void {
    this._cursos = this.cursoService.buscaCursos();
    this._filtradoCursos = this._cursos;

  }

  set filtro(value: string) {
    this._filtrarPor = value;
    this._filtradoCursos = this._cursos.filter((curso: Curso) => curso.nome.toLocaleLowerCase().indexOf(this._filtrarPor.toLocaleLowerCase()) > -1 );
  }

  get filtro() {
    return this._filtrarPor ;
  }
}
