import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Error404Component } from './error-404/error-404.component';
import { CursoListaComponent } from './curso/curso-lista.component';
import { CursoCadastroComponent } from './curso/curso-cadastro.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CursoListaComponent,
    CursoCadastroComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
       {
         path: 'cursos', component: CursoListaComponent
       },
       {
         path: 'cursos/cadastro/:id', component: CursoCadastroComponent
       },
       {
        path: '', redirectTo: 'cursos', pathMatch: 'full'
       },
       {
         path: '**', component: Error404Component
       }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
