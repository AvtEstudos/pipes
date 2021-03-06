import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: "Aprendendo JavaScript",
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 3),
    url: 'http://a.co/glqjpRP'
  }; 

  livros: string[]  = ['Java', 'Angular 2'];
  filtro: string;

  addCurso(valor){
    this.livros.push(valor);
  }

  obterCursos(){
    if (this.livros.length === 0 || 
      this.filtro === undefined || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0){
        return true;
      }
      return false;
    })      
  }

  //valorAsync recebe o texto Valor assíncrono em 2 segundos
  valorAsync = new Promise((resolve,reject) => {
      setTimeout(() => resolve('Valor assíncrono'), 2000)
    }
  );

  valorAsync2 = interval(2000)
  .pipe(
        map(valor => 'Valor assíncrono 2')
  );

  constructor() { }

  ngOnInit() {
  }

}
