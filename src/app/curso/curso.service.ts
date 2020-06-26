import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CursoService {

  private cursoUrl: string = 'http://localhost:3100/api/cursos';

  constructor(private httpClient: HttpClient) { }

  buscaCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.cursoUrl);
  }

  buscaCursosPorId(id: number): Observable<Curso> {    
    let url_local = `${this.cursoUrl}/+${id}` ;
    return this.httpClient.get<Curso>(url_local);
    console.log('busca curso por id'+url_local);
  }

  salva(curso: Curso): Observable <Curso> {
    if ( curso.id ) {
      return this.httpClient.put<Curso>(`${this.cursoUrl}/${curso.id}`, curso) ;      
    } else {
      return this.httpClient.post<Curso>(`${this.cursoUrl}`, curso); 
    }
  }

  apagaPorId(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.cursoUrl}/${id}`);
  }

}

var CURSOS: Curso[] = [
  {
      id: 1,
      nome: 'Angular: CLI',
      lancamentoData: 'November 2, 2019',
      descricao: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
      duracao: 120,
      codigo: 'XLF-1212',
      avaliacao: 3,
      preco: 12.99,
      imagemUrl: '/assets/imagens/cli.png',
  },
  {
      id: 2,
      nome: 'Angular: Forms',
      lancamentoData: 'November 4, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
      duracao: 80,
      codigo: 'DWQ-3412',
      avaliacao: 3.5,
      preco: 24.99,
      imagemUrl: '/assets/imagens/forms.png',
  },
  {
      id: 3,
      nome: 'Angular: HTTP',
      lancamentoData: 'November 8, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
      duracao: 80,
      codigo: 'QPL-0913',
      avaliacao: 4.0,
      preco: 36.99,
      imagemUrl: '/assets/imagens/http.png',
  },
  {
      id: 4,
      nome: 'Angular: Router',
      lancamentoData: 'November 16, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
      duracao: 80,
      codigo: 'OHP-1095',
      avaliacao: 4.5,
      preco: 46.99,
      imagemUrl: '/assets/imagens/router.png',
  },
  {
      id: 5,
      nome: 'Angular: Animations',
      lancamentoData: 'November 25, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
      duracao: 80,
      codigo: 'PWY-9381',
      avaliacao: 5,
      preco: 56.99,
      imagemUrl: '/assets/imagens/animations.png',
  }
];
