import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CursoListaComponent } from './curso-lista.component';
import { CursoCadastroComponent } from './curso-cadastro.component';


import { CommonModule} from '@angular/common'
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
  declarations: [
    CursoListaComponent,
    CursoCadastroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,    
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
       {
         path: 'cursos', component: CursoListaComponent
       },
       {
         path: 'cursos/cadastro/:id', component: CursoCadastroComponent
       }      
    ])
  ]  
})
export class CursoModule { 

}
