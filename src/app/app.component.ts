import { TesteService } from './teste.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nomes: String[]

  constructor(private testeService: TesteService){
    this.nomes = testeService.getNomes();

  }

}



