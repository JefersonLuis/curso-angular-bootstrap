import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Error404Component } from './error-404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CursoModule } from './curso/curso.module';


@NgModule({
  declarations: [
    AppComponent,    
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CursoModule,
    RouterModule.forRoot([       
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
