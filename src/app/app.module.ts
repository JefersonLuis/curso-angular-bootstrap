import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from  './core/core.module';
import { CursoModule } from './curso/curso.module';


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,    
    HttpClientModule,
 
    CursoModule,
    CoreModule,
    RouterModule.forRoot([       
       {
        path: '', redirectTo: 'cursos', pathMatch: 'full'
       }      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
