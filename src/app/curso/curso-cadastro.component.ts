import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  templateUrl: './curso-cadastro.component.html'
})

export class CursoCadastroComponent implements OnInit {

  curso: Curso;

  constructor(private activatedRoute: ActivatedRoute, private cursoService: CursoService) { }

  ngOnInit(): void{
    this.curso =  this.cursoService.buscaCursosPorId(+this.activatedRoute.snapshot.paramMap.get('id'));
  }

  salvaCurso(): void{
    this.cursoService.salva(this.curso);
  }

}
