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

  ngOnInit(): void {
    this.cursoService.buscaCursosPorId(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
        next: curso => this.curso =   curso ,
        error: err => console.log('Erro', err )
    });
  }

  salvaCurso(): void{
    this.cursoService.salva(this.curso).subscribe({
      next : curso => console.log('Salvo com sucesso!', curso),
      error: err => console.log('Error',err) 
    })
  }

  
}
