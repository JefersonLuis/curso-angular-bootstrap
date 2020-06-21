import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html'
} )
export class CursoListaComponent implements OnInit {

  cursos: Curso[] = [] ;

  ngOnInit(): void {

    this.cursos = [
      {
        id: 1,
        nome: 'Angular Forms',
        imagemUrl: '',
        preco: 99.99,
        codigo: 'XPS-8596',
        duracao: 120,
        avaliacao: 4.4,
        lancamentoData: 'Novembro, 17, 2020'
      }
      ,
      {
        id: 2,
        nome: 'Angular HTTP',
        imagemUrl: '',
        preco: 45.99,
        codigo: 'XPS-8596',
        duracao: 120,
        avaliacao: 4.4,
        lancamentoData: 'Novembro, 30, 2020'
      }

    ]

  }

}
