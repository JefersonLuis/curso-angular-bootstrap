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
        imagemUrl: '/assets/imagens/forms.png',
        preco: 99.99,
        codigo: 'XPS-8596',
        duracao: 120,
        avaliacao: 5.0,
        lancamentoData: 'Novembro, 17, 2020'
      }
      ,
      {
        id: 2,
        nome: 'Angular HTTP',
        imagemUrl: '/assets/imagens/http.png',
        preco: 45.99,
        codigo: 'XPS-8596',
        duracao: 120,
        avaliacao: 2.5,
        lancamentoData: 'Novembro, 30, 2020'
      }
    ];
  }
}
