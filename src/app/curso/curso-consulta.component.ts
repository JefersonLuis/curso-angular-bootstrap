import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './curso-consulta.component.html'
})

export class CursoConsultaComponent implements OnInit {

  cursoId: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void{
    this.cursoId = +this.activatedRoute.snapshot.paramMap.get('id');
  }


}
