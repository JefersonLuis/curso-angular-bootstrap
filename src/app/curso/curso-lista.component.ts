import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Curso } from './curso';
import { CursoService } from './curso.service';

import {Router} from "@angular/router";


@Component({
  //selector: 'app-curso-lista', nao utiliza mais pois esta utilizando router
  templateUrl: './curso-lista.component.html'
} )
export class CursoListaComponent implements OnInit {
  _filtrarPor: string;
  _filtradoCursos: Curso[] = [];
  _cursos: Curso[] = [];

  cursos: Curso[] = [] ;

  constructor(private router: Router, private cursoService: CursoService){ }

  ngOnInit(): void {
    this.buscaCursos();
  }

  buscaCursos(): void {
    this.cursoService.buscaCursos().subscribe({
      next: cursos => {
        this._cursos = cursos;
        this._filtradoCursos = this._cursos;
      },
      error: err => console.log('Error', err)
    });
  }

  apagaPorId(cursoId:number):void{
    this.cursoService.apagaPorId(cursoId).subscribe({
      next: () =>{
        console.log('Apagar com sucesso');
        this.buscaCursos();
      },
      error: err => console.log('Error', err)      
    })
  }

  set filtro(value: string) {
    this._filtrarPor = value;
    this._filtradoCursos = this._cursos.filter((curso: Curso) => curso.nome.toLocaleLowerCase().indexOf(this._filtrarPor.toLocaleLowerCase()) > -1 );
  }

  get filtro() {
    return this._filtrarPor ;
  }

  inserirCurso(): void {
    this.router.navigate(['/cursos/cadastro']);
  };

}
