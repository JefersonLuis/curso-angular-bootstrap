import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CursoListaComponent } from './curso-lista.component';
import { CursoCadastroComponent } from './curso-cadastro.component';

import { StarComponent } from '../star/star.component';
import { ReplacePipe } from '../pipe/replace.pipe';
import { CommonModule} from '@angular/common'

@NgModule({
  declarations: [
    CursoListaComponent,
    CursoCadastroComponent,
    StarComponent,
    ReplacePipe,    
  ],
  imports: [
    CommonModule,
    FormsModule,    
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
