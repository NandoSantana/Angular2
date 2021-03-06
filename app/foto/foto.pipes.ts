import {Pipe, PipeTransform} from '@angular/core';
import {FotoComponent} from './foto.component';

@Pipe({
    name:'filtroPorTitulo'
})


export class FiltroPorTitulo implements PipeTransform{

    transform(fotos:FotoComponent[], digitado: string){
       // console.log(fotos);
        //console.log(digitado);
        digitado = digitado.toLowerCase();
        //console.log(digitado);
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado));
    }
}